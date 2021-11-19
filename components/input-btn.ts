export function init() {
  class BtnEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");

      let buttonEl = document.createElement("div");
      buttonEl.className = "button-style";
      buttonEl.textContent = this.textContent;

      style.textContent = `


            .button-style{
            background-color:#9CBBE9;
            width:100%;
            margin: 15px 0px;
            padding: 15px 0px;
            text-align:center;
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            }




            `;
      buttonEl.addEventListener("click", () => {});

      shadow.appendChild(style);
      shadow.appendChild(buttonEl);
    }
  }

  customElements.define("custom-button", BtnEl);
}
