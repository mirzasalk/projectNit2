import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import FullNews from "./components/FullNews";
import SimpleContext from "./components/SimpleContext";
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SimpleContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="FullNews" element={<FullNews />} />
      </Routes>
    </BrowserRouter>
  </SimpleContext>
);
