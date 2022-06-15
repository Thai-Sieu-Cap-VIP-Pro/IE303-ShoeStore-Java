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

  //tao 7 ngay gan nhat
  var date0 = new Date(), date1 = new Date(), date2 = new Date(),date3 = new Date(),date4 = new Date(),date5 = new Date(),date6 = new Date()
   date0 = new Date();
   date1.setDate(date0.getDate() - 1);
  date2.setDate(date0.getDate() - 2);
 date3.setDate(date0.getDate() - 3);
 date4.setDate(date0.getDate() - 4);
 date5.setDate(date0.getDate() - 5);
 date6.setDate(date0.getDate() - 6);




  var lastWeek = date.getDate()+'-'+ (date.getMonth()+1) +'-'+date.getFullYear();
  console.log(lastWeek)


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



  var num0 = 0, num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0



  orders.forEach(item=> {
    if(orderId.includes(item.orderId))
    {
      console.log(item.orderDate.split("-")[1])
      switch ( item.orderDate.split("-")[2] ) {
        case date0.getDay().toString():
          num0 += item.total
          
          break;
          case date1.getDate().toString():
            num1 += item.total
          
            break;
            case date2.getDate().toString():
              num2 += item.total
          
              break;
              case date3.getDate().toString():
                num3 += item.total
          
                break;
                case date4.getDate().toString():
                  num4 += item.total
          
                  break;
                  case date5.getDate().toString():
                    num5 += item.total
          
                    break;
                    case date6.getDate().toString():
                      num6 += item.total
          
                      break;
                                                
        default:
          break;
      }
     
    }
  })

  let array = [num6,num5, num4, num3, num2, num1, num0]
  console.log(array)

  console.log(orderId)

  return (
    <>
      <Row>
        <DashboardHeader />
      </Row>
      <Row>
        <DataDiv
          header="Doanh thu hôm nay"
          num={revenue}
          //compare="0.08%"
          bacground="datadiv green"
        />
        <DataDiv
          header="Số đơn hàng chưa xử lý"
          num={unOrder}
          //compare="0.18%"
          bacground="datadiv orange"
        />
        <DataDiv
          header="Số đơn đặt hôm nay"
          num={numOrder}
          //compare="12.08%"
          bacground="datadiv blue"
        />
        <DataDiv
          header="Doanh thu trong tháng"
          num={monthRevenue}
          //compare="30.08%"
          bacground="datadiv blueee"
        />
      </Row>
      <Row>
        {/* <BestSeller /> */}
        <Chart dataa = {array}></Chart>
      </Row>
    </>
  );
};

export default DashboardPage;