import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "./SimpleContext";
// import UserContext from "./SimpleContext";

const FullNews = () => {
  // const { img, title, author, content } = useContext(UserContext);
  // const { img, title, author, content } = useContext(UserContext);
  const { img, title, author, content } = useContext(MyContext);

  return (
    <div className="FullMain">
      <div className="FullNewsCard">
        <img src={img} alt="logo" />
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="author">{author}</div>
      </div>
      <Link className="returnLink" to="/">
        <button className="BtnReturn"> Return to main page </button>
      </Link>
    </div>
  );
};

export default FullNews;
