import HomePage from "./HomePage/HomePage";
import { Image } from "./Image/Image";
export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        
      }}
    >
      <Image />
      <HomePage />
    </div>
  );
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
};
