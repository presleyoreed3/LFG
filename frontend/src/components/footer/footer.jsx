import React from 'react'
import './footer.scss'

class Footer extends React.Component{

	render(){
		return(
			<footer className="footer">
				<div id="footer-content">
					<div id="dev-links">
						<h3>Info</h3>
						<a href="">Home</a>
						<a href="">Create Activity</a>
						<a href=""></a>
					</div>
					<div id="devs">
					The Developers
						<div id="dev-links">
							<h3>Brian Ko</h3>
							<a href="https://github.com/brianko90">GitHub</a>
							<a href="https://www.linkedin.com/in/brian-ko-ba5742229/">LinkedIn</a>
							<a href="https://angel.co/u/brian-ko-5">AngelList</a>
						</div>
						<div id="dev-links">
							<h3>Chris Park</h3>
							<a href="https://www.github.com/cpark04">GitHub</a>
							<a href="https://www.linkedin.com/in/chris-p-7b087b46/">LinkedIn</a>
							<a href="https://angel.co/u/chris-park-23">AngelList</a>
						</div>
						<div id="dev-links">
							<h3>Jerry Phan</h3>
							<a href="https://github.com/jerryphan1">GitHub</a>
							<a href="https://www.linkedin.com/in/jerry-phan-8615a7a3/">LinkedIn</a>
							<a href="#">AngelList</a>
						</div>
						<div id="dev-links">
							<h3>Presley Reed III</h3>
							<a href="https://github.com/presleyoreed3">GitHub</a>
							<a href="">LinkedIn</a>
							<a href="#">AngelList</a>
						</div>
					</div>
				</div>
			</footer>
		)
	}

}

export default Footer;