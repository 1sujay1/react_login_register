import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Timer from "./components/Timer";
import TodoTest from "./components/TodoTest";
import Todo from "./components/Todo";
import ContextProvider from "./components/ContextProvider";
import Context from "./components/Context";
import BiDirectional from "./components/BiDirectional";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todos" element={<TodoTest />} />
          <Route path="/context" element={<Context />} />
          <Route path="/bidirec" element={<BiDirectional />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
