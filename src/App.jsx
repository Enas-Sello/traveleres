import Contact from './Components/Contact/Contact';
import Intro from './Components/intro/Intro';
import { Planes } from './Components/Planes/Planes';
import Service from './Components/Service/Service';
import Slide from './Components/Slide/Slide';
import { Topbar } from './Components/Topbar/Topbar';
import './app.scss';
import { useState } from 'react';
import Menu from './Components/menu/Menu';
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <Topbar open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className="section">
        <Intro />
        <Planes />
        <Slide />
        <Service />
        <Contact />
      </div>
    </div>
  );
}

export default App;
