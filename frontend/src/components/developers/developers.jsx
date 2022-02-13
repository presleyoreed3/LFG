import React from 'react'
import './developers.scss'

class Developers extends React.Component{

	render(){
		return(
			<div className="developer-page-background">
				<div className="developer-page-container">
		          <div className="developer-page-intro-container">
		            {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />*/}
		            <h1 className="developer-page-title">Meet the Developers</h1>
		          </div>
		          <div className="developers">
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/one-2-many-logo-green.png" />*/}
		              <h3>Brian Ko</h3>
		              <h4>Lead Back-End Developer</h4>
		              <p>About Developer Goes here</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />*/}
		              <h3>Chris Park</h3>
		              <h4>Team Leader</h4>
		              <p>About Developer Goes here</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/group-logo-green.png" />*/}
		              <h3>Jerry Phan</h3>
		              <h4>Flex Developer</h4>
		              <p>About Developer Goes here</p>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-logo-large" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/group-logo-green.png" />*/}
		              <h3>Presley Reed III</h3>
		              <h4>Lead Front-End Developer</h4>
		              <p>About Developer Goes here</p>
		            </div>
		          </div>
		        </div>
			</div>
		)
	}

}

export default Developers