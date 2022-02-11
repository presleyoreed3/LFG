import React from "react";
import './splash.scss'

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-page-background">
        <div className="splash-page-container">
          <div className="splash-page-intro-container">
            {/*<img className="splash-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg-logo-green.png" />*/}
            <h1 className="splash-page-title">LFG</h1>
            <p className="splash-page-descript">Welcome to LFG a place where one comes to be many. Here you will begin your journey to assemble a team, find your people, and maybe make some friends along the way.</p>
          </div>
          <div className="three-options">
            <div id="about-groups">
              <img className="splash-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/one-2-many-logo-green.png" />
              <h3>Go from One to Many</h3>
              <p>Make an LFG to find people for anything and everything</p>
            </div>
            <div id="splash-seperator" ><hr/></div>
            <div id="logo-groups">
              <img className="splash-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />
              <h3>Stick Together</h3>
              <p>Find your group and stick together for one event of for the rest of your life</p>
            </div>
            <div id="splash-seperator" ><hr/></div>
            <div id="about-groups">
              <img className="splash-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/group-logo-green.png" />
              <h3>Join all you want</h3>
              <p>Be a part of as many groups as you want. There are no limits!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
