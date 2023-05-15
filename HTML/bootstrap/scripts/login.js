const form = document.querySelector("form");
form.onsubmit = (evento) => {
  evento.preventDefault();
  const email = form.elements["email"].value;
  const senha = form.elements["senha"].value;
  if(email === "email@email.com" && senha === "123") {
    alert("Bem vindo!");
    window.location.href = "./index.html";
  } else {
    alert("Acesso negado!");
  }
}