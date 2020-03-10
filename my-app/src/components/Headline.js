import React from 'react';
import './Headline.css';


const Headline = props => {
    return (
      <div class="border">
        <div class="main">
          <div class="box">
            <div class="image">
              <img class="image1" src={props.img} />
            </div>
            <div class="name">
              <p>{props.name}</p>
              <div class="sub">
                <p>{props.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Headline;