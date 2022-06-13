import React, { useEffect, useState } from 'react'
import HomeHeader from '../../home/components/HomeHeader'
import HomeFooter from '../../home/components/HomeFooter'
import ProductsBody from '../components/ProductsBody'
import { useDispatch } from 'react-redux'

import {
  fetchProductsData
} from "../../../admin/ProductManagement/ProductSlice";

function ProductsPage() {
  // const dispatch = useDispatch();
  // const [refresh, setRefresh] = useState(false)
  // useEffect( async () => {
  //   await dispatch(fetchProductsData()).unwrap();
  //   setRefresh(!refresh)
  // }, []);
  return (
    <>
      <div><HomeHeader /></div>
      <div><ProductsBody /></div>
      <div><HomeFooter /></div>
    </>
  )
}

export default ProductsPage