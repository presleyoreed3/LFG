import React from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'

class Footer extends React.Component{

	render(){
		return (
      <footer className="footer">
        <div id="footer-content">
				<div id="nav-links">
            <Link className="hover-underline-animation" to="/">Home</Link>
            <Link className="hover-underline-animation" to="/home">Calendar</Link>
          </div>
          <div id="devs">
            <div id="dev-list">
              <div id="dev-links">
                <h3>Brian Ko</h3>
                <div className="dev-icons">
                  <a className="hover-underline-animation" href="https://github.com/brianko90" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
                  <a className="hover-underline-animation" href="https://www.linkedin.com/in/brian-ko-ba5742229/" target='_blank'>
                  <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' />
                  </a>
                  <a className="hover-underline-animation" href="https://angel.co/u/brian-ko-5" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
                </div>
              </div>
              <div id="dev-links">
                <h3>Chris Park</h3>
                <div className="dev-icons">
                  <a className="hover-underline-animation" href="https://www.github.com/cpark04" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
                  <a className="hover-underline-animation" href="https://www.linkedin.com/in/chris-p-7b087b46/" target='_blank'>
                  <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' />
                  </a>
                  <a className="hover-underline-animation" href="https://angel.co/u/chris-park-23" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
                </div>
              </div>
              <div id="dev-links">
                <h3>Jerry Phan</h3>
                <div className="dev-icons">
                  <a className="hover-underline-animation" href="https://github.com/jerryphan1" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
                  <a className="hover-underline-animation" href="https://www.linkedin.com/in/jerry-phan-8615a7a3/" target='_blank'>
                  <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' />
                  </a>
                  <a className="hover-underline-animation" href="https://angel.co/u/jerry-a-phan" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
                </div>
              </div>
              <div id="dev-links">
                <h3>Presley Reed III</h3>
                <div className="dev-icons">
									<a className="hover-underline-animation" href="https://github.com/presleyoreed3" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/github_white.png" width="30px" alt=""/></a>
									<a className="hover-underline-animation" href="https://www.linkedin.com/in/presleyoreed3/" target='_blank'>
					      <img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/linkedin_white.png" width='30px' />
									</a>
									<a className="hover-underline-animation" href="https://angel.co/u/presley-reed-iii" target='_blank'><img src="https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/buttons-white/angellist_white.png" alt="" width='30px' /></a>
								</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
	}

}

export default Footer;