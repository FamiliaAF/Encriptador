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

const inputText = document.getElementById('input-text')
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const display = document.getElementById("display");

btnEncriptar.addEventListener('click', () => {
  const texto = inputText.value;
  const textoEncriptado = encriptador(texto);
  btnCopiar.style.display = 'block';
  display.innerText = textoEncriptado
});

btnDesencriptar.addEventListener('click', () => {
  const texto = inputText.value;
  const textoDesencriptado = desencriptador(texto);
  display.innerText = textoDesencriptado
});

btnCopiar.addEventListener('click', async () => {
  const textoCopiado = display.innerText;
  await navigator.clipboard.writeText(textoCopiado)
});
