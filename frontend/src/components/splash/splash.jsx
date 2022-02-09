import React from "react";
import './splash.scss'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-page-background">
        <div className="splash-page-container">
          <div className="splash-page-intro-container">
            <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg-logo-green.png" />
            <h1 className="splash-page-title">LFG</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
