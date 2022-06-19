import React from "react";
import { Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "./style.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ dataa, datee }) => {
  console.log(datee)
  let days = []
  datee.map(day => {
    console.log(day.getDate())
    days.push(`${day.getDate()}/${day.getMonth()}`)
  })
  console.log(days)
  const data = {
    labels: days,
    datasets: [
      {
        id: 1,
        label: "Doanh thu tuần",
        data: dataa,
      },
    ],
  };
  return (
    <Col md={{ span: 10, offset: 1 }}>
      <div className="chartwrap">
        <div className="chart">
          <Line datasetIdKey="id" data={data} />
        </div>
      </div>
    </Col>
  );
};

export default Chart;
