const navBar = document.querySelector(".navbar")

window.addEventListener("scroll" , () =>{
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("navbar-active", windowPosition);
});



// Function to handle the autoplay logic
function startAutoplay() {
  // Interval between slides in milliseconds (adjust as needed)
  const interval = 3000; // 5 seconds

  // Get the radio buttons
  const radios = document.querySelectorAll('input[type=radio]');

  // Function to change the checked radio button
  function changeRadio() {
    // Find the currently checked radio
    const checkedRadio = document.querySelector('input[type=radio]:checked');

    // Find the index of the currently checked radio
    const currentIndex = Array.from(radios).indexOf(checkedRadio);

    // Calculate the index of the next radio
    const nextIndex = (currentIndex + 1) % radios.length;

    // Check the next radio button
    radios[nextIndex].checked = true;
  }

  // Variable to hold the setInterval ID
  let autoplayInterval;

  // Function to start autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(changeRadio, interval);
  }

  // Function to stop autoplay
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Start autoplay when the page is loaded
  startAutoplay();
}

// Call the startAutoplay function when the page is loaded
document.addEventListener('DOMContentLoaded', startAutoplay);


// Btn Paket

const btnPrivate = document.querySelector(".btn-private");
const btnOpen = document.querySelector(".btn-open");
const togglePrivate = document.querySelector(".paket1");
const toggleOpen = document.querySelector(".paket2");

btnPrivate.addEventListener('click', function(){
    toggleOpen.classList.add('paket-off')
    toggleOpen.classList.add('paket2')
    togglePrivate.style.backgroundColor = "background-color: rgba(0, 0, 0, 0.6)";
    togglePrivate.classList.remove('paket-off')
    togglePrivate.classList.add('paket1')
    btnPrivate.classList.add("btn-active")
    btnPrivate.classList.remove("btn-off")
    btnOpen.classList.remove("btn-active")
    btnOpen.classList.add("btn-off")
});
btnOpen.addEventListener('click', function(){
    togglePrivate.classList.add('paket-off')
    togglePrivate.classList.add('paket1')
    toggleOpen.classList.remove('paket-off')
    toggleOpen.classList.add('paket2')
    btnOpen.classList.add("btn-active")
    btnOpen.classList.remove("btn-off")
    btnPrivate.classList.remove("btn-active")
    btnPrivate.classList.add("btn-off")
});


document.querySelector('#next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.querySelector('#slide').appendChild(lists[0]);
}
document.querySelector('#prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.querySelector('#slide').prepend(lists[lists.length - 1]);
}
