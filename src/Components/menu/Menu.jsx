import './Menu.scss';

export default function Menu({ open, setOpen }) {
  return (
    <div className={'Menu ' + (open && 'active')}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#slide">Work</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#service">Service</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
