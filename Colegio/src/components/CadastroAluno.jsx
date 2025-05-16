import { useState } from 'react';
// src/components/CadastroAluno.jsx
import '../../pages/index.css';  // Caminho corrigido (volta 2 pastas: components → src → pages)

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [status, setStatus] = useState('ativo');
  const [notas, setNotas] = useState(['', '', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, matricula, status, notas });
    alert('Aluno cadastrado!');
  };

  return (
    <div className="container-desktop">
      <h1>Cadastro de Aluno</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Seção Dados do Aluno */}
        <div className="secao-dados">
          <h2>Dados Pessoais</h2>
          <div className="campo-grande">
            <label>Nome Completo:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="campo-grande">
            <label>Número de Matrícula:</label>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>

          <div className="campo-grande">
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
        </div>

        {/* Seção Notas */}
        <div className="secao-notas">
          <h2>Notas do Aluno</h2>
          <div className="grades-grid">
            {notas.map((nota, index) => (
              <div className="campo-nota" key={index}>
                <label>Nota {index + 1}:</label>
                <input
                  type="number"
                  value={nota}
                  onChange={(e) => {
                    const novasNotas = [...notas];
                    novasNotas[index] = e.target.value;
                    setNotas(novasNotas);
                  }}
                  min="0"
                  max="10"
                />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="botao-verde">
          Salvar Cadastro
        </button>
      </form>
    </div>
  );
}