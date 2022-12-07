import React from "react";
import Header from "../Header/Header";
import "./Dashboard.css";
import PieChart from "../../components/Charts/PieChart";
import Table from "../../components/Tables/Table";
import Widgets from "../../components/Widgets/Widgets";
import StackedChart from "../../components/Charts/StackedChart";
import Card from "../../components/Card/Card";
import Rainbow from "../../components/Charts/Rainbow";
function Dashboard() {
  return (
    <div>
        <h2 className="heading">widgets</h2>
      <div>
        <Widgets />
      </div>
      <h2 className="heading">Basic info</h2>
      <div className="upper_con">
        <div className="stacked_chart">
          <StackedChart />
        </div>

        <Card />
      </div>
<h2 className="heading">Table & Statistics</h2>
      <div className="main_con">
        <div className="table">
          <Table />
        </div>
        <div className="pie_chart">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
