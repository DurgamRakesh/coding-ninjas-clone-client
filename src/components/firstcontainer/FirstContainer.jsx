import React from 'react'
import './FirstCss.css'
import mainanimi from '../assests/cn-animi.webp'
import Typewriter from "typewriter-effect";
import CardHoverContainer from './CardHoverContainer';
const FirstContainer = () => {
  return (
    <>
    <div className="firstcon w-100 mt-5 p-4">
      <div className="row d-flex w-100 justify-content-evenly mt-3">
        <div className="col-md-5 pl-4">
          <div className=''>
            <div className='typewriter'>
              <Typewriter  options={{
                strings: [
                  "Chasing Jobs? Let the jobs chase you.",
                  "World has enough coders",
                  "Be more than a coder"
                ],
                autoStart: true,
                loop: true,
                typeSpeed: 150,
                backSpeed: 100
              }}/>
            </div>
            <h1 className='text'>Be a Coding Ninja</h1>
          </div>
          <div className='smalldata'>50,000 Students from 300 colleges have trusted us</div>
          <dir className="mainbutton" ><button><span>Explore Our Programs</span></button></dir>
        </div>
        <div className="col-md-5">
          <img id='imganimation' src={mainanimi} alt="animi" />
        </div>
      </div>
        
    </div>
    <div className='div-2'>
          <div className='div-3'>
          <div className="div-3-first">
          If you have the courage and the commitment to learn coding, then Coding Ninjas will empower you. 
          </div>
          <div className="div-3-second">
          NO MATTER WHAT IT TAKES! 
          </div>
          <div className="div-3-third">
            <div className="boxes">
              <div>
              <img src="https://files.codingninjas.in/boxicon1-9659.svg" alt="loeo" />
              </div>
              <div className='v1'> Content designed by IIT & Stanford alumni  </div>
            </div>
            <div className="boxes">
              <div><img src="https://files.codingninjas.in/boxicon2-9658.svg" alt="ll" /></div>
              <div className='v1'> Instant 1:1 doubt resolution </div>
            </div>
            <div className="boxes">
              <div><img src="https://files.codingninjas.in/boxicon3-9657.svg" alt="ll" /></div>
              <div className='v1'>
              Practical learning with 100+ problems & 10+ projects in each course 
              </div>
            </div>
          </div>
          </div>
        </div>
        <CardHoverContainer/>
        <div className='container campanys'>
          <div className="heading">
            <h1 className='our'>Our students are placed at</h1>
          </div>
          <div className="comp-body">
            <div><img src="	https://files.codingninjas.in/google-9542.svg" alt="google" /></div>
            <div><img src="		https://files.codingninjas.in/microsoft-9541.svg" alt="micro" /></div>
            <div><img src="	https://files.codingninjas.in/adobe-9540.svg" alt="adobe" /></div>
            <div><img src="		https://files.codingninjas.in/walmart-9539.svg" alt="wal" /></div>
            <div><img src="	https://files.codingninjas.in/amazon-9538.svg" alt="ama" /></div>
            <div><img src="	https://files.codingninjas.in/oyo-9537.svg" alt="oyo" /></div>
            <div><img src="	https://files.codingninjas.in/flipkart-9536.svg" alt="flip" /></div>
            <div><img src="https://files.codingninjas.in/morganstanley-9535.svg" alt="morg" /></div>
            <div><img src="https://files.codingninjas.in/samsung-9534.svg" alt="sam" /></div>
            <div><img src="https://files.codingninjas.in/expedia-9533.svg" alt="exp" /></div>
            <div><img src="https://files.codingninjas.in/facebook-9532.svg" alt="facebook" /></div>
          </div>
          <div className="comp-end">
            <button className='download'>Download Placement Report</button>
          </div>
        </div>
    </>
  )
}

export default FirstContainer