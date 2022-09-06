// import { createContext, useState } from "react";
// import React from "react";
// export const UserContext = React.createContext();

// const SimpleContext = (props) => {
// const [img, SetImg] = useState("");
// const [title, setTitle] = useState("Mirza");
// const [author, setAuthor] = useState("Mirza Salkovic");
// const [content, setContent] = useState(
//   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// );

//   return (
//     <UserContext.Provider
//       value={{
//         img,
//         SetImg,
//         title,
//         setTitle,
//         author,
//         setAuthor,
//         content,
//         setContent,
//       }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default SimpleContext;
import React, { useState } from "react";

export const MyContext = React.createContext();

const SimpleContext = (props) => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("Mirza");
  const [author, setAuthor] = useState("Mirza Salkovic");
  const [content, setContent] = useState(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  );

  return (
    <MyContext.Provider
      value={{
        img,
        setImg,
        title,
        setTitle,
        author,
        setAuthor,
        content,
        setContent,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContext;
