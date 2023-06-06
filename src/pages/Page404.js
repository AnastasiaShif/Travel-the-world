import React from "react";

import "./Page404.css";
import "../App.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="error-container">
      <h1>404!</h1>
      <p>Sorry, this page is under construction.</p>
      <div className="error-btns">
        <Link to="/">
          <button className="btn btn--outline btn--large">BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
