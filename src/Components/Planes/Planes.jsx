import './Planes.scss';
import { plans } from '../../data';
export const Planes = () => {
  return (
    <div id="Planes" className="Planes">
      <h1>Plans</h1>
      <p>Get started With one oh our subscription Plans</p>
      <div className="container">
        {plans.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h4 className="title">{item.title }</h4>
            <h3 className="price">{ item.price}</h3>
            <p className="description">{item.description }</p>
          </div>
        ))}
      </div>
    </div>
  );
};
