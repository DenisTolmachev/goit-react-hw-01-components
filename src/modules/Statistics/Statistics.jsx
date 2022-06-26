import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <>
      <h2>Upload stats</h2>
      <ul class="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li key={id}>
            <p>{label}</p>
            <p>{percentage}%</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
