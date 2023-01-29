import React from 'react';
import { DeleteIcon, ExpButton } from '../ExpenseItem/ExpenseItem.styled';
import {
  Table,
  TableC,
  TableH,
  TableWrapper,
  Td,
  Th,
} from './ExpenseTable.styled';

const qwe = [
  {
    id: 1,
    description: 'Undeground',
    date: '21.11.2019',
    Category: 'Transport',
    sum: '- 30.00 UAH.',
  },
  {
    id: 2,
    description: 'Bananas',
    date: '21.11.2019',
    Category: 'Products',
    sum: '- 50.00 UAH.',
  },
];

const ExpenseTable = () => {
  return (
    <>
      <TableWrapper>
        <TableH>
          <Table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <Th>DAte</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>Sum</Th>
              </tr>
            </thead>
          </Table>
        </TableH>
        <TableC>
          <Table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {qwe.map(({ id, date, description, Category, sum }) => (
                <tr key={id}>
                  <Td>{date}</Td>
                  <Td>{description}</Td>
                  <Td>{Category}</Td>
                  <Td>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '50px',
                      }}
                    >
                      {sum}
                      <ExpButton type="button">
                        <DeleteIcon />
                      </ExpButton>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableC>
      </TableWrapper>
    </>
  );
};

export default ExpenseTable;
