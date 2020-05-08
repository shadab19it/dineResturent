import React from "react";
import "./Menu.scss";
import cupCake from "../../../assest/cupCake.jpg";
import cupCake2 from "../../../assest/cupCake2.jpg";
import burger from "../../../assest/burger.jpg";

const Item = [
  {
    title: <h5 class='mt-0'>Seared Salmon Filet</h5>,
    description: (
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
    ),
    imgSrc: cupCake,
  },
  {
    title: <h5 class='mt-0'>Rosemary Filet Mignon</h5>,
    description: (
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
    ),
    imgSrc: cupCake2,
  },
  {
    title: <h5 class='mt-0'>Summer Fruit Chocolate Mousse</h5>,
    description: (
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in</p>
    ),
    imgSrc: burger,
  },
];

const Items = ({ title, description, src }) => {
  return (
    <div class='media border-bottom border-light pb-3'>
      <img src={src} class='align-self-start mt-3 mr-4 rounded' alt='...' style={{ width: "100px", height: "100px" }} />
      <div class='media-body align-self-end'>
        {title}
        {description}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className='container-fluid bg-dark justify-content-end align-items-end d-flex' idName='menu'>
      <div className='row justify-content-center pt-4'>
        <div className='col-5 p-4 align-self-center'>
          <div className='designe d-flex align-items-center mb-4'>
            <div className='circle'></div>
            <div className='line'></div>
          </div>
          <div className='text-content text-white '>
            <h1>
              A few highlight from <br /> our menu
            </h1>
            <p className='mt-3'>
              We cater for all dietary requirements. but here's a glimpse of out diner's favorite. Out menu id revamped every season.{" "}
            </p>
          </div>
        </div>
        <div className='col-5 text-white p-4'>
          {Item.map((item) => (
            <Items title={item.title} key={item.index} description={item.description} src={item.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
