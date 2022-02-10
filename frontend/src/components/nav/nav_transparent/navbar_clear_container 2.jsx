import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";

import NavBarClear from "./navbar_clear";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavBarClear);
