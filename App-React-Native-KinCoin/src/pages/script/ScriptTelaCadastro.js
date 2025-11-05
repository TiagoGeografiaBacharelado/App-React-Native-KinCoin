export function ScriptTelaCadastro({ nome, email, senha, confirmarSenha, dia, mes, ano }) {
  if (!nome || !email || !senha || !confirmarSenha || !dia || !mes || !ano) {
    return "Preencha todos os campos!";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { //expressão regular (regex) estudar mais depois
    return "E-mail inválido!";
  }

  if (senha.length < 6) {
    return "A senha deve ter pelo menos 6 caracteres!";
  }

  if (senha !== confirmarSenha) {
    return "As senhas não coincidem!";
  }

  const diaNum = parseInt(dia);
  const mesNum = parseInt(mes);
  const anoNum = parseInt(ano);
  const anoAtual = new Date().getFullYear();

  if (isNaN(diaNum) || diaNum < 1 || diaNum > 31) {
    return "Dia de nascimento inválido!";
  }

  if (isNaN(mesNum) || mesNum < 1 || mesNum > 12) {
    return "Mês de nascimento inválido!";
  }

  if (isNaN(anoNum) || anoNum < 1900 || anoNum > anoAtual) {
    return "Ano de nascimento inválido!";
  }

  return null;
}