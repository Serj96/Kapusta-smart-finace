import LoginPage from 'LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getSid } from 'Redux/kapustaSlice';
import { Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import AppBarReport from './Report/AppBarReport/AppBarReport';
import Expense from 'pages/Report/Expenses/Expenses';
import Income from 'pages/Report/Income/Income';
import ExpensesPage from './ExpensesPage/ExpensesPage';
import IncomePage from './IncomePage/IncomePage';
import { useEffect } from 'react';
import { refresh } from 'Redux/authOperaions';
import { NotFound } from './NotFound/NotFound';
export const App = () => {
  const token = useSelector(getSid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/home" element={<Layout />}>
        <Route
          index
          element={
            !token ? <LoginPage /> : <Navigate to={'/home/expenses'} replace />
          }
        />
        {/* <Route
          path="register"
          element={
            !token ? <HomePage /> : <Navigate to={'/home/expenses'} replace />
          }
        /> */}
        <Route
          path="expenses"
          element={token ? <ExpensesPage /> : <Navigate to={'/home'} />}
        />
        <Route
          path="income"
          element={token ? <IncomePage /> : <Navigate to={'/home'} />}
        />
        <Route path="reports" element={<AppBarReport />}>
          {/* =======
        <Route
          path="reports"
          element={token ? <AppBarReport /> : <Navigate to={'/home'} />}
        >
>>>>>>> dev */}
          <Route index element={<Expense />} />
          <Route
            path="income"
            element={token ? <Income /> : <Navigate to={'/home'} />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
