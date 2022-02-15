import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import {openModal} from '../../../actions/modal_actions';

import NavBarClear from "./navbar_clear";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,  
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, eventId) => dispatch(openModal(modal, eventId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarClear);
