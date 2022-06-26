import PropTypes from 'prop-types';

export const Friend = ({ isOline, avatar, name }) => {
  return (
    <li>
      <span className="status">{isOline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.propTypes = {
  isOline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
