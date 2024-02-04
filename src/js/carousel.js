function addCarousel() {
  const carousel = document.createElement("div");
  carousel.id = "carousel-container";
  carousel.innerHTML = `
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="bd-placeholder-img" width="100%" height="100%" src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1">
                <div class="container">
                    <div class="carousel-caption text-start text-black">
                        <h1>Carbonara</h1>
                        <p class="opacity-75">Indulge in our classic Carbonara, where al dente spaghetti is delicately coated in a rich and creamy sauce crafted from eggs, Parmesan cheese, and pancetta, resulting in a perfectly balanced symphony of flavors. Our Carbonara is a timeless Italian dish that promises a satisfying fusion of silky texture and savory goodness, making every bite a culinary delight.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="bd-placeholder-img" width="100%" height="100%" src="https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=1045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Scampi shrimp</h1>
                        <p>Savor the succulence of our Scampi Shrimp, featuring plump and juicy shrimp delicately sautéed in a garlic-infused buttery sauce. Each bite bursts with the natural sweetness of the shrimp, complemented by the aromatic blend of garlic and butter, creating a delightful seafood experience that will leave your taste buds craving more.</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="bd-placeholder-img" width="100%" height="100%" src="path/to/image3.jpg" alt="Slide 3">
                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>One more for good measure.</h1>
                        <p>Some representative placeholder content for the third slide of this carousel.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `;

  return carousel;
}

export default addCarousel;
