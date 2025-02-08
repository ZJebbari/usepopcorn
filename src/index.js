import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";
import Loader from "./Loader";

const Test = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setRating} />
      <p>The rating was {rating}</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Loader /> */}
  </React.StrictMode>
);
