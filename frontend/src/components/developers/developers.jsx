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
		              <p>Hello, my name is Brian and I decided to become a software developer after graduating from UCLA with a Bachelor of Science in Aerospace Engineering. I enjoy the creative freedom that being a software developer gives me. I am excited to utilize my skills in helping your team and I look forward to hearing from you!</p>
		              <div id="dev-icons">
		              	<a className="hover-underline-animation" href="https://github.com/brianko90" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
		                <a className="hover-underline-animation" href="https://www.linkedin.com/in/brian-ko-ba5742229/" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' /></a>
		                <a className="hover-underline-animation" href="https://angel.co/u/brian-ko-5" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
		              </div>
		            </div>
		            <div id="developer-seperator" ><hr/></div>
		            <div id="about">
		              <img className="developer-headshot-chris" src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/lfg/chris.png" />
		              <h3>Chris Park</h3>
		              <h4>Team Lead</h4>
		              <p>Prior to becoming a software engineer, I dedicated the past 10 years growing my family manufacturing business from a small shop to a multi-million dollar company. I decided to leave in order to pursue my dream of becoming a full-stack developer. I hope to one day work alongside a team to develop applications that is equally meaningful and fulfilling.</p>
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
		              <p>From Chemistry to Computer Science, my interests quickly began to shift when I first saw how creative and flexible one could be when solving problems. There on out, I worked to sharpen my skills as a programmer, by building anything from a simple tic tac toe game to a full scale youtube clone. I am interested in the constant pursuit of knowledge to spark my passions and interests while tackling complex problems daily with other software developers.</p>
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
		              <p>I graduated from the University of Puget Sound with a Bachelor of Science in Computer Science class of 2018. I worked to develop software during college and continue this work today. I am interested in applying my considerable skills, abilities, and talents to work with other developers to build software tools that make a difference.</p>
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