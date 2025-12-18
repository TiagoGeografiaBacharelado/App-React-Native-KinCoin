export function ScriptRecuperacaoSenha({ email }) {
  if (!email || email.trim() === "") {
    return "O e-mail é obrigatório!";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "E-mail inválido!";
  }

  // Se estiver tudo certo, retorna null
  return null;
}
