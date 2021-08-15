import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({ 
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {

    //push item to basket
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        //remove item from redux
        dispatch(removeFromBasket({ id }))
    }
    
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle Section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500"/>
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p>${price}</p>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            src="https://links.papareact.com/fdw" 
                            alt="" 
                            className="w-12"
                            loading="lazy"    
                        />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button">Add to Basket</button>
                <button onClick={removeItemFromBasket} className="button ">Remove item</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
