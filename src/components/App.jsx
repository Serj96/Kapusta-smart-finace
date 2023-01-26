import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransation, getrefreshToken, getAccesedToken, getToken } from "Redux/kapustaSlice";
import { register, login, logOut, fetchRefresh } from "../Redux/authOperaions";
export const App = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const accesedToken = useSelector(getAccesedToken);
  const token = useSelector(getToken);
  const transaction = useSelector(getTransation);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRefresh())
  }, [dispatch])
  const handleInput = (e) => {
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
    dispatch(login(newUser));
  }
  const onLogOut = () => {
    dispatch(logOut());
  }
  const newTransiction = {
    description: "adada",
    amount: 111,
    date: 'sada'
  }
  // console.log(newTransiction);

  return (
    <div>
      {accesedToken === null ? <form onSubmit={onSubmit}>
        <input type="text" name="email" value={form.email} onChange={handleInput} />
        <input type="text" name="password" value={form.password} onChange={handleInput} />
        <button type="submit">Add</button>
      </form> : <button onClick={onLogOut} type="button">logout</button>}
      <div>{transaction}</div>
    </div>
  );
};
