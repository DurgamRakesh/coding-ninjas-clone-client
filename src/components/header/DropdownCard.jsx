import React from 'react'

const DropdownCard = () => {

    const dataHover = [
        {
          url: "https://files.codingninjas.com/student-24426.png",
          one: "No work experience",
          two: "Designed as per college student schedule"
        },
        {
          url: "https://files.codingninjas.com/professional-24427.png",
          one: "Having work experience",
          two: "Designed as per working professional schedule"
        }
      ];
      const handleClick = () =>{
        
      }
  return (
    <div className='dp-con'>
    <div className="dropdown-con">
      <div className="Question-hover">
        What is your work experience?
      </div>
      <div className="Answer-hover">
        This will help us recommend the best programs for you.
      </div>
    </div>
    <div className="drop-down-box">
      {dataHover.map((item, index) => {
        return (
          <div key={index} onClick={handleClick}>
            <button className="drop-down-one">
              <img src={item.url} alt="img" />
              <button className="second-sub-bar">
                <div style={{ width: "100px" }}>{item.one}</div>
                <img
                  className="second-sub-bar"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACFCAMAAACaJK1BAAAAZlBMVEX///8AAAD6+vrw8PDNzc3z8/Pk5OTp6embm5vY2Njb29u7u7tpaWltbW22tratra1TU1MsLCwnJyeFhYV7e3tHR0cXFxehoaFAQECSkpJkZGQgICCLi4tycnLFxcVbW1sODg45OTnwBALrAAACw0lEQVRoge2a7ZKiMBBFCQiCKIio6KgI7/+Sk7UsV+Wr7w3Z2h85DzCnrLl0ujvxPIfD4XA4ZmWVppFdw3KvHpx9e45MvSgDS45cvbNe2XBE6ovtYn7Jz7dEqTad2bHqOjS7fNYM3HolSl3i+TKwHHBojte5vpzrsERzmyVq4ahD85OYS+IpiVL32lQy7dAcMqOoZdOGB20e8pKh/HYp+ETvxBKlmuuSkwCOP+ypDwf5JQ/WRKLl/5MXWzjR0nR90GaghZHoqlZBkpqzgO1APv33BiiBRC/ghL1AolYfaA3SDizutAZpBxLii3lSAO1AVNKaSyUvnsH5yGqOQPEMq4LVNHt5OxBmfNSARPv1ltb8o0QfUnnUklvDak5AOxCVdNR2QDsQxLRGAYn28wutQdqBjP5w/scanfCJXsstXkTX6ANg8YLxOWaYPWLx/IqzoE1nzrQDMSjxvBSP2haW6OLZM/aP0hASPfiDUaMkaDtASvT0f5ZXNVqiP5yqtS/R7cDauiTMT7Z/SQD0TqRieUXOTEoR7QEDJ1ltMIVqYAXRkaG1K5UG6h2sCpOtC3Ce+ILFWC/yk3FJD0jiMx4O1F82QsXC/iRRM4F6/gpZB+lnLa0oZakKK35XcZUND8jZ94V0XWkwAkknrYTP7FY4MxqMpXdZZk0GbGlmxQd3h6NwI2Gw9LicZZNocKZH910lC5TBIqoQ3kkYZPYk3EUbZFZaZ1d8nRVfrlKL9AfyvfCCVcTAhpszXHK5QXdSjOIE3gwTmwZhEXwDriMb4goVVNi/00IWzB/Iy0kBrMq/kH6KyIq0i0ghPbiHkNxiG7/LmLyPZ24vO4weVshVwhgjbySkB7eAwdcewoNbRP+7lQK9ep2g5/BF6+w0nbdE5pnt4fNm9mbpLdn7+64Z/9tfPF+qNcjBzZCkteU3dw6Hw+FwmPALcTYn04+rmekAAAAASUVORK5CYII="
                  width={10}
                  alt="forward"
                />
              </button>
              <div className="second-sub-bar1">{item.two}</div>
            </button>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default DropdownCard