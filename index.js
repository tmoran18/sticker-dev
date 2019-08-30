// import { CLIENT_RENEG_LIMIT } from 'tls';

const sidebar = document.getElementById('sidebar');
const toggleNav = document.getElementById('toggleMenu');
const button = document.getElementById('toggle-btn');
const logo = document.getElementById('logo-container');
const socials = document.querySelector('.social-icons');
let toggleStatus = 1;

// Smooth Scroll
const scroll = new SmoothScroll(' a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
});

function openNav() {
  sidebar.style.left = '-1024px';
  logo.style.transform = 'translateX(-4rem)';
  socials.style.transform = 'translateX(-4rem)';
  button.classList.remove('open');
  toggleNav.style.display = 'block';
  toggleStatus = 0;
}

function openNavMobile() {
  sidebar.style.left = '-300px';
  sidebar.style.width = '100vw';
  logo.style.transform = 'translateX(-4rem)';
  socials.style.transform = 'translateX(-4rem)';
  button.classList.remove('open');
  sidebar.classList.remove('open');
  toggleNav.style.display = 'block';
  toggleStatus = 0;
}

function closeNav() {
  sidebar.style.left = '0px';
  logo.style.transform = 'translateX(0rem)';
  socials.style.transform = 'translateX(0rem)';
  button.classList.add('open');
  sidebar.classList.add('open');
  toggleNav.style.display = 'block';
  toggleStatus = 1;
}

function closeNavResize() {
  sidebar.style.left = '0px';
  sidebar.classList.remove('open');
  logo.style.transform = 'translateX(0rem)';
  socials.style.transform = 'translateX(0rem)';
  toggleNav.style.display = 'none';
  toggleStatus = 1;
}

function toggleMenu() {
  if (toggleStatus === 1) {
    openNav();
    console.log('openav - togglemenu');
  } else if (toggleStatus === 0) {
    sidebar.style.backgroundColor = 'rgb(255, 255, 255)';
    sidebar.style.opacity = '0.90';
    closeNav();
    setTimeout(function() {
      openNav();
    }, 3000);
    console.log('closenav - toggle menu on timeout');
  }
}

function navMediaQuery(browserWindow) {
  if (browserWindow.matches) {
    openNav();
    console.log('openav - navMediaQuery');
  } else {
    closeNavResize();
    console.log('closeNavResize - navMediaQuery');
  }
}
// Media Query - If Viewport is less than 1024px
const browserSize = window.matchMedia('(max-width: 1024px)');
navMediaQuery(browserSize); // Call listener function at run time
browserSize.addListener(navMediaQuery); // Attach listener function on state changes
toggleNav.addEventListener('click', toggleMenu);

function tooltipTimer() {
  const toolTip = document.querySelector('.tooltiptext');
  toolTip.innerHTML = 'Email Copied!';
  toolTip.style.color = 'red';
  toolTip.style.fontWeight = '600';
  setTimeout(function() {
    // Timer function to set tooltip back to normal style
    toolTip.innerHTML = 'Copy email to clipboard';
    toolTip.style.fontSize = '1rem';
    toolTip.style.color = '#252527';
  }, 1000);
}

// ClipboardJS
const clipboard = new ClipboardJS('.email');
clipboard.on('success', function() {
  tooltipTimer();
});
clipboard.on('error', function() {
  console.log('Error');
});
