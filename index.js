import './SearchPost/app.js';

"use strict";
(function() {

  window.addEventListener("load", init);

  function init(){
    id("searchPost").document.addEventListener(onkeyup,"searchText");
    id("searchBtn").document.addEventListener(click,"searchText");
  }

  function searchText(){


  }




  function id(name) {
    return document.getElementById(name);
  }

} );