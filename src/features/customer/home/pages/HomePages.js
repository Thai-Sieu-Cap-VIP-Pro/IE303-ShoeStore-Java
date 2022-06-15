import React, { useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeBody from "../components/HomeBody";
import HomeFooter from "../components/HomeFooter";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteProduct,
  fetchProductsData,
  selectProducts,
  showAddProductForm,
} from "../../../admin/ProductManagement/ProductSlice";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("AD");
    dispatch(fetchProductsData());
  }, []);
  return (
    <>
      <HomeHeader />

      <HomeBody />

      <HomeFooter />
    </>
  );
};

export default HomePages;
