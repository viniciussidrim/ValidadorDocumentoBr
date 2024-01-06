import React, { useState } from 'react';

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

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedCPF = formatCPF(inputValue);
    setCPF(formattedCPF);
  };

  return (
    <input
      type="text"
      value={cpf}
      onChange={handleChange}
      className="p-1 w-1/2 rounded-lg outline-xdark text-center bg-slate-100"
      placeholder="Digite o CPF"
    />
  );
};

export default CPFinput;