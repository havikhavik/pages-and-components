export function init() {
  class SelectEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");

      let labelEl = document.createElement("label");
      labelEl.setAttribute("for", "select");
      labelEl.className = "label-style";
      labelEl.textContent = this.id;

      let selectEl = document.createElement("select");
      selectEl.className = "select-style";
      selectEl.textContent = this.textContent;
      selectEl.id = "select";

      let myOption = document.createElement("option");
      myOption.text = "Piedra";
      myOption.value = "Piedra";

      let mySecondOption = document.createElement("option");
      mySecondOption.text = "Papel";
      mySecondOption.value = "Papel";

      let myThirdOption = document.createElement("option");
      myThirdOption.text = "Tijera";
      myThirdOption.value = "Tijera";

      selectEl.appendChild(myOption);
      selectEl.appendChild(mySecondOption);
      selectEl.appendChild(myThirdOption);

      style.textContent = `

      .label-style{
        text-align:start;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        }

      .select-style{
                
        text-align:start;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        width:100%;
        margin-bottom:30px;
        padding: 17px 13px;
        box-sizing: border-box;


        }




        `;

      shadow.appendChild(style);
      shadow.appendChild(labelEl);
      shadow.appendChild(selectEl);
    }
  }

  customElements.define("custom-select", SelectEl);
}
