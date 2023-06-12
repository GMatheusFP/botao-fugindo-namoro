const yes = window.document.getElementById("opcyes");
const no = window.document.getElementById("opcNo");
const resp = window.document.getElementById("text");

no.addEventListener("mouseenter", entrar);
let estado = -1;

function entrar() {
  estado++;
  if (estado == 0) {
    yes.style.transform = "translate(+95px)";
    no.style.transform = `translate(150px, -${Math.random() * 400}px)`;
  }
  if (estado == 1) {
    no.style.transform = `translate(${Math.random() * 500}px, +${
      Math.random() * 400
    }px)`;
  }
  if (estado == 2) {
    no.style.transform = `translate(-${Math.random() * 500}px, +${
      Math.random() * 400
    }px)`;
  }
  if (estado == 3) {
    no.style.transform = `translate(-${Math.random() * 500}px, -${
      Math.random() * 400
    }px)`;
  }
  if (estado == 4) {
    no.style.transform = `translate(+${Math.random() * 500}px, +${
      Math.random() * 400
    }px)`;
  }
  if (estado == 5) {
    no.style.transform = `translate(+${Math.random() * 500}px, -${
      Math.random() * 400
    }px)`;
  }
  if (estado == 6) {
    no.style.transform = `translate(-${Math.random() * 500}px, +${
      Math.random() * 400
    }px)`;
  }
  if (estado == 7) {
    no.style.transform = `translate(-${Math.random() * 500}px, -${
      Math.random() * 400
    }px)`;
    estado = -1;
  }
}

yes.addEventListener("click", click);

function click() {
  resp.innerHTML = "Eu te amo meu amoooor!!";
  yes.style.transform = "translate(0px)";
  no.style.transform = "translate(0px, 0px)";
  no.innerHTML = "Não tem mais volta";
  no.style.width = "400px";

  resp.style.opacity = 1;

  setTimeout(function () {
    resp.style.opacity = 0;
  }, 15000);
}
