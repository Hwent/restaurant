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
        <div class="b-example-divider"></div>
        <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" alt="Responsive image">
        <div class="b-example-divider"></div>
        <br>
        <blockquote class="blockquote">
                  <p>One thing I always say is being a great chef today is not enough – you have to be a great businessman.</p>
                  <footer class="blockquote-footer">
                    <cite title="Source Title">Wolfgang Puck</cite>
                  </footer>
                </blockquote>
    `;
  homePage.style = "text-align: center";
  return homePage;
}

export default addHomePage;
