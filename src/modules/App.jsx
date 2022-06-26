//import styled from "styled-components";
import { Box } from 'Box';
import user from '../data/user.json';
import friends from 'data/friends';
import data from 'data/data';
import { Profile } from './Proriles/Profile';
import { FriendsList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Box as="section">
        <Profile user={user} />
      </Box>
      <Box as="section">
        <Statistics data={data} />
      </Box>
      <Box as="section">
        <FriendsList friends={friends} />
      </Box>
    </div>
  );
};
