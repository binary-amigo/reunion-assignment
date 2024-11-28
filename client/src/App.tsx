import { useState } from "react";
import "./App.css";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Tasks } from "./pages/Tasks.tsx";
import { Edit } from "./pages/Edit.tsx";
import { Add } from "./pages/Add.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/edit" element={<Edit />} />
          <Route path="/tasks/add" element={<Add />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
