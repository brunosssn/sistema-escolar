import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function listarProfessores() {
  const resposta = await api.get("/professores");
  return resposta.data;
}

export async function criarProfessores(professor) {
  const resposta = await api.post("/professores", professor);
  return resposta.data;
}

export async function excluirProfessores(id) {
  await api.delete("/professores/" + id);
}
