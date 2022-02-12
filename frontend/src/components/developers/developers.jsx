import React from 'react'
import './developers.scss'

class Developers extends React.Component{

	render(){
		return(
			<div className="developer-page-background">
				<div className="developer-page-container">
		          <div className="developer-page-intro-container">
		            <img className="top-logo" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/lfg-logo-green.png" />
		            <h1 className="developer-page-title">Meet the Developers</h1>
		          </div>
		          <div className="developers">
		            <div id="about">		              
		              <img className="developer-headshot" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/brian.jpeg" />
		              <h3>Brian Ko</h3>
		              <h4>Lead Back-End Developer</h4>
		              <p>About Developer Goes here</p>
		              <div id="dev-icons">
		              	<a className="hover-underline-animation" href="https://github.com/brianko90" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
		                <a className="hover-underline-animation" href="https://www.linkedin.com/in/brian-ko-ba5742229/" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' /></a>
		                <a className="hover-underline-animation" href="https://angel.co/u/brian-ko-5" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
		              </div>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              {/*<img className="developer-headshot" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/one-2-many-logo-green.png" />*/}
		              <h3>Chris Park</h3>
		              <h4>Team Lead</h4>
		              <p>About Developer Goes here</p>
		              <div id="dev-icons">
		              	<a className="hover-underline-animation" href="https://www.github.com/cpark04" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
                 		<a className="hover-underline-animation" href="https://www.linkedin.com/in/chris-p-7b087b46/" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' /></a>
                  		<a className="hover-underline-animation" href="https://angel.co/u/chris-park-23" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
		              </div>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              <img className="developer-headshot" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/jerry.jpg" />
		              <h3>Jerry Phan</h3>
		              <h4>Flex Developer</h4>
		              <p>About Developer Goes here</p>
		              <div id="dev-icons">
		              	<a className="hover-underline-animation" href="https://github.com/jerryphan1" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
                  		<a className="hover-underline-animation" href="https://www.linkedin.com/in/jerry-phan-8615a7a3/" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' /></a>
                  		<a className="hover-underline-animation" href="https://angel.co/u/jerry-a-phan" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
		              </div>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              <img className="developer-headshot" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/Presley+Reed.jpg" />
		              <h3>Presley Reed III</h3>
		              <h4>Lead Front-End Developer</h4>
		              <p>About Developer Goes here</p>
		              <div id="dev-icons">
		              	<a className="hover-underline-animation" href="https://github.com/presleyoreed3" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
						<a className="hover-underline-animation" href="https://www.linkedin.com/in/presleyoreed3/" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' /></a>
						<a className="hover-underline-animation" href="https://angel.co/u/presley-reed-iii" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
		              </div>
		            </div>
		          </div>
		        </div>
			</div>
		)
	}

}

export default Developers