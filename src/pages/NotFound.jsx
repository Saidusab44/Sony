import React from "react";

function NotFound() {

  return (

    <div className="not-found">

      <div className="error-content">

        <h1 className="error-number">
          404
        </h1>

        <h2>
          Oops! Page Not Found
        </h2>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <a href="#/" className="home-btn">
          ← Back to Home
        </a>

        <h3 className="error-logo">
          SONY<span>.</span>
        </h3>

      </div>

    </div>

  );

}

export default NotFound;