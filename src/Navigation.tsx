import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./helpers/customHooks";
import {
  AuthenticationPage,
  CorparateProfilePage,
  DashboardPage,
  SearchPage,
} from "./pages";

export const Navigation = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/companies/:id" element={<CorparateProfilePage />} />
            <Route path="*" element={<Navigate to="/search" />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<AuthenticationPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
