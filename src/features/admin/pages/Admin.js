import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { fetchProductsData } from '../ProductManagement/ProductSlice'
import './Admin.css'

function Admin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productClick = () => {
    Promise.resolve(dispatch(fetchProductsData())).then(() => navigate('product')) 
  }
  return (
    <div className='admin'>
        <div className="admin__navigation">
            <h2>Admin</h2>
            <span onClick={() => {productClick()}}>Quản lí sản phẩm</span>
            <span onClick={() => navigate('brand')}>Quản lí nhãn hàng</span>
            <span onClick={() => navigate('order')}>Quản lí đơn hàng</span>
            <span onClick={() => navigate('report')}>Báo cáo</span>
        </div>
        <div className='Outlet'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Admin