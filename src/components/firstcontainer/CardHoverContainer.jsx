import React from 'react'
import './CardHover.css'
const CardHoverContainer = () => {
  return (
    <>
    <div className="card-hover-container">
        <div className="card-hover-header">14,000+ CODING NINJAS TO INSPIRE YOU</div>
        <div id="inner-page">
            <div id="inner-second-page">
                <div className="inner-child-boxes one">
                    <h2>CS novice to Google</h2>
                    <p className="hide-box">Despite being from a tier 3 college, I would like to thank my mentors & teachers at Coding Ninjas who helped me land a job at Google. Both Parikh sir and Ankush sir are brilliant teachers who know how to explain difficult concepts in an easy way.</p>
                    <div className="hide-box">Pareksha Manchanda</div>
                    <div className="hide-box">Software Engineer</div>
                    <img className="hide-box" src="https://files.codingninjas.com/google-12193.png" width={70} height={40}alt="404 Error"/>
                    {/* <img className="hide-container mt-8" src="https://files.codingninjas.com/student-24426.png"width={150}alt="img_pic"/> */}
                </div>
                <div className="inner-child-boxes two">
                <h2>College dropout to a package of 10 LPA</h2>
                    <p className="hide-box">The experience and knowledge I learned at Coding Ninjas greatly sharpened my skills and allowed me to pass the HackerRank and technical interview rounds. The placement team coordinated everything perfectly and it was unbelievable to get an offer letter of 10 LPA. Grateful to Coding Ninjas.</p>
                    <div className="hide-box">Harsh Agrawal</div>
                    <div className="hide-box">Software Engineer</div>
                    <img className="hide-box" src="https://files.codingninjas.com/avalara-10511.png" width={70} height={40}alt="404 Error"/>
                    {/* <img className="hide-container" src="../../src/assets/Profile-2.webp"width={150}alt="img_pic"/> */}
                </div>
                <div className="inner-child-boxes third">
                <h2>Non-CS branch to Top Company</h2>
                    <p className="hide-box">My experience with Coding Ninjas was wonderful. The courses strengthened my concepts and helped me in my interviews. The faculty was amazing. I would definitely recommend Coding Ninjas.</p>
                    <div className="hide-box">Satwika Bhattacharjee</div>
                    <div className="hide-box">Analyst</div>
                    <img className="hide-box" src="https://files.codingninjas.in/goldman-sachs-9763.svg" width={70} height={40}alt="404 Error"/>
                    {/* <img className="hide-container" src="../../src/assets/Profile-3.webp"width={150}alt="img_pic"/> */}
                </div>
                <div className="inner-child-boxes four">
                    <h2>Tier-3 college to 6 stars on CodeChef</h2>
                    <p className="hide-box">It has been a crazy ride from being a novice CS student to a 6 star Coder and ICPC Regionalist. I would like to thank Coding Ninjas for helping a Tier-3 college student explore such opportunities.</p>
                    <div className="hide-box">Rahul Lather</div>
                    <div className="hide-box">Member of Technical Staff</div>
                    <img className="hide-box" src="https://files.codingninjas.com/cn-logo-12194.png" width={70} height={40}alt="404 Error"/>
                    {/* <img className="hide-container" src="../../src/assets/Profile-4.webp"width={150}alt="img_pic"/> */}
                    </div>
                <div className="inner-child-boxes five">
                <h2>Non Engineer to Investment Bank</h2>
                    <p className="hide-box">Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation with Data Structures. The course content was very informative and well structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable. My approach towards solving a problem completely changed.</p>
                    <div className="hide-box">Richa Sharma</div>
                    <div className="hide-box">SEP Intern</div>
                    <img className="hide-box" src="https://files.codingninjas.com/jp-morgan-chase-10959.png" width={70} height={40}alt="404 Error"/>
                    {/* <img className="hide-container" src="../../src/assets/Profile-5.webp"width={150}alt="img_pic"/> */}
                </div>
            </div>
        </div>
        <button className="cardhover-button"><a id="linkto"href="https://www.codingninjas.com/our-students"> Hear more stories from our alumni</a></button>
       </div>




       <div id="card-hover-container-2">
        <div className="chc-p-one">
          <button className="why-button">Why Join Us?</button>
          <h2 className="greate-student">
            Great students deserve the best jobs
          </h2>
          <div className='ithappens'>Coding Ninjas Makes it Happen...</div>
        </div>
        <div className="chc-p-two">
          <div className="top-one">
            <div className="new-box-1">
              <div className="new-size">150+</div>
              <div className="new-small-size">
                Students working in FAANG
              </div>
            </div>
            <div className="new-box-1">
              <div className="new-size">10</div>
              <div className="new-small-size">
                Students started their own companies
              </div>
            </div>
          </div>
          <div className="bottom-one">
            <div className="new-box-2">
              <div className="new-size">50+</div>
              <div className="new-small-size">
                Students having 5 Stars on CodeChef
              </div>
            </div>
            <div className="new-box-2">
              <div className="new-size">100+</div>
              <div className="new-small-size">
                Students received International Job Offers
              </div>
            </div>
          </div>
        </div>
        <div className='hide-one'>
        </div>
      </div>
    </>
  )
}

export default CardHoverContainer