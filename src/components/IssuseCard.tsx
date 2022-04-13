import "./IssuseCard.scss";
import PropTypes from 'prop-types';

type IssuseCardProps = {
  img: string,
  name:  string,
}

function IssuseCard({img, name}: IssuseCardProps) {
  return (
    <div className="issuse-card">
      <img className="issuse-card-img" src={img} alt="tag"></img>
      <p className="issuse-card-name">{name}</p>
    </div>
  )
}

IssuseCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default  IssuseCard;