import { Route, Routes } from 'react-router-dom';
import Expenses from 'pages/Report/Expenses/Expenses';
import Income from 'pages/Report/Income/Income';

export const App = () => {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/income" element={<Income />} />
    </Routes>
  );
};

/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={"!token" ? <div /> : <Navigate to={"/contacts"} replace />} />
        <Route path="login" element={"!token " ? <Login /> : <Navigate to={"/contacts"} replace />} />
        <Route path="home" element={"token" ? <ContactList /> : <Navigate to={"/login"} replace />} >
          <Route path="expenses" element={"!token" ? <Login /> : <Navigate to={"/contacts"} replace />} />
          <Route path="income" element={"!token" ? <Login /> : <Navigate to={"/contacts"} replace />} />
        </Route>
        <Route path="reports" element={"token ?" < ContactList /> : <Navigate to={"/login"} replace />} />
      </Route>
    </Routes> */
