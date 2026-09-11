import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext.jsx";
import { LanguageProvider } from "./LanguageContext.jsx";
import { LocationProvider } from "./LocationContext.jsx";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Crops from "./components/Crops";
import Finance from "./components/Finance";
import Reports from "./components/Reports";
import Marketplace from "./components/Marketplace";
import Notifications from "./components/Notifications";

function Protected({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="screen-center">
        Loading AgriFincaster...
      </div>
    );
  }

  return user
    ? children
    : <Navigate to="/login" replace />;
} 
function Page({ children }) {
  return (
    <Protected>
      <Layout>
        {children}
      </Layout>
    </Protected>
  );
}


export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <LocationProvider>
          <BrowserRouter basename="/agri-fincaster">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Protected><Layout><Home/></Layout></Protected>} />
              <Route path="/weather" element={<Protected><Layout><Weather/></Layout></Protected>} />
              <Route path="/crops" element={<Protected><Layout><Crops/></Layout></Protected>} />
              <Route path="/finance" element={<Protected><Layout><Finance/></Layout></Protected>} />
              <Route path="/reports" element={<Protected><Layout><Reports/></Layout></Protected>} />
              <Route
  path="/marketplace"
  element={
    <Page>
      <Marketplace />
    </Page>
  }
/>

<Route
  path="/notifications"
  element={
    <Page>
      <Notifications />
    </Page>
  }
/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </LocationProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}
