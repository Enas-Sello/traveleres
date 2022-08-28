import './Slides.scss';
import { FcGlobe, FcLike, FcPhotoReel } from 'react-icons/fc';
import { slide } from '../../data';
export default function Slide() {
  return (
    <div id="slide" className="Slide">
      <div className="slider">
        <div className="container">
          {slide.map((x) => (
            <div className="item">
              <div className="left">
                <div className="leftContaner">
                  <div className="img"></div>
                  <h2>{x.title}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="right">
                <img src={x.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
