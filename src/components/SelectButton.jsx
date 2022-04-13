import React from "react";
import "./SelectButton.scss";
import PropTypes from 'prop-types';

function SelectButton({content}) {
  return (
    <div className="select-button unselectable">
      <p>{content}</p>
    </div>
  );
}

SelectButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SelectButton;