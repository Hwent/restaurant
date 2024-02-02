function addMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.id = "menuPage";
  menuPage.innerHTML = `
    <div class="menu">
      <h1>Menu</h1>
      <div class="menu-item">
        <h2>Spaghetti</h2>
        <p>Spaghetti with marinara sauce, and a slice of sourdough bread</p>
        <p>$8.99</p>
      </div>
      <div class="menu-item">
        <h2>Lasagna</h2>
        <p>Lasagna with marinara sauce, and a slice of sourdough bread</p>
        <p>$9.99</p>
      </div>
      <div class="menu-item">
        <h2>Chicken Parmesan</h2>
        <p>Chicken parmesan with marinara sauce, and a slice of sourdough bread</p>
        <p>$12.99</p>
      </div>
    </div>
  `;
  return menuPage;
}

export default addMenuPage;
