import styled from 'styled-components';

export const FriendsListContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${p => p.theme.colors.muted};
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${p =>
    p.status ? p.theme.colors.online : p.theme.colors.offline};
`;

export const FriendAvatar = styled.img`
  width: 64px;
  background-color: ${p => p.theme.colors.primary};
  padding: 10px;
  margin-right: 20px;
  border-radius: 50%;
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
