//import styled from "styled-components";
import { Box } from '../Box';
import friends from 'data/friends';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Box as="ul">
      {friends.map(friend => (
        <FriendList
          isOline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </Box>
  );
};
