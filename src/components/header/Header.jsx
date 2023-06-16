import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderCss.css";
import cnlogo from "../assests/cn-logo.png";
import carrercamp from "../assests/careercamp.svg";
import { Dropdown, Modal } from 'antd';
import Register from "../auth/Register";
import Login from "../auth/Login";
import DropdownCard from "./DropdownCard";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [visible,setVisible] = useState(false);
  const [auth,setAuth] = useAuth();
  const [tog,setTog] = useState(true);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    console.log('LogoutSuccess')
  }
  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <div className="container">
      <div className="id-1">
      <nav className="navbar navbar-fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" href="#">
                            <img src={cnlogo} alt="cn" width={'100px'} />
                        </Link>
                        <ul className="navbar-nav  justify-content-evenly w-100 mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link style={{color:"#d2d2d6"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                </Link>
                                <ul className="dropdown-menu mt-2">
                                    <DropdownCard className='dropdown-item'/>
                                   
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link style={{color:"#d2d2d6"}} className="nav-link" href="#">Scholarship
                                <span className="green-tag">UPTO 100% OFF</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link style={{color:"#d2d2d6"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Community
                                </Link>
                                <ul className="dropdown-menu mt-2">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link style={{color:"#d2d2d6"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Practice

                                </Link>
                                <ul className="dropdown-menu mt-2">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link style={{color:"#d2d2d6"}} className="nav-link">
                                    <img src={carrercamp} alt="carrercamp" width={'100'} height={'30px'} />
                                    <span className="new-shine">New</span>
                                </Link>
                            </li>
                        </ul>
                        {
                          (auth?.user) ? (<div className="user">
                          <div className=" nav-item myclassroom">
                            My Classroom
                          </div>
                          <div className="1">
                          <li className="nav-item dropdown mt-2" style={{listStyleType:"none"}}>
                                <Link style={{color:"#d2d2d6"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h4 className="username">{auth?.user.name.charAt(0)}</h4>
                                </Link>
                                <ul className="dropdown-menu mt-1">
                                    <li><button onClick={handleLogout} className="logoutbtn"><Link className="dropdown-item text-white" href="#">LogOut</Link></button></li>
                                </ul>
                            </li>
                          </div>
                        </div>) : (<div>
                            <button className='login-btn' onClick={() => setVisible(true)}>Login</button>
                        </div>)
                        }
                        
                        
                        <div>
                            <button className='enrollnow-btn'>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal 
            onCancel={handleCancel}
            footer={null}
            open={visible}
            >{
              tog ? (
                <>
                <Register setTog={setTog}/>
              Already Have an Account?<Link className="login-logout" onClick={() => setTog(false)}>Login</Link>
                </>
              ) : (
                <>
                <Login handleCancel={handleCancel} setVisible={setVisible} />
              New User?<Link className="login-logout" onClick={() => setTog(true)}>Register</Link>
                </>
              )
            }
                
            </Modal>
      </div>
      {/* <div id="navbar-2">
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <img
            src={cnlogo}
            alt="cn"
            className="justify-content-center"
            width={"100px"}
          />
          <div>
            <button className="login-btn">Login</button>
          </div>
          <div
            className="offcanvas offcanvas-start w-100"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header res-nav">
              <button
                type="button"
                style={{ backgroundColor: "#ec0042e8" }}
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
              <img
                src={cnlogo}
                alt="cn"
                width={"100px"}
                style={{ marginRight: "50%" }}
              />
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav p-5 justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="#">
                    <div className="row">
                      <div className="col-md-12 d-flex flex-row justify-content-between ">
                        <div className="name">Courses</div>
                        <div>
                          <img
                            src="https://files.codingninjas.com/vector-13354-24428.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#d2d2d6" }}
                    className="nav-link"
                    href="#"
                  >
                    <div className="row">
                      <div className="col-md-12 d-flex flex-row justify-content-between ">
                        <div className="name">
                          Scholarship
                          <span className="green-tag">UPTO 100% OFF</span>
                        </div>
                        <div>
                          <img
                            src="https://files.codingninjas.com/vector-13354-24428.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    style={{ color: "#d2d2d6" }}
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row">
                      <div className="col-md-12 d-flex flex-row justify-content-between ">
                        <div className="name">Community</div>
                        <div>
                          <img
                            src="https://files.codingninjas.com/vector-13354-24428.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <ul className="dropdown-menu mt-2">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    style={{ color: "#d2d2d6" }}
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row">
                      <div className="col-md-12 d-flex flex-row justify-content-between ">
                        <div className="name">Practice</div>
                        <div>
                          <img
                            src="https://files.codingninjas.com/vector-13354-24428.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <ul className="dropdown-menu mt-2">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#d2d2d6" }}
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="row">
                      <h3 style={{ color: "#0bb09f" }}>
                        Career Camp{" "}
                        <span className="green-tag">Applications open</span>
                      </h3>
                      <div className="col-md-12 d-flex flex-row justify-content-between border-1">
                        <div className="name">Job assistence program</div>
                        <div>
                          <img
                            src="https://files.codingninjas.com/vector-13354-24428.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div> */}
    </div>
  );
};

export default Header;
