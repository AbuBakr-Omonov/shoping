import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile/Profile";
import Group from "./pages/Dashboard/group/Group";
import GroupCreate from "./pages/Dashboard/group/groupCreate/GroupCreate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 not fount</h1>} />
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Profile />} />
          <Route path="/groups/:groupId" element={<Group />}/>
          {/* <Route path="group" element={} >
             <Route path="groupcreate" element={<GroupCreate />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
