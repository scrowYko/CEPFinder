import { useState} from "react";

export default function Cep() {
const [cep, setCep] = useState('');
const [endereco, setEndereco] = useState(null);

const fetchCep = async () => {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await res.json();
    setEndereco(data);
  } catch (error) {
    console.error("Erro ao buscar CEP, :", error);
  }
};


  return (
    <>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        id="cep"
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick= {fetchCep}>Pesquisar</button>

      {endereco && (
        <div>
            <p>Rua: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>UF: {endereco.uf}</p>
        </div>
      )}
    </>
  );
}
