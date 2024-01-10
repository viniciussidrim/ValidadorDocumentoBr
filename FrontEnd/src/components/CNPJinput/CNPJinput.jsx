import React, { useState } from 'react';

const formatCNPJ = (value) => {
  // Remove caracteres não numéricos
  const numericValue = value.replace(/\D/g, '');

  // Adiciona pontos, barra e hífen conforme o formato do CNPJ
  if (numericValue.length <= 2) {
    return numericValue;
  } else if (numericValue.length <= 5) {
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
  } else if (numericValue.length <= 8) {
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5)}`;
  } else if (numericValue.length <= 12) {
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8)}`;
  } else {
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8, 12)}-${numericValue.slice(12, 14)}`;
  }
};

const CNPJInput = () => {
  const [cnpj, setCNPJ] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidation = async (e) => {
    e.preventDefault();

    if (cnpj.length === 18) {
      setValidationMessage('Verificando...');
      try {
        const response = await fetch("http://localhost:3000/api/validacnpj", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cnpj }),
        });

        const data = await response.json();
        setValidationMessage(data.message);
        console.log(data.message);
      } catch (error) {
        console.error("Error validating CNPJ:", error);
      }
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedCNPJ = formatCNPJ(inputValue);
    setCNPJ(formattedCNPJ);
  };

  return (
    <form onSubmit={handleValidation} className="flex flex-col items-center gap-3">
      <input
        type="text"
        value={cnpj}
        onChange={handleChange}
        className="p-1 rounded-lg outline-xdark text-center bg-slate-100"
        placeholder="Digite o CNPJ"
      />
      {validationMessage && (
        <div className="text-light ">
          <h1>{validationMessage}</h1>
        </div>
      )}
      <button
        type="submit"
        className="bg-xdark text-medium px-3 py-1 rounded-md hover:font-bold duration-100"
      >
        Validar
      </button>
    </form>
  );
};

export default CNPJInput;