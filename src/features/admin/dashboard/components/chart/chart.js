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

const Chart = () => {
  const data = {
    labels: [
      "Monday",
      "Jul",
      "Aug",
      "Monday",
      "Jul",
      "Aug",
      "Monday",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        id: 1,
        label: "Doanh thu tuần",
        data: [5, 1, 7, 2, 6, 7, 8, 5, 4],
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
