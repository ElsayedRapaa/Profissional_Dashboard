import React from "react";
import "./showUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable";

function Single() {
  return (
    <div className="show_User">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="showUser_Container">
        <Navbar />

        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <div className="title">Information</div>
            <div className="items">
              <div className="left_Item">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                  className="item_Img"
                />
              </div>
              <div className="right_Item">
                <div className="name">Hajia Bento</div>
                <div className="item">
                  <span className="item_Key">Email:</span>
                  <span className="item_Value">hajia7@email.com</span>
                </div>
                <div className="item">
                  <span className="item_Key">Phone:</span>
                  <span className="item_Value">+1 0123 456 7890</span>
                </div>
                <div className="item">
                  <span className="item_Key">Address:</span>
                  <span className="item_Value">
                    Menos St. 123 Modern Hc. Londone
                  </span>
                </div>
                <div className="item">
                  <span className="item_Key">Country:</span>
                  <span className="item_Value">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User Spending (Last 6 Months)" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <ListTable />
        </div>
      </div>
    </div>
  );
}

export default Single;
