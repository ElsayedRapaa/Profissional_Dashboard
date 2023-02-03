import React from "react";
import "./users.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import UsersList from "../../components/usersList/UsersList";

function List() {
  return (
    <div className="users">
      <div className="siebar">
        <Sidebar />
      </div>
      <div className="users_Container">
        <Navbar />
        <UsersList />
      </div>
    </div>
  );
}

export default List;
