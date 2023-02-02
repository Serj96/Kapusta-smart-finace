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
import { Registration } from './Registration/Registration';
import { useMediaQuery } from 'react-responsive';
import Home from './Home/Home';
export const App = () => {
  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
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

        <Route
          path="expenses"
          element={token ? <ExpensesPage /> : <Navigate to={'/home'} />}
        />

            !token ? (
              <Registration />
            ) : (
              <Navigate to={'/home/expenses'} replace />
            )
          }
        />
        {!isMobScreen ? <Route path="expenses" element={token ? <ExpensesPage /> : <Navigate to={'/home'} />} /> : <Route path="expenses" element={token && isMobScreen ? <Home /> : <Navigate to={'/home'} />} />}

        <Route
          path="income"
          element={token ? <IncomePage /> : <Navigate to={'/home'} />}
        />

        <Route
          path="reports"
          element={token ? <AppBarReport /> : <Navigate to={'/home'} />}
        >
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
