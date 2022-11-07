import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function GenelTarifler() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://localhost:44375/api/Foods");

    setPosts(data);
  };

  return (
    <div>
      <div class="blog">
        <div class="container">
          <div class="section-header text-center">
            <p>Food Blog</p>
            <h2>Latest From Food Blog</h2>
          </div>
          <div class="row">
            {posts.map((post) => {
              if (post.id > 0) {
                return (
                  <div class="col-md-4">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img src={post.image} alt="Blog" />
                      </div>
                      <div class="blog-content">
                        <h2 class="blog-title">{post.title}</h2>
                        <div class="blog-meta">
                          <p>
                            <i class="far fa-user"></i>
                            {post.addedBy}
                          </p>
                          <p>
                            <i class="far fa-list-alt"></i>
                          </p>
                          <p>
                            <i class="far fa-calendar-alt"></i>
                          </p>
                          <p>
                            <i class="far fa-comments"></i>
                            {post.country}
                          </p>
                        </div>
                        <div class="blog-text">
                          <p>{post.shortDescription}</p>
                          <a class="btn custom-btn" href="">
                            Devamı için tıklayın
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenelTarifler;