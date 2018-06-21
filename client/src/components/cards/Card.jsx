import React from "react";
import "./Card.css";

const Card = () => {
  return <div className="card__container">
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">css solar system</div>
              <div className="card__overlay--btn">
                <a href="https://ojewaletope.github.io/solarsystem/" target="_blank" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <img src="../img/astronomy.jpg" alt="" className="card__img" />
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">
                javascript weight converter
              </div>
              <div className="card__overlay--btn">
                <a href="https://ojewaletope.github.io/weightconverter/" target="_blank" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <img src="../img/create.jpg" alt="" className="card__img" />
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">javascript loan calculator</div>
              <div className="card__overlay--btn">
                <a href="https://ojewaletope.github.io/loan-calculator/" target="_blank" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <img src="../img/calculator.jpg" alt="" className="card__img" />
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">Project Title</div>
              <div className="card__overlay--btn">
                <a href="#" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
          <img src="../img/applepc.jpg" alt="" className="card__img" />
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">Project Title</div>
              <div className="card__overlay--btn">
                <a href="#" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        <img src="../img/drone.jpg" alt="" className="card__img" />
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="card__overlay">
            <div className="card__overlay--details">
              <div className="card__overlay--title">Project Title</div>
              <div className="card__overlay--btn">
                <a href="#" className="card__overlay--link">
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        <img src="../img/apple_business.jpg" alt="" className="card__img" />
        </div>
      </div>
    </div>;
};
export default Card;
