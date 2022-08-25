import './Tobbar.scss';
import { GiMountains } from 'react-icons/gi';
export const Topbar = ( { open, setOpen } ) =>
{
  
  return (
    <div className={'Topbar ' + (open && 'active')}>
      <div className="wraper">
        <div className="left">
          <a href="#intro" className="logo">
            <GiMountains />
            <p>Tunel</p>
          </a>
        </div>
        <div className="right">
          <button className="button">join</button>
          <div className="humburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
