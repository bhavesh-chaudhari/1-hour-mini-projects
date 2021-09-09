import React from "react"
import {Link} from "react-router-dom"

const ErrorPage = ()=>{
    return (
      <div className="page">
        <h1>No Page Found</h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            background: "#1a78e6",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            margin:"10px"
          }}
        >
          Back to Home
        </Link>
      </div>
    );
}

export default ErrorPage;