import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        {/* <Route path='/detail' element={<Detail/>} /> */}
      </Routes>
      <Detail />
      </AuthContextProvider>
    </>
  );
}

export default App;
