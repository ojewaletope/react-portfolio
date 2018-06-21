import React from "react";
import './Footer.css'

const Form = () => {
  return <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list--item">
          Copyright &copy; Tope Ojewale 2018
        </li>
        <li className="footer__list--item">
          <a href="#" className="footer__link">
          <i className="fa fa-twitter 4x footer__list--icon" />
          </a>
        </li>
        <li className="footer__list--item">
          <a href="#" className="footer__link">
            <i className="fa fa-linkedin 4x footer__list--icon" />
          </a>
        </li>
        <li className="footer__list--item">
          <a href="#" className="footer__link">
            <i className="fa fa-github 4x footer__list--icon" />
          </a>
        </li>
      </ul>
    </footer>;
};

export default Form;
