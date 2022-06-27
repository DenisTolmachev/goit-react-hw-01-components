import PropTypes from 'prop-types';
import {
  FriendsListContainer,
  OnlineStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsListContainer key={id}>
          <OnlineStatus status={isOnline}></OnlineStatus>
          <FriendAvatar src={avatar} alt="User avatar" />
          <FriendName>{name}</FriendName>
        </FriendsListContainer>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
