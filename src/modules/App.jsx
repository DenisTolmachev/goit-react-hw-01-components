//import styled from "styled-components";
import { Box } from 'Box';
import friends from 'data/friends';
import user from 'data/user.json';
import { Profile } from './Proriles/Profile';
import { FriendsList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Box as="section">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Box as="section">
        <FriendsList friends={friends} />
      </Box>
    </div>
  );
};
