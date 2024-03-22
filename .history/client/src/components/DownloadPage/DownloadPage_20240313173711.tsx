import React from 'react'
import { Product } from '../../store/features/productsSlice';
import { RootState } from '../../store/features/productsSlice';
import { useSelector } from 'react-redux';
import logo from '../../assets/lev_logo.jpg'

function DownloadPage() {
  const products = useSelector((state: RootState) => state.product.items);
  return (
    <div className='h-screen w-screen'>
      <div className='h-[15%] flex justify-around items-center'>
        <h1 className=' font-bold text-2xl'>INVOICE GENERATOR</h1>
        <img src={logo} alt="logo" className='h-14' />
      </div>
      <div className='w-full flex justify-center'>
        <table className='w-[50%]'>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
          <hr className=' w-full'/>
          {
            products.map((product:Product, idx:Number)=>(
              <tr key={idx.toString()}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.price*product.quantity}</td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default DownloadPage