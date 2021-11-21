export function initPageB(params) {
  const div = document.createElement("div");

  div.innerHTML = `
    <custom-header></custom-header>

    <div class="container-style">
    <custom-title>Necesitamos algunos datos más</custom-title>
    <custom-input id="Email"></custom-input>
    <custom-input id="Comida favorita"></custom-input>
    <custom-select id="Alguna de estas tres opciones"> </custom-select>

    <custom-button class="start-button">Continuar</custom-button>
    <custom-back-btn class="goback-button"> Volver </custom-back-btn>
    </div>
    <custom-footer></custom-footer>

    `;

  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/thankyou");
  });
  const goBackButtonEl = div.querySelector(".goback-button");

  goBackButtonEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
