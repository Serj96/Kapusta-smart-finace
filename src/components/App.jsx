import HomePage from './HomePage/HomePage';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getSid } from 'Redux/kapustaSlice';
import { Registration } from './Registration/Registration';
import { Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
export const App = () => {
  const token = useSelector(getSid)
  return <Routes>
    <Route path="/home" element={<Layout />}>
      <Route index element={!token ? <HomePage /> : <Navigate to={"/home/expenses"} replace />} />
      <Route path="register" element={!token ? <Registration /> : <Navigate to={"/home/expenses"} replace />} />
      <Route path="expenses" element={token ? <div>Expenses</div> : <Navigate to={"/home"} />} />
    </Route>
    <Route path="*" element={<Navigate to={"/home"} />} />
  </Routes>

};
