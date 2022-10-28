import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      color: "red",
      year: 2020,
      colors: ["red", "blue", "yellow", "black"],
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
    return (
      <div>
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
