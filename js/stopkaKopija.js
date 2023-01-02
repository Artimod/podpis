"use strict";
var alertBlock = document.querySelector(".alert");
var copyEmailBtn = document.querySelector("#button");
copyEmailBtn.addEventListener('click', function(event) {
    var emailLink = document.querySelector('.stopka');
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    } catch(err) {
    console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
    var emailLink = document.querySelector('.stopka');
    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);
   
    try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alertBlock.style.display = 'flex';
    } catch(err) {
    console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
   
});
var ok = document.querySelector(".ok");
ok.addEventListener('click', () => {
    alertBlock.style.display = 'none';
  });