import React from 'react'
import './Footer.css'
import cnlogo from "../assests/cn-logo.png";
import fb from './fb.png'
import ins from './ins.png'
import you from './you.png'
import twi from './twi.png'
import linkd from './linkd.png'
// import telegram from './telegram.svg'
import phone from './phone.png'
import mess from './mess.png'

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className=''>
         <div className='footer-header'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='first'>
                        <img src={cnlogo} width={"150px"}/>
                        <p className='copy'> Copyright © Sunrise Mentors Pvt. Ltd. </p>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div  className='middle'>
                    <div className='pl-1'>
                        <p className='middle-heading mb-0'>CODING NINJAS</p>
                        <div>
                            <p className="mb-0 small" ><Link>About Us</Link></p>
                            <p className="mb-0 small" ><Link>Careers</Link></p>
                            <p className="mb-0 small" ><Link>Privacy Policy</Link></p>
                            <p className="mb-0 small" ><Link>Terms & Conditions</Link></p>
                            <p className="mb-0 small" ><Link>Pricing & Refund Policy</Link></p>
                            <p className="mb-0 small" ><Link>Bug Bounty</Link></p>
                            <p className="mb-0 small" > <Link>Our Students</Link></p>
                            <p className="mb-0 small" ><Link>Press Release</Link></p>
                        </div>
                    </div>
                    <div className='pl-1'>
                        <p className='middle-heading mb-0'>PRODUCTS</p>
                        <div>
                            <p className="mb-0 small" ><Link>Courses</Link></p>
                            <p className="mb-0 small" ><Link>Try courses for Free</Link></p>
                            <p className="mb-0 small" ><Link>Career Camp</Link></p>
                            <p className="mb-0 small" ><Link>Mock Interviews</Link></p>
                            <p className="mb-0 small" ><Link>Hire Talent</Link></p>
                        </div>
                    </div>
                    <div>
                        <p className='middle-heading mb-0'>COMMUNITY</p>
                        <div className='pl-1'>
                            <p className="mb-0 small" ><Link>Coding Ninjas Studio</Link></p>
                            <p className="mb-0 small" ><Link>Blog</Link></p>
                            <p className="mb-0 small" ><Link>Events</Link></p>
                            <p className="mb-0 small" ><Link>Campus Ninja</Link></p>
                            <p className="mb-0 small" ><Link>Affiliate</Link></p>
                            <p className="mb-0 small" ><Link>Scholarship Event </Link></p>
                            <p className="mb-0 small" ><Link> Placement cell </Link></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='last'>
                        <div>
                            <p className='lastname'>FOLLOW US ON</p>
                            <div className='m-1'>
                                <Link><img src={fb} alt='fb' /></Link>
                                <Link><img src={ins} alt='ins'/></Link>
                                <Link><img src={you} alt='you'/></Link>
                                <Link><img src={twi} alt='twi'/></Link>
                                <Link><img src={linkd} alt='linkd'/></Link>
                                {/* <Link><img src={telegram} alt='tel'/></Link> */}
                            </div>
                        </div>
                        <div>
                            <p className='lastname1 p-1'>CONTACT US</p>
                            <div>
                                <p className='lastp'>  <Link><img src={phone} width={'30px'}  alt='ph' /></Link>&nbsp; &nbsp;1800-123--3598</p>
                                <p className='lastp'> <Link><img src={mess} width={'30px'} alt='mess' /></Link> &nbsp; &nbsp;contact@codingninjas.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div className="container footer-body p-3">
            <div>
                <h1 className='footer-body-heading'>Important Links</h1>
                <div className='fbh-1'>
                    <p>CODING COURSES FOR BEGINNERS:<Link>C++ Foundation with Data Structures</Link> |
<Link>JAVA Foundation with Data Structures</Link> |
<Link>Interview Preparation for Product</Link> <Link>Companies</Link> |
<Link>Competitive Programming Course</Link> |
<Link>Python Foundation with Data Structures</Link> |
<Link>Aptitude Preparation Course</Link></p>
                </div>
                <div className='fbh-1'>
                    <p>ADVANCED CODING COURSE:

<Link>Advanced Front-End Web Development with React</Link> |
<Link>Machine Learning and Deep Learning Course</Link> |
<Link>Full Stack Web Development Course</Link> |
<Link>Data Science & Machine Learning Complete</Link> |
<Link>Operating Systems</Link> |
<Link>System Design</Link> |
<Link>Database Management System</Link></p>
                </div>
                <div className='fbh-1'>
                    <p>FREE TRIAL:

<Link>C++ Foundation with Data Structures</Link> |
<Link>Java Foundation with Data Structures</Link> |
<Link>Competitive Course</Link> |
<Link>Aptitude Preparation Course</Link> |
<Link>Python Foundation with Data Structures</Link> |
<Link>Advanced Front-End Web Development with React</Link> |
<Link>Data Science & Machine Learning Complete</Link> |
<Link>Interview Preparation for Product Companies</Link> |
<Link>Machine Learning Course</Link></p>
                </div>
                <div className='fbh-1'>
                    <p>FREE CONTENTS:

<Link>C++ Foundation with Data Structures</Link> |
<Link>Java Foundation with Data Structures</Link> |
<Link>Competitive Programming Course</Link> |
<Link>Aptitude Preparation Course</Link> |
<Link>Python Foundation with Data Structures</Link> |
<Link>Advanced Front-End Web Development with React</Link> |
<Link>Data Science & Machine Learning Complete</Link> |
<Link>Interview Preparation for Product Companies</Link></p>
                </div>
                
            </div>
         </div>
    </div>
    </>
  )
}

export default Footer