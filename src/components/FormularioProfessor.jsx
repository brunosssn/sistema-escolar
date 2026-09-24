import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormularioProfessor(props) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [data_admissao, setDataAdmissao] = useState("");

  function aoEnviar(e) {
    e.preventDefault();
    const professor = {
      nome: nome,
      email: email,
      cpf: cpf,
      disciplina: disciplina,
      data_admissao: data_admissao,
    };
    props.aoSalvar(professor);
    setNome("");
    setEmail("");
    setCpf("");
    setDisciplina("");
    setDataAdmissao("");
  }

  return (
    <form className="formulario-professor" onSubmit={aoEnviar}>
      <CampoTexto rotulo="Nome" valor={nome} aoAlterar={setNome} />
      <CampoTexto rotulo="Email" tipo="email" valor={email} aoAlterar={setEmail} />
      <CampoTexto rotulo="CPF" valor={cpf} aoAlterar={setCpf} />
      <CampoTexto rotulo="Disciplina" valor={disciplina} aoAlterar={setDisciplina} />
      <CampoTexto rotulo="Data de admissão" tipo="date" valor={data_admissao} aoAlterar={setDataAdmissao} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProfessor;
