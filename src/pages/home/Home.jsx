import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Wedget from "../../components/wedget/Wedget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_Container">
        <Navbar />
        <div className="wedgets">
          <Wedget type="users" />
          <Wedget type="orders" />
          <Wedget type="erarnings" />
          <Wedget type="balance" />
        </div>
        <div className="chart_Container">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="table_Container">
          <ListTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
