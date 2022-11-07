import React from "react";
import { Link, NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <div class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            Yemek <span>Tarifleri</span>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>

              <a href="feature.html" class="nav-item nav-link">
                Tüm Yemekler
              </a>
              <a href="team.html" class="nav-item nav-link">
                About
              </a>

              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Yemek Kategorileri
                </a>
                <div class="dropdown-menu">
                  <Link to="/anayemek" className="dropdown-item">
                    Ana Yemekler
                  </Link>

                  <Link to="/tatlilar" className="dropdown-item">
                    Tatlılar
                  </Link>
                  <Link to="/atistirmaliklar" className="dropdown-item">
                    Atıştırmalıklar
                  </Link>
                </div>
              </div>
              <div class="nav-item dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Ülkelere Göre Yemek
                </a>
                <div class="dropdown-menu">
                  <Link to="/italy" className="dropdown-item">
                    İtalyan
                  </Link>

                  <Link to="/france" className="dropdown-item">
                    Fransız
                  </Link>
                  <Link to="/japan" className="dropdown-item">
                    Japon
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

export default PageNav;
