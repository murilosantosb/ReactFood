import React from 'react'
import Image from 'next/image'

// Components
import Status from '../Status/Status'

// Styles
import { OrderComponent } from './Order.styles'

type Props = {}

const Order = (props: Props) => {
  return (
    <OrderComponent>
        <div>
            <Status status='discount' title="20%" icon={true}/>
        </div>
        <span>
            <p className='order-title'>Frango ao Molho</p>
            <strong>R$ 28,00</strong>
            <p className='order-price'>R$ 35,00</p>
            <p className='restaurant-title'>Bistro Verdejante</p>
        </span>
    </OrderComponent>
  )
}

export default Order