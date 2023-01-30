import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTransation, getUserIncomes } from 'Redux/kapustaSlice';

import {
  ReportArrowLeft,
  ReportArrowRight,
  ReportExpenseButtonArrowLeft,
  ReportExpenseButtonArrowRight,
  ReportExpenseWrapper,
  ReportExpenseText,
  ReportExpenseList,
  ReportExpenseListItem,
  ReportExpenseListItemAmount,
  ReportExpenseListItemText,
  ReportExpenseListWrapper,
} from '../Report.styled';

import Salary from 'components/ReportIcons/Salary';
import OutherIncomes from 'components/ReportIcons/OutherIncomes';

export default function Income() {
  const categories = useSelector(
    state => state.kapusta.auth.userData.category.income
  );
  console.log(categories);

  const transactions = useSelector(getTransation);
  console.log(transactions);

  const userIncomes = useSelector(getUserIncomes);
  userIncomes.map(item => console.log(item));

  const navigate = useNavigate();

  const onChangeExpensesPageHandler = () => {
    const expenseButtonArrowLeft = document.querySelector('.arrow-left');
    const expenseButtonArrowRight = document.querySelector('.arrow-right');
    console.log(expenseButtonArrowLeft);
    console.log(expenseButtonArrowRight);

    navigate('/home/reports', { replace: true });
    console.log('Натиснули на ліву стрілку і перейшли на сторінку Expenses');
  };

  const onChangeIncomePageHandler = () => {
    const expenseButtonArrowLeft = document.querySelector('.arrow-left');
    const expenseButtonArrowRight = document.querySelector('.arrow-right');
    console.log(expenseButtonArrowLeft);
    console.log(expenseButtonArrowRight);
    navigate('income', { replace: true });
    console.log('Натиснули на праву стрілку і перейшли на сторінку Income');
  };

  return (
    <>
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportExpenseButtonArrowLeft
            className="arrow-left"
            onClick={onChangeExpensesPageHandler}
          >
            <ReportArrowLeft size={24} />
          </ReportExpenseButtonArrowLeft>
          <ReportExpenseText>Income</ReportExpenseText>
          <ReportExpenseButtonArrowRight
            disabled={true}
            className="arrow-right"
            onClick={onChangeIncomePageHandler}
          >
            <ReportArrowRight size={24} />
          </ReportExpenseButtonArrowRight>
        </ReportExpenseWrapper>

        <ReportExpenseList>
          {userIncomes.map((income, index) => (
            <ReportExpenseListItem key={index}>
              <ReportExpenseListItemAmount>
                {income.amount}
              </ReportExpenseListItemAmount>
              {income.category === 'Salary' && <Salary />}
              {income.category === 'Outher' && <OutherIncomes />}
              {income.category === 'Pension' && <OutherIncomes />}
              {income.category === 'Premium' && <OutherIncomes />}
              {income.category === 'Win' && <OutherIncomes />}
              {income.category === 'Advance' && <OutherIncomes />}
              <ReportExpenseListItemText>
                {income.category}
              </ReportExpenseListItemText>
            </ReportExpenseListItem>
          ))}
        </ReportExpenseList>
      </ReportExpenseListWrapper>
    </>
  );
}
