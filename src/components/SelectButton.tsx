import React from "react";
import "./SelectButton.scss";
import PropTypes from 'prop-types';

type SelectButtonProps = {
  content: string,
}

function SelectButton({content}: SelectButtonProps) {
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