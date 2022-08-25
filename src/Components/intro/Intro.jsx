import './Intro.scss';
import {IoIosArrowDown} from 'react-icons/io'
export default function Intro() {
  return (
    <div id="intro" className="Intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/lovely-ginger.webp" alt="main" />
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h2>Hi</h2>
          <h1>travilers</h1>
          <h3>
            start<span></span>
          </h3>
        </div>
        <a href="#projects">
          <IoIosArrowDown className='icon'/>
        </a>
      </div>
    </div>
  );
}
