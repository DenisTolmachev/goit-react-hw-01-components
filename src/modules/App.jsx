import { Main } from 'common/main';
import user from 'data/user';
import friends from 'data/friends';
import data from 'data/data';
import transactions from 'data/transactions';
import { Profile } from './Proriles/Profile';
import { FriendsList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionTable } from './Transaction/TransactionTable';
import { Section } from 'common/section';

export const App = () => {
  return (
    <Main>
      <Section>
        <h2>Task 1 - User profile</h2>
        <Profile user={user} />
      </Section>

      <Section>
        <h2>Task 2 - Statistics section</h2>
        <Statistics data={data} />
      </Section>

      <Section>
        <h2>Task 3 - Friends list</h2>
        <FriendsList friends={friends} />
      </Section>

      <Section>
        <h2>Task 4 - Transaction history</h2>
        <TransactionTable transactions={transactions} />
      </Section>
    </Main>
  );
};
