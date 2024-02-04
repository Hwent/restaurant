function addHomePage() {
  const homePage = document.createElement("div");
  homePage.id = "homePage";
  homePage.innerHTML = `
        <h1>Welcome to our restaurant</h1>
        <br>
        <p>Our restaurant is a family owned business that has been serving the community for over 20 years.</p>
        <p>Enjoy our delicious food and drinks</p>
        <p>Click on the menu to see our menu</p>
        <p>Click on the about to know more about us</p>
    `;
  homePage.style = "text-align: center";
  return homePage;
}

export default addHomePage;
