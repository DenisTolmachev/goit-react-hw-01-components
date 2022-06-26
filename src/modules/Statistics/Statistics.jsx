import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPersent,
} from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <StatisticsContainer>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPersent>{percentage}%</StatisticsPersent>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
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
