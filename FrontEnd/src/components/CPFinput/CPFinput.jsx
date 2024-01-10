import React, { useState } from "react";

const formatCPF = (value) => {
  // Remove caracteres não numéricos
  const numericValue = value.replace(/\D/g, '');

  // Adiciona pontos e hífen conforme o formato do CPF
  if (numericValue.length <= 3) {
    return numericValue;
  } else if (numericValue.length <= 6) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
  } else if (numericValue.length <= 9) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6)}`;
  } else {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6, 9)}-${numericValue.slice(9, 11)}`;
  }
};

const CPFinput = () => {
  const [cpf, setCPF] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidation = async () => {
    if (cpf.length === 14) { // Verifica o comprimento do CPF formatado
      try {
        const response = await fetch("http://localhost:3000/api/validacpf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cpf }), // Envia o CPF formatado
        });

        const data = await response.json();
        setValidationMessage(data.message);
      } catch (error) {
        console.error("Erro ao validar CPF:", error);
      }
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedCPF = formatCPF(inputValue);
    setCPF(formattedCPF);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={cpf}
        onChange={handleChange}
        className="p-1 rounded-lg outline-xdark text-center bg-slate-100"
        placeholder="Digite o CPF"
      />
      {validationMessage && (
        <div className="text-light">
          <h1>{validationMessage}</h1>
        </div>
      )}
      <button
        onClick={handleValidation} // Realiza a validação apenas ao pressionar o botão
        className="bg-xdark text-medium px-3 py-1 rounded-md hover:font-bold duration-100 mt-4" // Adicionando margem na parte superior (mt-4)
      >
        Validar
      </button>
    </div>
  );
};

export default CPFinput;