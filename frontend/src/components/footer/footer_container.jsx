import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import Footer from "./footer";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Footer);
