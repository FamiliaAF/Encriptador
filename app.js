const codes = [
  ['a', 'xx'],
  ['e', 'ww'],
  ['i', 'zz'],
  ['o', 'yy'],
  ['u', 'gg'],
  ['m', '6'],
];

function encriptador(texto) {
  codes.forEach(item => {
    if (texto.includes(item[0])) {
      texto = texto.replaceAll(item[0], item[1]);
    }
  });
  return texto;
}

function desencriptador(texto) {
  codes.forEach(item => {
    if (texto.includes(item[1])) {
      texto = texto.replaceAll(item[1], item[0]);
    }
  });
  return texto;
}

const inputEncriptar = document.getElementById("input-encriptar");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const display = document.getElementById("display");

btnEncriptar.addEventListener('click', () => {
  const texto = inputEncriptar.value;
  const textoEncriptado = encriptador(texto);
  display.innerText = textoEncriptado
  btnCopiar.style.display = 'block';
});

btnDesencriptar.addEventListener('click', () => {
  const texto = inputEncriptar.value;
  const textoDesencriptado = desencriptador(texto);
  display.innerText = textoDesencriptado
});

btnCopiar.addEventListener('click', async () => {
  const textoCopiado = display.innerText;
  await navigator.clipboard.writeText(textoCopiado)
});
