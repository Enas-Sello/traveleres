import './Intro.scss';
import { intro } from '../../data';
import { init } from 'ityped';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useRef } from 'react';

export default function Intro ()
{
console.log(intro);
  const texRef = useRef()
  useEffect( () =>
  {
 init(texRef.current, {
   backDelay: 1500,
   backSpeed: 60,
   showCursor: true,
   strings: ['Discover', 'Meet People', 'Enjoy'],
 });  },[])
  return (
    <div id="intro" className="Intro">
      <div className="left">
        <div className="imgContainer">
          <img src={intro.img} alt="main" />
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h2>Hi</h2>
          <h1>Travilers</h1>
          <h3>
            Start <span ref={texRef}></span>
          </h3>
        </div>
        <a href="#projects">
          <IoIosArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
}
