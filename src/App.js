
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseTable from "./components/CourseTable";
import NavBar from "./components/Navbar";
import AllCourses from "./views/AllCourses";
import EnrolledCourses from "./views/EnrolledCourses";
import LoginDialog from "./components/LoginDialog";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/enrolled">
            <EnrolledCourses />
          </Route>
         <Route path="/debug">
           <LoginDialog />
         </Route>
          <Route path="/">
            <AllCourses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
