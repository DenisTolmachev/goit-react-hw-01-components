import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  margin-top: 10px;
  background-color: ${p => p.theme.colors.muted};
  box-shadow: 0px 5px 10px -4px #050505;
`;

export const TableHead = styled.th`
  padding: 10px;
  background-color: ${p => p.theme.colors.primary};
`;

export const TableRow = styled.tr`
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.muted};
  }
  :nth-child(even) {
    background-color: ${p => p.theme.colors.border};
  }
`;

export const TableData = styled.td`
  padding: 10px;
`;
