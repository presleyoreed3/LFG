import React from 'react'
import './footer.scss'

class Footer extends React.Component{

	render(){
		return(
			<footer className="footer">
				<div id="footer-content">
					<div>
						Info
					</div>
					<div id="dev-links">
						Brian Ko
					</div>
					<div id="dev-links">
						Chris Park
					</div>
					<div id="dev-links">
						Jerry Phan
					</div>
					<div id="dev-links">
						Presley Reed III
					</div>
				</div>
			</footer>
		)
	}

}

export default Footer;