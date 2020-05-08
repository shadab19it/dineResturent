import React from "react";
import windowView from "../../../assest/forestwindow.jpg";
import serve from "../../../assest/serve.jpg";
import "./Features.scss";

const Features = () => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='row justify-content-between align-items-center top'>
          <div className='col-5 pr-4'>
            <div className='imagebox'>
              <img src={windowView} alt='Window View' />
            </div>
          </div>
          <div className='col-6'>
            <div className='designe d-flex align-items-center mb-4'>
              <div className='circle'></div>
              <div className='line'></div>
            </div>
            <div className='img-text'>
              <h2>Enjoyable place for all the family</h2>
              <p>
                Our relaxed surroundings make dining with us a greate experience for everyone. We can even arrange a tour of the farm before
                you meal.
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-between align-items-center bottom '>
          <div className='col-6'>
            <div className='designe d-flex align-items-center mb-3'>
              <div className='circle'></div>
              <div className='line'></div>
            </div>
            <div className='img-text'>
              <h2>The most locally sourced food</h2>
              <p>
                All our ingredients come directly form our farm or localy fishery. So you can be sure that you're eating the freshest , most
                sustainable food.
              </p>
            </div>
          </div>
          <div className='col-5 pl-4'>
            <div className='imagebox'>
              <img src={serve} alt='Window View' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
