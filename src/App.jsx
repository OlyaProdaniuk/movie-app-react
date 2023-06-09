import "./App.css";
import React from "react";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import MovieInfo from "./pages/MovieInfo";
import VideoPage from "./pages/Video";

const App = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} exact />
    <Route path="/movie-info/:id" element={<MovieInfo />} exact />
    <Route path="/video/:id" element={<VideoPage />} exact />
    <Route path={ROUTES.PROFILE} element={<Profile />} exact />
    <Route path={ROUTES.REGISTER} element={<Register />} exact />
    <Route path={ROUTES.SETTINGS} element={<Settings />} exact />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
