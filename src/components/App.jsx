import { Route, Routes } from 'react-router-dom';
import Expenses from 'pages/Report/Expenses/Expenses';
import Income from 'pages/Report/Income/Income';
import AppBarReport from './Report/AppBarReport/AppBarReport';

export const App = () => {
  return (
    <Routes>
      <Route path="/expenses" element={<AppBarReport />}>
        <Route index element={<Expenses />} />
        <Route path="income" element={<Income />} />
      </Route>
    </Routes>
  );
};
