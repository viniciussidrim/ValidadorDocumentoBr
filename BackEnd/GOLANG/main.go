package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

func removeNonNumericChars(s string) string {
	return strings.Join(strings.FieldsFunc(s, func(r rune) bool {
		return r < '0' || r > '9'
	}), "")
}

func calculateCombination(digits string, weights []int) int {
	combination := 0
	for i, char := range digits {
		numero := int(char - '0')
		combination += (numero * weights[i])
	}
	return (combination * 10) % 11
}

func validaCPF(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var requestData map[string]string
	err := decoder.Decode(&requestData)

	if err != nil {
		http.Error(w, "Erro ao decodificar o corpo da solicitação", http.StatusBadRequest)
		return
	}

	cpf, ok := requestData["cpf"]
	if !ok {
		http.Error(w, "Campo 'cpf' não encontrado no corpo da solicitação", http.StatusBadRequest)
		return
	}

	valor := removeNonNumericChars(cpf)

	if len(valor) != 11 {
		http.Error(w, "CPF inválido!!!", http.StatusBadRequest)
		return
	}

	noveDigitos := valor[:9]
	segundaCombinacao := calculateCombination(noveDigitos, []int{10, 9, 8, 7, 6, 5, 4, 3, 2})

	if segundaCombinacao == 10 {
		segundaCombinacao = 0
	}

	dezMaisUm := valor[:10]
	quartaCombinacao := calculateCombination(dezMaisUm, []int{11, 10, 9, 8, 7, 6, 5, 4, 3, 2})

	if quartaCombinacao == 10 {
		quartaCombinacao = 0
	}

	if segundaCombinacao == int(valor[9]-'0') && quartaCombinacao == int(valor[10]-'0') {
		response := map[string]string{"message": "CPF válido"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	} else {
		response := map[string]string{"message": "CPF inválido"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	}
}

func main() {
	http.HandleFunc("/api/validaCpf", validaCPF)

	port := 3000
	fmt.Printf("Server listening on port %d...\n", port)
	http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
