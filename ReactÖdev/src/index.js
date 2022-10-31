import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Black from "./black.jpg";
import Red from "./red.jpg";
import Blue from "./blue.jpg";
import Yellow from "./yellow.jpg";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.changeColorRandom = this.changeColorRandom.bind(this);
    this.changeColorr = this.changeColorr.bind(this);
    this.changeColor2 = this.changeColor2.bind(this);

    this.state = {
      brand: "Opel",
      model: "Astra",
      color: "Red",
      year: 2020,
      colors: ["Red", "Blue", "Yellow", "Black"],
    };
  }

  changeColorRandom() {
    var num = Math.floor(Math.random() * this.state.colors.length);
    console.log(num);
    this.setState({
      color: this.state.colors[num],
    });
  }
  changeColor2(a) {
    this.setState({
      color: a,
    });
  }

  changeColorr(e) {
    console.log(e);
    this.setState({
      color: e.target.value,
    });
  }

  render() {
    var imageURL = "";

    // get proper image

    if (this.state.color === "Black") {
      imageURL = Black;
    } else if (this.state.color === "Red") {
      imageURL = Red;
    } else if (this.state.color === "Yellow") {
      imageURL = Yellow;
    } else if (this.state.color === "Blue") {
      imageURL = Blue;
    }

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="img-fluid" src={imageURL} alt="" />
            </div>
            <div className="col-8">
              <h1>
                {this.state.brand} {this.state.model}
              </h1>
              <div>
                <select onChange={this.changeColorr}>
                  {this.state.colors.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {this.state.colors.map((item) => (
                  <button key={item} onClick={() => this.changeColor2(item)}>
                    {item}
                  </button>
                ))}
              </div>
              <p>
                Selected Color: <b>{this.state.color}</b>
              </p>
              <button onClick={this.changeColorRandom}>Change Color</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
