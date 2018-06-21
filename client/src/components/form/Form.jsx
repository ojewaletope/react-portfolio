import React from "react";
import "./Form.css";

import axios from "axios";

class Form extends React.Component {
  state = {
    data: {
      name: "",
      email: "",
      message: ""
    },
    error: {}
  };
  onChange(e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }
  async handleSubmit(e) {
    e.preventDefault();

    const contact = await axios.post("/contact", {
      data,
    });
    console.log(this.state.data);
    this.setState({
      data: {
        name: "",
        email: "",
        message: ""
      }
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="form__container">
        <div className="form__heading">
          <h3>contact me for your web jobs</h3>
        </div>
        <form action="" className="contact__form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="form__input"
              value={data.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="e.g example@example.com"
              className="form__input"
              value={data.email}
              onChange={this.onChange}
            />
          </div>
          <div>
            <textarea
              className="form__textarea"
              placeholder="Your message"
              required
              name="message"
              value={data.message}
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            value="Send Me A Request"
            className="form__btn"
          />
        </form>
      </div>
    );
  }
}

export default Form;
