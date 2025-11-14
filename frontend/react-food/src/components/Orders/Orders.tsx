import React from 'react'

// Components
import Order from './Order'
import { ScrollWrapper } from '../Wrappers/Wrapper.styles'
//Styles
import { OrderContainer } from './Order.styles'

const Orders = () => {
  return (
    <OrderContainer>
        <div className='selection-order'>
            <strong>Pedidos Recomendados</strong>
            <p>Ver todos {`>`}</p>
        </div>
        <ScrollWrapper>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
        </ScrollWrapper>
    </OrderContainer>
  )
}

export default Orders