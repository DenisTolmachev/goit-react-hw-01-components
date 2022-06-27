import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: ${p => p.theme.colors.muted};
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  padding: 30px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.colors.secondary};
`;

export const StatisticsItem = styled.li`
  width: 100%;
  padding: 10px;
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.accent};
  }
  :nth-child(even) {
    background-color: ${p => p.theme.colors.primary};
  }
  border: 1px solid ${p => p.theme.colors.border};
`;

export const StatisticsLabel = styled.p`
  color: ${p => p.theme.colors.white};
  margin-bottom: 8px;
`;

export const StatisticsPersent = styled.p`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.ml};
`;
