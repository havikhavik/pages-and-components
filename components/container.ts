export function init() {
  class ContainerEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      let ContainerEl = document.createElement("div");
      let style = document.createElement("style");
      ContainerEl.className = "container-style";
      style.textContent = `
           
            .container-style{
            margin: 0px;
            padding:40px 30px;
            max-width:600px;
            min-height:70vh;
          

            }

            @media (min-width: 600px) {
                .container-style {
                  margin: 0 auto;
                }
              }

            `;
      shadow.appendChild(style);
      shadow.appendChild(ContainerEl);

      while (this.children) {
        ContainerEl.appendChild(this.firstChild);
      }
    }
  }

  customElements.define("custom-container", ContainerEl);
}
