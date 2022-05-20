import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../components/Details";
import Input from "../components/Input";
import List from "../components/List";

const BASE_URI = "https://hn.algolia.com/api/v1/search";

export default function Container() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const {
      data: { hits },
    } = await axios(`${BASE_URI}?query=${query}`);
    setNews(hits);
  };

  useEffect(() => {
    fetchNews();
  }, [query]);

  return (
    <div>
      <div className="searchBar">
        <Input value={query} setValue={setQuery}></Input>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<List news={news}></List>}></Route>
          <Route path="/hn/:objectId" element={<Details></Details>}></Route>
        </Routes>
      </div>
    </div>
  );
}
