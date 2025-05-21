import { useState } from 'react';
import '../index.css';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [status, setStatus] = useState('ativo');
  const [notas, setNotas] = useState(['', '', '', '']);

  const salvarDados = () => {
    console.log('Dados salvos:', { nome, matricula, status });
    alert('Dados pessoais salvos com sucesso!');
  };

  const salvarNotas = () => {
    console.log('Notas salvas:', notas);
    alert('Notas salvas com sucesso!');
  };

  const salvarTudo = () => {
    console.log('Tudo salvo:', { nome, matricula, status, notas });
    alert('Cadastro completo salvo!');
    // Limpar os campos se necessário
    // setNome('');
    // setMatricula('');
    // setStatus('ativo');
    // setNotas(['', '', '', '']);
  };

  return (
    <div className="container-desktop">
      <h1>Cadastro de Aluno</h1>
      
      <form onSubmit={(e) => e.preventDefault()}>
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

          <button 
            type="button" 
            className="botao-azul"
            onClick={salvarDados}
          >
            Salvar Dados
          </button>
        </div>

        {/* Seção Notas */}
        <div className="secao-notas">
          <h2>Notas do Aluno</h2>
          <div className="notas-container">
            {notas.map((nota, index) => (
              <div className="nota-item" key={index}>
                <label>Nota {index + 1}</label>
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

          <button 
            type="button" 
            className="botao-verde"
            onClick={salvarNotas}
          >
            Salvar Notas
          </button>
        </div>

        {/* Botão para salvar tudo */}
        <button 
          type="button" 
          className="botao-roxo"
          onClick={salvarTudo}
        >
          Salvar Tudo
        </button>
      </form>
    </div>
  );
}