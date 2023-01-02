"use strict";

var radioTown = document.querySelector(".town");
function check(){
  var town=document.getElementsByName("town");
  if(town[0].checked){
    radioTown.innerHTML = `<p><strong class="artimod">INOPLEX</strong> | ul. Przewodowa 40 | 04-874 Warszawa</p>`;
  }else{
    radioTown.innerHTML = `<p><strong class="artimod">INOPLEX</strong> | ul. B. Chrobrego 26 | 11-300 Biskupiec</p>`;
  }
 }
 var btn = document.querySelector(".btn");
 btn.addEventListener('click', () => {
    check();
  });


