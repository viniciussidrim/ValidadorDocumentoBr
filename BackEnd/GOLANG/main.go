package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Request struct {
	CPF string `json:"cpf"`
}

func validateCPF(c *gin.Context) {
	var req Request

	//Valida existencia
	if err := c.ShouldBindJSON(&req); err != nil {
		//fmt.Println("Erro ao fazer o bind dos dados JSON:", err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": "Formato inválido de dados"})
		return
	}

	//Valida 11 numeros
	if len(req.CPF) != 11 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "O CPF deve conter exatamente 11 dígitos"})
		return
	}

	//https://www.macoratti.net/alg_cpf.htm
	//link acima foi usado como parametro para desenvolver
	novePrimeiras := req.CPF[:9]

	fmt.Println(novePrimeiras)
	c.JSON(http.StatusOK, gin.H{"message": novePrimeiras})
}

func main() {
	router := gin.Default()

	router.POST("/validacpf", validateCPF)

	router.Run("localhost:3000")
}
