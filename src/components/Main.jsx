import CardPage from "./Card";
import React, { useContext, useEffect, useState } from "react";
import newApi from "../api/data";
// import UserContext from "./SimpleContext";
const Main = () => {
  const [count, setCount] = useState(1);
  const [news, setNews] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("publishedAt");
  const [categoryNews, setCategoryNews] = useState("general");
  const [drop, setDrop] = useState(false);
  const [end, setEnd] = useState("a");
  // const val = useContext(UserContext);
  const fetch = async () => {
    try {
      let result = "";
      if (word === "") {
        result = await newApi.get(
          `/v2/top-headlines?country=rs&category=${categoryNews}&pageSize=20&page=${count}&apiKey=7edc124a40f74474818787172a42321f`
        );
      } else {
        result = await newApi.get(
          `/v2/everything?q=${word}&sortBy=${category}&pageSize=20&page=${count}&apiKey=7edc124a40f74474818787172a42321f`
        );
      }

      const data = result.data;
      console.log(result.data.articles);
      setNews([...news, ...data.articles]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [count, word, category, categoryNews]);

  // let news2 = news;

  // try {
  //   let result = "";
  //   if (word === "") {
  //     result = await newApi.get(
  //       `/v2/top-headlines?country=rs&category=${categoryNews}&apiKey=7edc124a40f74474818787172a42321f`
  //     );
  //   } else {
  //     result = await newApi.get(
  //       `/v2/everything?q=${word}&sortBy=${category}&pageSize=20&apiKey=5c1dc769e9ac4be1868efa140185cc4f`
  //     );
  //   }
  //   result.data.articles.map((item) => {
  //     news2.push(item);
  //     setNews(news2);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div className="main">
      <div className="top">
        <input
          type="text"
          placeholder="Search..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setWord(e.target.value);
              setNews([]);
            }
          }}
        />
        <div className="dropDown">
          {word !== "" ? (
            <p>Sorted By:{category}</p>
          ) : (
            <p>Sorted By:{categoryNews}</p>
          )}
          <img
            src="drop.png"
            alt="src"
            onClick={() => {
              setDrop(!drop);
            }}
          />
        </div>
      </div>
      {drop ? (
        <div className="top2">
          <input type="text" />
          {word !== "" ? (
            <div className="dropCat">
              <div className="dropElements">
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategory("relevancy");
                  }}
                >
                  Relevancy
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategory("popularity");
                  }}
                >
                  Popularity
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategory("publishedAt");
                  }}
                >
                  publishedAt
                </p>
              </div>
            </div>
          ) : (
            <div className="dropCatNev">
              <div className="dropElements">
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("general");
                  }}
                >
                  General
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("business");
                  }}
                >
                  Business
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(0);
                    setCategoryNews("entertainment");
                  }}
                >
                  Entertainment
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("health");
                  }}
                >
                  Health
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("technology");
                  }}
                >
                  Technology
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("sports");
                  }}
                >
                  Sports
                </p>
                <p
                  onClick={() => {
                    setNews([]);
                    setCount(1);
                    setCategoryNews("science");
                  }}
                >
                  Science
                </p>
              </div>
            </div>
          )}
        </div>
      ) : null}
      <div className="cards">
        {news.map((item, index) => {
          return (
            <CardPage
              key={index}
              img={item.urlToImage}
              title={item.title}
              desc={item.description}
              author={item.author}
              content={item.content}
            />
          );
        })}
      </div>

      <button
        className="BtnMoreNews"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        More news
      </button>
    </div>
  );
};

export default Main;
