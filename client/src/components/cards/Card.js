import React from "react";
import "./Card.css";
// import cardObj from '../../../src/cardObj'

function Card({ cardObj }) {
  return cardObj.map((card, index) => {
    return <div className="card" key={index}>
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">{card.title}</div>
              <div className="card__overlay--btn">
                <a href={card.url} target="_blank" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <img src={card.img} alt="" className="card__img" />
        </div>
      </div>;
  });
  
}

export default Card;
