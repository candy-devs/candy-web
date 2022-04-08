import React, { Component } from "react";
import "./IssuseCard.scss";
import PropTypes from 'prop-types';

class IssuseCard extends Component {
  render() {
    return (
      <div class="issuse-card">
        <img class="issuse-card-img" src={this.props.img} alt="tag"></img>
        <p class="issuse-card-name">{this.props.name}</p>
      </div>
    )
  }
}

IssuseCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default IssuseCard;