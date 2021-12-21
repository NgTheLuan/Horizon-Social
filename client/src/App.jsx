import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "./redux/actions/authAction.jsx";
import PageRender from "./PageRender.jsx";
import Notify from "./components/Notify/Notify.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Notify />
      {/* <input type="checkbox" id="theme" /> */}
      <div className="App">
        <div className="main">
          <Route exact path="/login" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
