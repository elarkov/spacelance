
import * as functions from "./modules/functions.js";
import * as phoneinput from "./modules/phoneinput.js";
import * as slider from "./modules/slider.js";
import * as micromodal from "./modules/micromodal.js";
import * as lazyload from "./modules/lazyload.js";
import * as sideMenu from "./modules/side-menu.js";
import * as validate from "./modules/validata.js";


functions.isWebp();
phoneinput.phoneInput();
micromodal.renderPopup();
sideMenu.sideMenu();
lazyload.lazyLoadImg();
validate.validateField();
slider.renderSlider();

