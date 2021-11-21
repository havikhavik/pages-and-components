export function initPageA(params) {
  const div = document.createElement("div");

  div.innerHTML = `
    <custom-header></custom-header>
    <div class="container-style">
      <custom-title>Te damos la bienvenida a esta página</custom-title>
      <custom-richtext></custom-richtext>
      <custom-anothertext>Para continuar ingresa tu nombre.</custom-anothertext>
      <custom-input id="Nombre" placeholder="Ingresá tu Nombre"></custom-input>
      <custom-button class="start-button">Comenzar</custom-button>
    </div>
    <custom-footer></custom-footer>

  `;
  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/step-1");
  });

  return div;
}
