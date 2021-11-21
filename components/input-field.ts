export function init() {
  class InputEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");

      let labelEl = document.createElement("label");
      labelEl.setAttribute("for", "text");
      labelEl.className = "label-style";
      labelEl.textContent = this.id;

      let inputEl = document.createElement("input");
      inputEl.className = "input-style";
      inputEl.type = "text";
      inputEl.id = "text";
      inputEl.placeholder = this.getAttribute("placeholder");

      style.textContent = `
           
            .label-style{
            text-align:start;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            .input-style{
                
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
      shadow.appendChild(inputEl);
    }
  }

  customElements.define("custom-input", InputEl);
}
