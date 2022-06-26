import { Friend } from './Friend';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          isOline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};
