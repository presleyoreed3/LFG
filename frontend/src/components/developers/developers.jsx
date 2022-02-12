import React from 'react'
import './developers.scss'

class Developers extends React.Component{

	render(){
		return(
			<div>
				<div className="developer-page-container">
		          <div className="developer-page-intro-container">
		            <img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />
		            <h1 className="developer-page-title">LFG</h1>
		            <p className="developer-page-descript">Welcome to LFG a place where one comes to be many. Here you will begin your journey to assemble a team, find your people, and maybe make some friends along the way.</p>
		          </div>
		          <div className="developers">
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/one-2-many-logo-green.png" />*/}
		              <h3>Go from One to Many</h3>
		              <p>Make an LFG to find people for anything and everything</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />*/}
		              <h3>Stick Together</h3>
		              <p>Find your group and stick together for one event of for the rest of your life</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/group-logo-green.png" />*/}
		              <h3>Join all you want</h3>
		              <p>Be a part of as many groups as you want. There are no limits!</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/group-logo-green.png" />*/}
		              <h3>Join all you want</h3>
		              <p>Be a part of as many groups as you want. There are no limits!</p>
		            </div>
		          </div>
		        </div>
			</div>
		)
	}

}

export default Developers