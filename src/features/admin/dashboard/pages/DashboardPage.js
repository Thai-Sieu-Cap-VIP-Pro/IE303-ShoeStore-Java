import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import orderDetailAPI from "../../../../api/OrderDetailApi";
import {
  fetchOrdersData,
  selectOrders,
} from "../../OrderManagement/OrderSlice";
import BestSeller from "../components/bestSeller/bestSeller";
import Chart from "../components/chart/chart";
import DataDiv from "../components/dataDiv/DataDiv";
import DashboardHeader from "../components/header/dashboardHeader";

const DashboardPage = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  var date = new Date();
  date.setDate(date.getDate() - 7);
  var lastWeek =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  console.log(lastWeek);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrdersData());
    orderDetailAPI.getAllOrderDetails().then((res) => {
      console.log(res.data);
    });
  }, []);
  const orders = useSelector(selectOrders);
  let orderId = [];
  let revenue = 0;
  let unOrder = 0;
  let monthRevenue = 0;
  let numOrder = 0;
  if (orders.length) {
    orders.forEach((item) => {
      if (today == item.orderDate.toString()) {
        revenue += item.total;
        numOrder += 1;
      }
      if (item.orderStatus == 0) {
        unOrder += 1;
      }

      var d = new Date(
        item.orderDate.split("-")[0],
        Number(item.orderDate.split("-")[1]) - 1,
        item.orderDate.split("-")[2]
      );
      console.log(d);
      console.log(date);

      console.log(d.getTime());
      console.log(date.getTime());

      if (d > date) {
        orderId.push(item.orderId);
      }

      if (item.orderDate.split("-")[1] == mm) {
        monthRevenue += item.total;
      }
    });
  }

  console.log(orderId);
  return (
    <>
      <Row>
        <DashboardHeader />
      </Row>
      <Row>
        <DataDiv
          header="Doanh thu hôm nay"
          num={revenue}
          compare="0.08%"
          bacground="datadiv green"
        />
        <DataDiv
          header="Số đơn hàng chưa xử lý"
          num={unOrder}
          compare="0.18%"
          bacground="datadiv orange"
        />
        <DataDiv
          header="Số đơn đặt hôm nay"
          num={numOrder}
          compare="12.08%"
          bacground="datadiv blue"
        />
        <DataDiv
          header="Doanh thu trong tháng"
          num={monthRevenue}
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
