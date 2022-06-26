import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  border: 1px solid ${p => p.theme.colors.border};
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const UserDescription = styled.div`
  padding: 40px;
  background-color: ${p => p.theme.colors.muted};
`;

export const UserAvatar = styled.img`
  width: 64px;
  background-color: ${p => p.theme.colors.primary};
  padding: 10px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserTag = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;

export const UserLocation = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.text};
`;

export const UserStatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${p => p.theme.colors.secondary};
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.border};
`;

export const UserStatsLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: 8px;
`;

export const UserStatsQuantity = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
