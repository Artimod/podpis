"use strict";

function validate(e) {
  e.preventDefault();

  var username = document.querySelector(".name");
  var workplace = document.querySelector(".workplace");
  var tes = document.querySelector(".tes");
  var tek = document.querySelector(".tek");
  var mail = document.querySelector(".mail");
  var pomoc = document.querySelector(".blad");

  var nameInput = document.querySelector(".name-input").value;
  var workplaceInput = document.querySelector(".workplace-input").value;

  var tesInput48 = document.querySelectorAll(".tes-input")[0].value;
  var tesInput = document.querySelectorAll(".tes-input")[1].value;
  var tekInput48 = document.querySelectorAll(".tek-input")[0].value;
  var tekInput = document.querySelectorAll(".tek-input")[1].value;
  var mailInput = document.querySelectorAll(".mail-input")[0].value;
  var mailInputArtimod = document.querySelectorAll(".mail-input")[1].value;

  const nameValid = this.name_valid.value;
  const workplaceValid = this.workplace_valid.value;
  const tesValid = this.tes_valid.value;
  const tekValid = this.tek_valid.value;
  const mailValid = this.mail_valid.value;
  const placeError = document.querySelector("#error");
  placeError.innerHTML = "";
  const errors = [];
  const nameValidPattern = /[^a-z\s]/;
  const testnameValid = nameValidPattern.test(nameValid);
  
  if (!testnameValid) {
    // pomoc.style.backgroundColor = "rgba(163, 32, 32, 0.479)";
    errors.push("Imię i Nazwisko nie poprawnie wprowadzone, skorzystaj z Pomocy (kliknij - Rozwiń).");
  }
  const workplaceValidPattern = /[^a-z\s]/;
  const testworkplaceValid = workplaceValidPattern.test(workplaceValid);
  if (!testworkplaceValid) {
    errors.push("Pole dział, stanowisko pracy nie poprawnie wprowadzone, skorzystaj z Pomocy (kliknij - Rozwiń).");
  }

  const tesValidPattern = /^[0-9]{9}$/;
  const testtesValid = tesValidPattern.test(tesValid);
  if (!testtesValid && tesValid != "") {
    errors.push('Telefon stacjonarny — niepoprawny format, wpisz 9 znaków ciągiem - 0011222.');
  }
  const tekValidPattern = /^[0-9]{9}$/;
  const testtekValid = tekValidPattern.test(tekValid);
  if (!testtekValid && tekValid != "") {
    errors.push('Telefon komórkowy — niepoprawny format, wpisz 9 znaków ciągiem - 000111222.');
  }
  const mailValidPattern = /^[a-z\d]+[\w.-]*[a-z\d]+[a-z\d-]$/i;
  const testmailValid = mailValidPattern.test(mailValid);
  if (!testmailValid) {
    errors.push("Format e-mail jest niepoprawny, skorzystaj z Pomocy (kliknij - Rozwiń).");
  }
  if (errors.length > 0) {
    pomoc.style.backgroundColor = "rgba(163, 32, 32, 0.3)";
    pomoc.style.color = "#000000";
    placeError.innerHTML = errors.join("<br>");
    placeError.classList.add("visible"); // Dodanie klasy, aby pokazać błędy
  }else{
    pomoc.style.backgroundColor = "#FFFFFF";
    placeError.classList.remove("visible"); // Usunięcie klasy, gdy nie ma błędów
  }

  username.innerHTML = nameInput;
  workplace.innerHTML = workplaceInput;
  if (tesInput == "") {
    tes.innerHTML = "";
  } else {
    tes.innerHTML = `<img class="tes" src="assets/icons/tes.png" alt="Telefon stacjonarny:"> <span>&thinsp;&thinsp;&thinsp;&thinsp;</span> ${
     " " + tesInput48 +" "+ tesInput.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
    }`;
  }
  if (tekInput == "") {
    tek.innerHTML = "";
  } else {
    tek.innerHTML = `<img class="tek" src="assets/icons/tek.png" alt="Telefon komórkowy:"> <span>&emsp;</span>${
        tekInput48 +" "+ tekInput.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
    }`;
  }
  mail.innerHTML = `<img class="logo_mail" src="assets/icons/mail.png" alt="adres e-mail:"> <span>&emsp;</span> <a href="mailto:${mailInput}">${"  " + mailInput + mailInputArtimod}</a>`;

  if (placeError.innerText == "") {
    document.querySelector(".none").style.display = "flex";
  } else {
    document.querySelector(".none").style.display = "none";
  }
}
const form = document.querySelector("form");
form.addEventListener("submit", validate);
