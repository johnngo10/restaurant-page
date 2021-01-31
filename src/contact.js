const contact = () => {
  const main = document.getElementById('main');

  main.innerHTML = `
  <div id="contact-container">
  <h1 id="contact-title">Directions & Contact</h1>
  <div id="contact-info-container">
    <div id="contact-info" class="info-container">
      <h3 class="contact-info-title">Contact Us</h3>
      <p>info@burgermelt.com</p>
      <p>999-999-9999</p>
    </div>
    <div id="address" class="info-container">
      <h3 class="contact-info-title">Address</h3>
      <p>123 Main St, CA 92456</p>
    </div>
    <div id="opening-hours" class="info-container">
      <h3 class="contact-info-title">Opening Hours</h3>
      <p>Open Daily</p>
      <p>11:30am - 2:30pm</p>
      <p>5:30pm - 11pm</p>
    </div>
  </div>
  <form action="#">
    <label for="firstName">First Name:</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name"
    />
    <label for="lastName">Last Name:</label>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
    />
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="Email" id="email" />
    <label for="request">Request:</label>
    <textarea
      type="text"
      name="request"
      id="request"
      placeholder="Request"
    ></textarea>
    <input type="submit" id="submit" />
  </form>
</div>
  `;

  const navItems = document.querySelectorAll('.nav-items');
  const contactButton = document.getElementById('contact-button');
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = 'white';
  }
  contactButton.style.color = '#ffd700';
};

export default contact;
