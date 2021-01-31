const menu = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
<main>
<div id="menu-container">
<h1 id="menu-title">Menu</h1>
<div id="menu-item-container">
  <div id="col-1" class="col">
    <h2 class="category">Burgers</h2>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Danger Burger</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$15.99</div>
    </div>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Triple Patty Burger</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$18.99</div>
    </div>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Delux Burger Combo</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$21.99</div>
    </div>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Avocado Veggi Burger</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$12.99</div>
    </div>
  </div>
  <div id="col-2" class="col">
    <h2 class="category">Fries</h2>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Large Fries</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$5.99</div>
    </div>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Curly Fries</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$5.99</div>
    </div>
    <h2 class="category">Drinks</h2>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Beer</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$2.99</div>
    </div>
    <div class="items">
      <div class="item-text">
        <h4 class="item-name">Cocktail</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque nobis dolorem, voluptate illum et sapiente facilis rem
          sit nisi voluptatibus?
        </p>
      </div>
      <div>$4.99</div>
    </div>
  </div>
</div>
</div>
</main>
  `;
};

export default menu;
