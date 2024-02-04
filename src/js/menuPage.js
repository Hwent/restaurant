function addMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.id = "menuPage";
  menuPage.innerHTML = `
  <h1>Menu</h1>
  <br>
  <div class="b-example-divider"></div>
  <br>
  <div class="row">
    <div class="col">
      <h2>Appetizers</h2>
      <ul>
        <li>Bruschetta</li>
        <li>Calamari</li>
        <li>Garlic Bread</li>
        <li>Stuffed Mushrooms</li>
      </ul>
    </div>
    <div class="col">
      <h2>Entrees</h2>
      <ul>
        <li>Chicken Alfredo</li>
        <li>Lasagna</li>
        <li>Spaghetti and Meatballs</li>
        <li>Shrimp Scampi</li>
      </ul>
    </div>
    <div class="col">
      <h2>Desserts</h2>
      <ul>
        <li>Tiramisu</li>
        <li>Cannoli</li>
        <li>Lemon Sorbet</li>
        <li>Chocolate Cake</li>
      </ul>
    </div>
  </div>
  <br>
    <div class="b-example-divider"></div>
  `;

  return menuPage;
}

export default addMenuPage;
