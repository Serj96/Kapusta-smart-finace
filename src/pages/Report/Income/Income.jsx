import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTransation, getUserIncomes } from 'Redux/kapustaSlice';

import {
  ReportArrowLeft,
  ReportArrowRight,
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
    navigate('/expenses', { replace: true });
    console.log('Натиснули на ліву стрілку і перейшли на сторінку Expenses');
  };

  const onChangeIncomePageHandler = () => {
    navigate('income', { replace: true });
    console.log('Натиснули на праву стрілку і перейшли на сторінку Income');
  };

  return (
    <>
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportArrowLeft onClick={onChangeExpensesPageHandler} size={24} />
          <ReportExpenseText>Income</ReportExpenseText>
          <ReportArrowRight onClick={onChangeIncomePageHandler} size={24} />
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
