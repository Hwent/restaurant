import facebookIcon from "../facebook.svg";
import instagramIcon from "../instagram.svg";
import twitterIcon from "../twitter-x.svg";

function addAboutPage() {
  const aboutPage = document.createElement("div");
  aboutPage.innerHTML = `
    <h1>About</h1>
    <p>Our restaurant is a family owned business that has been serving the community for over 20 years. We take pride in our food and service and strive to provide the best experience for our customers.</p>
    <p>Our menu is carefully crafted to include a wide variety of dishes that are sure to please everyone. We use only the freshest ingredients and our chefs are highly skilled in the art of cooking.</p>
    <p>Our restaurant is a great place to enjoy a meal with family and friends. We have a warm and inviting atmosphere and our staff is friendly and attentive. We look forward to serving you and hope you enjoy your dining experience with us.</p>
    <br>
    <p>Location:</p>
    <p>1234 Main Street</p>
    <p>Anytown, USA</p>
    <p>Phone: 123-456-7890</p>
    <br>
    <p>Hours of operation:</p>
    <p>Monday - Friday: 11am - 10pm</p>
    <p>Saturday - Sunday: 9am - 11pm</p>
    <br>
    <p>Follow us on social media:</p>
    <a href="https://www.facebook.com"><img src="${facebookIcon}" width="24" alt="Facebook"></a>
    <a href="https://www.instagram.com"><img src="${instagramIcon}" width="24" alt="Instagram"></a>
    <a href="https://www.twitter.com"><img src="${twitterIcon}" width="24" alt="Twitter"></a>
  `;
  return aboutPage;
}

export default addAboutPage;
