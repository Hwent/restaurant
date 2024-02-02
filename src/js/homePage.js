function addHomePage() {
  const homePage = document.createElement("div");
  homePage.id = "homePage";
  homePage.innerHTML = `
        <h1>Welcome to our restaurant</h1>
        <p>Enjoy our delicious food and drinks</p>
    `;
  return homePage;
}

export default addHomePage;
