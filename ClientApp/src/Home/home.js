import React, { Component } from "react";
import sliderImage1 from "../assets/images/image4.jpg";
import sliderImage2 from "../assets/images/image5.jpg";
import sliderImage3 from "../assets/images/image6.jpg";
import restaurant from "../assets/images/bluelemon.jpg";


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row i-row">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={sliderImage1}
                  alt="Bistro Roast Chicken"
                />
                <div className="carousel-caption">
                  <h2>Bistro Roast Chicken</h2>
                  <p>
                    Fresh herbs, butter, and Dijon mustard provide big flavor in
                    this simple roast chicken
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={sliderImage2}
                  alt="Angel Hair Primavera"
                />
                <div className="carousel-caption">
                  <h2>Angel Hair Primavera</h2>
                  <p>Veggie-loaded pasta</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={sliderImage3}
                  alt="Paleo Baked Eggs in Avocado"
                />
                <div className="carousel-caption">
                  <h2>Paleo Baked Eggs in Avocado</h2>
                  <p>
                    A brilliant contrast between soft and fresh avocado and
                    creaminess of poached eggs
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="row i-row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
          <h2>Blue Lemón Diner Restaurant</h2>
          <p>Old fashion, quality parisienne food</p>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
        <img className="img-responsive i-img"
                  src={restaurant}
                  alt="Blue Lemón"
                />
        </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 i-border-background">
              <h3>Earn points - Get discounts</h3>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 i-border-background">
            <h3>Earn points - Get discounts</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
