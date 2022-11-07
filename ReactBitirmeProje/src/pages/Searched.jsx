import React from "react";
import { Component } from "react";

const ComponentTwo = (props) => {
  console.log(props.idler);
  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
      <p>{props.idler}</p>
    </div>
  );
};

export default ComponentTwo;
