import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import {openModal} from '../../../actions/modal_actions';


import FooterClearContainer from "./footer_clear";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout, openModal })(FooterClearContainer);
