import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './Admin.css'

function Admin() {
  const navigate = useNavigate()
  return (
    <div className='admin'>
        <div className="admin__navigation">
            <h2>Admin</h2>
            <span onClick={() => navigate('product')}>Quản lí sản phẩm</span>
            <span onClick={() => navigate('brand')}>Quản lí nhãn hàng</span>
            <span onClick={() => navigate('order')}>Quản lí đơn hàng</span>
            <span onClick={() => navigate('report')}>Báo cáo</span>
        </div>
        <Outlet/>
    </div>
  )
}

export default Admin