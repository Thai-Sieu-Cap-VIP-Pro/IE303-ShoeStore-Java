import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import { fetchOrdersData } from "../../OrderManagement/OrderSlice";
import BestSeller from "../components/bestSeller/bestSeller";
import Chart from "../components/chart/chart";
import DataDiv from "../components/dataDiv/DataDiv";
import DashboardHeader from "../components/header/dashboardHeader";

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const action = fetchOrdersData();
    await dispatch(action).unwrap();
  }, []);
  return (
    <>
      <Row>
        <DashboardHeader />
      </Row>
      <Row>
        <DataDiv
          header="Doanh thu hôm nay"
          num="5.000.000"
          compare="0.08%"
          bacground="datadiv green"
        />
        <DataDiv
          header="Số đơn hàng chưa xử lý"
          num="20"
          compare="0.18%"
          bacground="datadiv orange"
        />
        <DataDiv
          header="Doanh thu trong tuần"
          num="18.000.000"
          compare="12.08%"
          bacground="datadiv blue"
        />
        <DataDiv
          header="Doanh thu trong tháng"
          num="200.000.000"
          compare="30.08%"
          bacground="datadiv blueee"
        />
      </Row>
      <Row>
        <BestSeller />
        <Chart></Chart>
      </Row>
    </>
  );
};

export default DashboardPage;
