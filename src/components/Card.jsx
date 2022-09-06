import "./style.css";
import { Link } from "react-router-dom";
// import UserContext from "./SimpleContext";
import { MyContext } from "./SimpleContext";
import { useContext } from "react";
const CardPage = (props) => {
  const { setImg, setTitle, setAuthor, setContent } = useContext(MyContext);
  const handeleProps = () => {
    setImg(props.img);
    setTitle(props.title);
    setContent(props.content);
    setAuthor(props.author);
  };
  return (
    <div className="card">
      <img src={props.img} alt="img" />
      <h1>{props.title}</h1>
      <div style={{ flexGrow: 1 }}></div>
      <h4>{props.desc}</h4>
      {/* <div style={{ flexGrow: 1 }}></div> */}
      <div style={{ flexGrow: 1 }}></div>
      <button onClick={handeleProps}>
        <Link className="links" to="/FullNews">
          Read Full News
        </Link>
      </button>
    </div>
  );
};

export default CardPage;
