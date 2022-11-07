import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Searched from "../pages/Searched";
import { Component } from "react";

const SearchBar = () => {
  var inputname = [];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://localhost:44375/api/Foods");

    setPosts(data);
  };

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submithandler = (x) => {
    x.preventDefault();
    navigate("/anayemek");
  };

  {
    posts.map((post) => {
      if (post.name.includes(input)) {
        inputname.push(post.id);
        return inputname;
      }
    });
  }

  console.log(inputname);

  return (
    <div>
      <div class="container-fluid">
        <div
          class="search__container"
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          <p class="search__title">Aradığınız Tüm Yemekler Burada</p>
          <input
            onSubmit={submithandler}
            class="search__input"
            type="text"
            placeholder="Search"
            onChange={(x) => setInput(x.target.value)}
            value={input}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
