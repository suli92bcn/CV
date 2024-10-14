import * as cookies from './cookies.js';
cookies.initCookieBar();

import { iniciarCarrousel } from './carrousel.js';
iniciarCarrousel();

import { abrirModal } from './modal.js';
abrirModal('.pdfLink', '#pdfModal', '#pdfViewer', '.close');