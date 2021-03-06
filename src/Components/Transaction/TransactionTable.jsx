import PropTypes from 'prop-types';
import {Table, TableHead, TableRow, TableData} from './TransactionTable.styled'

export const TransactionTable = ({ transactions }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <TableRow key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

TransactionTable.propTypes = {
  history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};
