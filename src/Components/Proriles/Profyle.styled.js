import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const UserDescription = styled.div`
  padding: 40px;
  background-color: ${({theme}) => theme.colors.muted};
`;

export const UserAvatar = styled.img`
  width: 64px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 10px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: ${({theme}) => theme.fontSizes.l};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  font-size: ${({theme}) => theme.fontSizes.m};
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: ${({theme}) => theme.fontSizes.ml};
  color: ${({theme}) => theme.colors.text};
`;

export const UserStatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.border};
`;

export const UserStatsLabel = styled.span`
  font-size: ${({theme}) => theme.fontSizes.s};
  margin-bottom: 8px;
`;

export const UserStatsQuantity = styled.span`
  font-size: ${({theme}) => theme.fontSizes.m};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`;
