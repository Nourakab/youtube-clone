import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Follow BEM class naming convention
    <div className="App">
      {/* My Router here will determine which url loads which component*/}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={<h1>Search page</h1>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
