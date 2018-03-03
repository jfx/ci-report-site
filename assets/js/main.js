var $ = require('jquery');

import Popper from 'popper.js';
window.Popper = Popper;
require('bootstrap');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
