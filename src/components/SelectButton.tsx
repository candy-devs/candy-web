import React from "react";
import "./SelectButton.scss";
import PropTypes from 'prop-types';

type SelectButtonProps = {
  content: string,
  onClick?: () => void,
}

function SelectButton({content, onClick}: SelectButtonProps) {
  return (
    <div className="select-button unselectable" onClick={onClick}>
      <p>{content}</p>
    </div>
  );
}

SelectButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SelectButton;