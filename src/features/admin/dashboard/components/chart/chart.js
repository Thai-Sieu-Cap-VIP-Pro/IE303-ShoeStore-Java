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

const Chart = ({dataa}) => {
  const data = {
    labels: [
      "9/6",
      "10/6",
      "11/6",
      "12/6",
      "13/6",
      "14/6",
      "15/6",
    ],
    datasets: [
      {
        id: 1,
        label: "Doanh thu tuần",
        data: dataa,
      },
    ],
  };
  return (
    <Col md={8}>
      <div className="chartwrap">
        <div className="chart">
          <Line datasetIdKey="id" data={data} />
        </div>
      </div>
    </Col>
  );
};

export default Chart;
