export function initPageA(params) {
  const div = document.createElement("div");

  div.innerHTML = `
    <custom-header></custom-header>
    <custom-container>
      <custom-title>Te damos la bienvenida a esta página</custom-title>
      <custom-richtext></custom-richtext>
      <custom-anothertext>Para continuar ingresa tu nombre.</custom-anothertext>
      <custom-menu class="start-button"></custom-menu>
    </custom-container>
    <custom-footer></custom-footer>

  `;
  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/step-1");
  });

  return div;
}
