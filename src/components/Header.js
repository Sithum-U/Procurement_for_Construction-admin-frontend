import {Link,useHistory} from 'react-router-dom';
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import minilogo from "../images/logo-mini.svg";
import profilePic from "../images/faces/face8.jpg";


const Header = () => {
  const dispatch = useDispatch();  

  const logoutHandler = () => {
    dispatch(logout());    
  };

  const {userLogin: { userInfo :{data} }} = useSelector((state) => state);  

  let today = new Date();
  let curHr = today.getHours();
  let userMessage = '';
  
  if (curHr < 12) {
    userMessage = 'Good Morning';
  } else if (curHr < 18) {
    userMessage = 'Good Afternoon';
  } else {
    userMessage = 'Good Evening';
  }
  
	return(
		<nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                <span className="icon-menu" />
              </button>
            </div>
            <div>
              <Link to="/"><img src={logo} className="nav-logo" alt="logo" height="100" width="150" /></Link>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-top"> 
            <ul className="navbar-nav">
              <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                <h1 className="welcome-text">{userMessage}, <span className="text-black fw-bold">{data && data[0].name}</span></h1>
                <h3 className="welcome-sub-text">Materials summary this week </h3>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-none d-lg-block">
                <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
                  <span className="input-group-addon input-group-prepend border-right">
                    <span className="icon-calendar input-group-text calendar-icon" />
                  </span>
                  <input type="text" className="form-control" />
                </div>
              </li>
              <li className="nav-item">
                <form className="search-form" action="#">
                  <i className="icon-search" />
                  <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
                </form>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
              <span className="mdi mdi-menu" />
            </button>
          </div>
        </nav>
		)

}

export default Header;