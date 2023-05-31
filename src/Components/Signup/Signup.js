import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div>
      <div className="container-fluid signup-container">
        <div className="signup-heading">Sign up</div>
        <div className="signup-content">
          <div className="by-username">
         <form>
          
         </form>
          </div>
          <div className="by-id">
         <h4>Sign up through</h4>
          </div>
        </div>
        <div className="signup-footer">
          <div className="signup-footer-text">
            Already have an Account !
            <Link to="/signin" className="nav-link">
              <span id="signin-btn">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
