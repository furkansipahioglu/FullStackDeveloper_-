import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
/*function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}
const randomnumber = getRandomArbitrary(1, 5);

sessionStorage.setItem("random", randomnumber);

// getter
const randomnumberr = sessionStorage.getItem("random");
*/

function GununYemegi() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`https://localhost:44375/api/Foods/${2}`);
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  });

  return (
    <div>
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

                  <Link to={"/recipe/" + details.id} className="btn custom-btn">
                    Detaylar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GununYemegi;
