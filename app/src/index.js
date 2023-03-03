import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';
// BUG #02: Elixirs not imported
import Elixirs from './routes/Elixirs';
// BUG #03: Houses not imported
import Houses from './routes/Houses';

// BUG #01: div in index.html has id "root", not "app"
const root = ReactDOM.createRoot(document.getElementById("root")); // root element is in the index.html
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="elixirs" element={<Elixirs />} />
          <Route path="houses" element={<Houses />} />
          <Route path="wizards" element={<Wizards />} />
          <Route path="ingredients" element={<Ingredients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

