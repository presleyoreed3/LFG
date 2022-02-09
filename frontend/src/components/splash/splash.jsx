import React from "react";
import './splash.scss'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-page-background">
        <div className="splash-page-container">
          <div className="splash-page-intro-container">
            <h1 className="splash-page-title">LFG</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
