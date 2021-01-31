import menu from './menu';

const home = () => {
  const main = document.getElementById('main');
  main.innerHTML = `
  <div id="home-text-container">
    <h1><span id="Dangerously">Dangerously</span> Good Burgers</h1>
    <h3>Burger Restaurant & Bar</h3>
    <button id="view-menu-button">View Menu</button>
  </div>
  `;

  const viewMenuButton = document.getElementById('view-menu-button');
  viewMenuButton.addEventListener('click', menu);

  const navItems = document.querySelectorAll('.nav-items');
  const homeButton = document.getElementById('home-button');
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = 'white';
  }
  homeButton.style.color = '#ffd700';
};

export default home;
