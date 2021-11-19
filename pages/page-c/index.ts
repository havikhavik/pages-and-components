export function initPageC(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <custom-header></custom-header>

    <custom-container>
    <custom-title>Gracias</custom-title>
    <custom-anothertext>Toda la informacion que nos brindaste es importante</custom-anothertext>

    <custom-button>De nada</custom-button>
    </custom-container>

    <custom-footer></custom-footer>

    `;

  return div;
}
