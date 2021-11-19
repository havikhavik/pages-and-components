import { init as initLucasHeader } from "../components/header";
import { init as initLucasContainer } from "../components/container";
import { init as initLucasTitle } from "../components/title";
import { init as initLucasRichText } from "../components/rich-text";
import { init as initLucasAnotherText } from "../components/another-text";
import { init as initLucasMenu } from "../components/menu";
import { init as initLucasFooter } from "../components/footer";
import { init as initLucasButton } from "../components/input-btn";
import { init as initLucasInput } from "../components/input-field";
import { init as initLucasGoBackBtn } from "../components/goback-btn";
import { init as initLucasSelect } from "../components/select-input";
import { initRouter } from "./router";

(function () {
  const container = document.querySelector(".root");

  initRouter(container);
  initLucasHeader();
  initLucasContainer();
  initLucasTitle();
  initLucasRichText();
  initLucasAnotherText();
  initLucasMenu();
  initLucasFooter();
  initLucasButton();
  initLucasInput();
  initLucasGoBackBtn();
  initLucasSelect();
})();
