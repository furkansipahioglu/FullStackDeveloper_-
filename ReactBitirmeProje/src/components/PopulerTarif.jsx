import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function PopulerTarif() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://localhost:44375/api/Foods");

    setPosts(data);
  };

  const rownumber = 0;

  return (
    <div>
      <div class="feature">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-header">
                <p>selam</p>
                <h2>Our Key Features</h2>
              </div>
              <div class="feature-text">
                <div class="feature-img">
                  <div class="row">
                    <div class="col-6">
                      <img src="img/feature-1.jpg" alt="Image" />
                    </div>
                    <div class="col-6">
                      <img src="img/feature-2.jpg" alt="Image" />
                    </div>
                    <div class="col-6">
                      <img src="img/feature-3.jpg" alt="Image" />
                    </div>
                    <div class="col-6">
                      <img src="img/feature-4.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consec adipis elit. Phasel nec
                  preti mi. Curabit facilis ornare velit non vulputa. Aliquam
                  metus tortor, auctor id gravida condime, viverra quis sem.
                  Curabit non nisl nec nisi sceleri maximus
                </p>
                <a class="btn custom-btn" href="">
                  Book A Table
                </a>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                {posts.map((post) => {
                  if (post.id <= 10 && post.isPopular === true) {
                    return (
                      <div class="col-sm-6">
                        <div class="feature-item">
                          <img
                            src={post.image}
                            alt=""
                            style={{
                              borderRadius: "10px",
                              transition: "3s",

                              maxWidth: "150px",
                              boxShadow: "inherit",
                            }}
                          />
                          <h3>{post.name} </h3>
                          <p>{post.shortDescription}</p>
                        </div>
                      </div>
                    );
                  }
                })}
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulerTarif;
