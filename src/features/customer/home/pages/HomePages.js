import React, { useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeBody from "../components/HomeBody";
import HomeFooter from "../components/HomeFooter";
import "./HomePage.css";
import { useDispatch } from "react-redux";
import {
  fetchDeleteProduct,
  fetchProductsData,
  selectProducts,
  showAddProductForm,
} from "../../../admin/ProductManagement/ProductSlice";

const HomePages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);
  return (
    <>
      <div>
        <HomeHeader />
      </div>
      <div>
        <HomeBody />
      </div>
      <div>
        <HomeFooter />
      </div>
    </>
  );
};

export default HomePages;
