import React from 'react';
import { RestaurantContainer } from './Restaurant.styles';
import Image from 'next/image';
import Rating from '../Rating/Rating';
import Favorite from '../Buttons/Favorite/Favorite';


const Restaurant = () => {


  return (
    <>
        <RestaurantContainer>
            <span className='icons_rastaurant'>
                <Rating variant='disabled' />
                <Favorite category='notFavorite'/>
            </span>
            <Image 
                src="1722871010034 - Bistro verdejante.png"
                alt='Restaurante'
                width={381}
                height={222}
            />
           <span className='description_content_restaurant'>
                <strong>Bistrô Verdejante</strong>
                <p>Entrega Grátis</p>
                <p>45 min</p>
           </span>

        </RestaurantContainer>
    </>
  )
}

export default Restaurant