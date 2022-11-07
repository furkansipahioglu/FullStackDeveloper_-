import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" style={{ maxHeight: "400px" }}>
          <div class="carousel-item active" style={{ maxHeight: "400px" }}>
            <img
              src="https://img.freepik.com/premium-photo/food-cheese-figs-mushrooms-meat-vegetables-european-asian-cuisine-healthy-food-black-stone-background-top-view_187166-51328.jpg?w=2000"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ maxHeight: "400px" }}>
            <img
              src="https://img.freepik.com/premium-photo/assorted-food-dishes-vegetables-meat-fish-black-stone-background-top-view-free-space-your-text_187166-2402.jpg?w=1480"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item" style={{ maxHeight: "400px" }}>
            <img
              src="https://img.freepik.com/premium-photo/food-background-set-healthy-clean-food-vegetables-fruits-fish-meat-nuts-greens-black-stone-background-top-view-free-copy-space_187166-12189.jpg?w=2000"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
