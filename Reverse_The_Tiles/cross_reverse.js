/*
  Name: Jaesun Baek
  Date: April 30, 2024
  Section: IAB 6068 - Internet Programming
  Reverse the tiles
  category: projects
*/

"use strict";
(function() {

  window.addEventListener("load", init);

  let tiles = null;
  let completeOnce = false;

  function init() {
    id("resetBtn").addEventListener('click', resetTheTiles)
    id("completionBtn").addEventListener('click', recordScore);
    tiles = cls('tile');
    for (let i = 0; i < tiles.length; i++)
      tiles[i].addEventListener('click', reverseTheTiles);
    resetTheTiles();
  }

  function resetTheTiles() { // reset and start
    let score = 0;
    id('score').textContent = score;

    for (let i = 0; i < tiles.length; i++){
      let randReverse = Math.floor(Math.random()*2);

      if (randReverse == 0){
        if (tiles[i].classList.contains('reversed'))
          tiles[i].classList.remove('reversed');
      } else{
        if (!tiles[i].classList.contains('reversed'))
          tiles[i].classList.add('reversed');
      }
    }
  }

  function recordScore() {

    function completeCheck(){
      for (let i = 0; i < tiles.length; i++){
        if(completeColor != tiles[i].classList.contains('reversed')){
          alert('PLZ DO NOT CHEAT');
          preventCheat = false;
          break;
        }
      }
    }
    let completeColor = tiles[0].classList.contains('reversed');
    let preventCheat = true;

    if(!completeOnce){
      completeCheck();
      if (preventCheat){
        completeOnce = true;
        id('best-score').textContent = parseInt(id('score').textContent);
      }
    } else{
      if(parseInt(id('score').textContent) < parseInt(id('best-score').textContent)){
        completeCheck();
        if (preventCheat)
          id('best-score').textContent = parseInt(id('score').textContent);
      }
    }
    resetTheTiles();

  }

  function reverseTheTiles() {
    id('score').textContent = parseInt(id('score').textContent) + 1;

   /**
    * Add or Remove the class'reversed'
    * @param {string} tilePos - element Class.
    */
    function classAddRemove(tilePos){
      let tElement = cls(tilePos);
      for (let i = 0; i < tElement.length; i++) {
        if (tElement[i].classList.contains('reversed'))
          tElement[i].classList.remove('reversed');
        else
          tElement[i].classList.add('reversed');
      }
    }

    if (this.classList.contains('t11')) {
      // t11, t12, t21
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');

      classAddRemove('t12');
      classAddRemove('t21');

    } else if (this.classList.contains('t12')) {
      // t11, t12, t13, t22
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t11');
      classAddRemove('t13');
      classAddRemove('t22');

    } else if (this.classList.contains('t13')) {
      // t12, t13, t23
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t12');
      classAddRemove('t23');

    } else if (this.classList.contains('t21')) {
      // t11, t21, t22, t31
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t11');
      classAddRemove('t22');
      classAddRemove('t31');

    } else if (this.classList.contains('t22')) {
      // t12, t21, t22, t23, t32
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t12');
      classAddRemove('t21');
      classAddRemove('t23');
      classAddRemove('t32');

    } else if (this.classList.contains('t23')) {
      // t13, t22, t23, t33
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t13');
      classAddRemove('t22');
      classAddRemove('t33');

    } else if (this.classList.contains('t31')) {
      // t21, t31, t32
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t21');
      classAddRemove('t32');

    } else if (this.classList.contains('t32')) {
      // t22, t31, t32, t33
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t22');
      classAddRemove('t31');
      classAddRemove('t33');

    } else if (this.classList.contains('t33')) {
      // t23, t32, t33
      if (this.classList.contains('reversed'))
        this.classList.remove('reversed');
      else this.classList.add('reversed');
      classAddRemove('t23');
      classAddRemove('t32');
    }
  }

  /* --- HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns the element that has the Class attribute with the specified value.
   * @param {string} cls - element Class.
   * @returns {object} - DOM object associated with class.
   */
  function cls(cls) {
    return document.getElementsByClassName(cls);
  }

})();
