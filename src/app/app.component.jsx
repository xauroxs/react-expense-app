import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import ReportsPage from "../pages/reports/reports.page";
import NotFoundPage from "../pages/not-found/not-found.page";
import CategoriesPage from "../pages/categories/categories.page";

import "./app.styles.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<HomePage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="categories" element={<CategoriesPage />} />

        <Route path="not-found" element={<NotFoundPage />} />

        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
