const home = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <div id="home-text-container">
    <h1><span id="Dangerously">Dangerously</span> Good Burgers</h1>
    <h3>Burger Restaurant & Bar</h3>
    <button id="view-menu-botton">View Menu</button>
  </div>
  `;
};

export default home;
