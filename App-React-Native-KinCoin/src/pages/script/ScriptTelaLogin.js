export function ScriptTelaLogin({ email, senha }) {
  // Verifica se todos os campos foram preenchidos
  if (!email || !senha) {
    return "Preencha todos os campos!";
  }

  // Verifica se o e-mail é válido
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "E-mail inválido!";
  }

  // Verifica se a senha tem no mínimo 6 caracteres
  if (senha.length < 6) {
    return "A senha deve ter pelo menos 6 caracteres!";
  }

  // Se tudo estiver ok, retorna null
  return null;
}
