import React from "react";
import { Route } from "react-router";

import Application from "components/Application/Application";
import HomePage from "pages/HomePage/HomePage";
import PhotosPage from "pages/PhotosPage/PhotosPage";

export default (
  <Route component={Application}>
    <Route path="/" component={HomePage} />
    <Route path="/photos" component={PhotosPage} />
  </Route>
);
