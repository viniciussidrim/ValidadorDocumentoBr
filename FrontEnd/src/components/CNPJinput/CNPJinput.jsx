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

const CNPJinput = () => {
  const [cnpj, setCNPJ] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedCNPJ = formatCNPJ(inputValue);
    setCNPJ(formattedCNPJ);
  };

  return (
    <input
      type="text"
      value={cnpj}
      onChange={handleChange}
      className="p-1 rounded-lg outline-xdark text-center bg-slate-100"
      placeholder="Digite o CNPJ"
    />
  );
};

export default CNPJinput;