import React from "react";
import { Link, NavLink } from "react-router-dom";

function Categories2() {
  return (
    <div>
      <div class="food">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div class="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/italy.png" />
                <h2>Burgers</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <Link to="/italy" className="nav-link">
                  İtalya'ya Özgü Tarifler
                </Link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/france.png" />
                <h2>Snacks</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <Link to="/france" className="nav-link">
                  Fransa'ya Özgü Tarifler
                </Link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="food-item">
                <img src="https://img.icons8.com/bubbles/100/null/japan.png" />
                <h2>Beverages</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel nec pretium mi.
                  Curabit facilis ornare velit non vulputa. Aliquam metus tortor
                  auctor quis sem.
                </p>
                <Link to="/japan" className="nav-link" href="#">
                  Japonya'ya Özgü Tarifler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories2;
