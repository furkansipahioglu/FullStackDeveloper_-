"use strict";

/* jxs: javascpirt xml=js içindeki etiketleri birer obje gibi yazmamzı sağlıyor*/
/*var template2=<h1>my first react app</h1>;*/
var root = document.getElementById("root");
var productname = "samsung";
var productprice = 4000;
var productdesc = "bu bir telefon";
function formatprice(p) {
  return p + " TL";
}
var product = {
  name: "",
  price: 2000,
  description: "telefonn",
  types: ["blue", "red"]
};
function getdescription(description) {
  /*if(description){
      return description;
  }
  else{
      return "no desc";
  }*/
  /*if(description){
      return <h5 style={{color:"red"}}> description:{description}</h5>
  }*/
  return description ? description : "no desc";
}
function formatprice2(p) {
  return p.price + " TL";
}
/* react */
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "productname"
}, "Name: ", product.name ? product.name : "no name"), /*#__PURE__*/React.createElement("p", {
  id: "productprice"
}, "Price:", formatprice(productprice)), /*#__PURE__*/React.createElement("p", {
  id: "productprice"
}, "Price:", formatprice2(product)), /*#__PURE__*/React.createElement("p", {
  id: "productprice"
}, "Price:", product.price == 0 ? "free" : product.price), /*#__PURE__*/React.createElement("p", {
  id: "productdesc"
}, getdescription(product.description)), /*#__PURE__*/React.createElement("p", null, product.types.length ? " 2 tip var" : " 1 seçenek "), /*#__PURE__*/React.createElement("p", null, product.types.map(function (item) {
  return /*#__PURE__*/React.createElement("p", null, item);
})));

/* react dom */
ReactDOM.render(template, root);
