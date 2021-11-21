export function initPageC(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <custom-header></custom-header>

    <div class="container-style">
    <custom-title>Gracias</custom-title>
    <custom-anothertext>Toda la informacion que nos brindaste es importante</custom-anothertext>

    <custom-button class="start-button">De nada</custom-button>
    </div>

    <custom-footer></custom-footer>

    `;

  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
