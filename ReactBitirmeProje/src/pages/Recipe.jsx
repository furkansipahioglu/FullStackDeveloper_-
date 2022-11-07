import React from "react";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import Categories2 from "../components/Categories2";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "../App.css";
function Recipe() {
  const [details, setDetails] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://localhost:44375/api/Foods/${params.id}`
      );

      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
      <PageNav />
      <Carousel />

      <div class="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img">
                <img src={details.image} alt="Image" />
                <button
                  type="button"
                  class="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-header">
                  <p>{details.country}</p>
                  <h2>{details.name}</h2>
                </div>
                <div class="about-text">
                  <p>{details.description}</p>
                  <p>Tarifi ekleyen kişi: {details.addedBy}</p>
                  <a class="btn custom-btn" href="">
                    Anasayfa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <Categories2 />
      <Footer />
    </div>
  );
}

export default Recipe;
