//import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


//import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
//import "../node_modules/@popperjs/core/dist/umd/popper.min.js";

//import "../node_modules/bootstrap/js/dist/alert.js";
//import "../node_modules/bootstrap/js/dist/base-component.js";
//import "../node_modules/bootstrap/js/dist/button.js";
//import "../node_modules/bootstrap/js/dist/carousel.js";
//import "../node_modules/bootstrap/js/dist/collapse.js";
//import "../node_modules/bootstrap/js/dist/dropdown.js";
//import "../node_modules/bootstrap/js/dist/modal.js";
//import "../node_modules/bootstrap/js/dist/offcanvas.js";
//import "../node_modules/bootstrap/js/dist/popover.js";
//import "../node_modules/bootstrap/js/dist/scrollspy.js";
//import "../node_modules/bootstrap/js/dist/tab.js";
//import "../node_modules/bootstrap/js/dist/toast.js";
//import "../node_modules/bootstrap/js/dist/tooltip.js";

export function render ( page ) {
  const app = document.querySelector( '#app' )
  app.innerHTML = ( page )
}

