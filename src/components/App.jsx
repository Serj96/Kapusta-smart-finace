import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, refresh } from "Redux/authOperaions";
import { getSid, getTransation } from "Redux/kapustaSlice";
import transactionOperations, { addExpense, addIncome, getIncome } from "Redux/transactionOperation";
import userOperations from "Redux/userOperations";
export const App = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const token = useSelector(getSid);
  const transaction = useSelector(getTransation)
  const dispath = useDispatch();
  useEffect(() => {
    dispath(refresh());
  }, [dispath])
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,

    }));
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: form.email,
      password: form.password
    }
    dispath(login(newUser));
  }
  const logOutUser = () => {
    dispath(logOut())
  }
  const setUser = () => {
    const trans = {
      description: "Expense description",
      amount: 100,
      date: "2020-12-31",
      category: "Продукты"
    }
    dispath(addExpense(trans));
    // dispath(getIncome());
    console.log(transaction);
  }

  return <>{!token && <form onSubmit={onSubmit}>
    <input type="text" onChange={inputHandler} name="email" value={form.email} autoComplete="off" />
    <input type="text" onChange={inputHandler} name="password" value={form.password} autoComplete="off" />
    <button type="submit">add</button>
  </form>}
    {token && <button onClick={logOutUser} type="button">logOut</button>}
    {token && <button onClick={setUser} type="button">set</button>}
  </>
};
