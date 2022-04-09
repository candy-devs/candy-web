import "./IssuseCard.scss";
import PropTypes from 'prop-types';

function IssuseCard({img, name}) {
  return (
    <div class="issuse-card">
      <img class="issuse-card-img" src={img} alt="tag"></img>
      <p class="issuse-card-name">{name}</p>
    </div>
  )
}

IssuseCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default  IssuseCard;