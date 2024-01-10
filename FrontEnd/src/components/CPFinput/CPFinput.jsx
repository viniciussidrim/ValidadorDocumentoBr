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

  const handleValidation = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (cpf.length === 14) {
      setValidationMessage('Verificando...')
      try {
        const response = await fetch("http://localhost:3000/api/validacpf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cpf }),
        });
        
        const data = await response.json();
        setValidationMessage(data.message);
        console.log(data.message);
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
    <form onSubmit={handleValidation} className="flex flex-col items-center gap-3">
      <input
        type="text"
        value={cpf}
        onChange={handleChange}
        className="p-1 rounded-lg outline-xdark text-center bg-slate-100"
        placeholder="Digite o CPF"
      />
      {validationMessage && (
        <div className="text-light ">
          <h1>{validationMessage}</h1>
        </div>
      )}
      <button
        type="submit" // Specify the button type as "submit" to trigger form submission
        className="bg-xdark text-medium px-3 py-1 rounded-md hover:font-bold duration-100"
      >
        Validar
      </button>
    </form>
  );
};

export default CPFinput;
