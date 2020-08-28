import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import { MainView } from "../views/Main";
import { IntroView } from "../views/Intro";
import { LearningView } from "../views/Learning";
import { PracticeView } from "../views/Practice";
import { ExamView } from "../views/Exam/ExamView";
import { ExamGradeView } from "../views/ExamGrade";

const routes = [
  { path: "/", exact: true, component: MainView, label: "Home" },
  { path: "/intro", exact: true, component: IntroView, label: "Intro" },
  { path: "/learning", exact: true, component: LearningView, label: "Learning" },
  { path: "/practice", exact: true, component: PracticeView, label: "Practice" },
  { path: "/exam", exact: true, component: ExamView, label: "Exam" },
  { path: "/exam-grade", exact: true, component: ExamGradeView, label: "ExamGrade" }
];

function NaviBar() {
  const naviComponents = routes.map(({ path, label }) =>
    <li><Link to={path}>{label}</Link></li>
  );

  return (
    <nav>
      <ul>{naviComponents}</ul>
    </nav>
  );
}

function ViewRoutes() {
  const routeComponents = routes.map(({ path, exact, component }) =>
    <Route path={path} exact={exact} component={component} />
  );

  return (
    <Switch>
      {routeComponents}
      <Redirect path="*" to="/" />
    </Switch>
  );
}

function AppCoordinator() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <NaviBar />
        <ViewRoutes />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default AppCoordinator;
