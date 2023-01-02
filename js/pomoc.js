const rozwin = document.querySelector('.rozwin');
const rozwinActive = document.querySelector('.rozwin_active');
const film = document.querySelector('.ukryty_film');
var pomoc = document.querySelector(".blad");

rozwin.addEventListener('click', () => {
  pomoc.style.backgroundColor = "#FFFFFF";
  if (film.style.display == 'none') {
    film.style.display = 'block';
    rozwin.style.display = 'none';
    rozwinActive.style.display = 'flex';
  }
});
rozwinActive.addEventListener('click', () => {
    if (film.style.display == 'block') {
      film.style.display = 'none';
      rozwin.style.display = 'flex';
      rozwinActive.style.display = 'none';
    } 
  });