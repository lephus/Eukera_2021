
import { Router, Switch, Route } from "react-router-dom";
import history from "../src/utils/history";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Blog from "./pages/BlogPage/Blog.js"
import Login from "./pages/LoginPage/Login.js";
import Register from "./pages/RegisterPage/Register";
import BlogDetail from "./pages/BlogPage/DetailPage/BlogDetail";
import Course from "./pages/CoursePage/Course";
import CourseDetail from "./pages/CoursePage/DetailPage/CourseDetail"
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <Router history={history}>
      {/* gặp route nào đúng path thì nó dừng lại route đó */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:titlePost" component={BlogDetail} />
        <Route exact path="/khoa-hoc" component={Course} />
        <Route exact path="/khoa-hoc/:titleCourse" component={CourseDetail} />
        <Route exact path="/dang-nhap" component={Login} />
        <Route exact path="/dang-ky" component={Register} />
      </Switch>
    </Router>

  );
}

export default App;
