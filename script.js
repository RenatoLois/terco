let pecasTerco = document.getElementById("terco-track").children;
atualIndex = 0;

function centralizarPecaAtual() {
  let terco = document.querySelector('.terco');
  let pecaAtual = terco.firstElementChild.children[atualIndex].firstChild;
  terco.scrollTo({
    top: pecaAtual.offsetTop - terco.clientHeight/2 + pecaAtual.offsetHeight, behavior: "smooth"});
}

function pecaSeguinte() {
  if (atualIndex < pecasTerco.length - 1) {
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
    atualIndex++;
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
  }
}

function pecaAnterior() {
  if (atualIndex > 0) {
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
    atualIndex--;
    pecasTerco[atualIndex].firstElementChild.classList.toggle('peca-atual');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark');
}
