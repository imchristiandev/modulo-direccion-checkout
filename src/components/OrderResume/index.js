import React, { useState, useEffect } from 'react';
import OrderResumeList from './OrderResumeList';
import OrderResumePayment from './OrderResumePayment';
import axios from '../../axios';

import './OrderResume.scss';

const OrderResume = () => {
    const [orderResumeProducts, setorderResumeProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const request = await axios.get('products');
            setorderResumeProducts(request.data);
        }
        getProducts();
    }, []);

    let orderTotalPrice = 0;
    for(let product of orderResumeProducts) {
        orderTotalPrice = orderTotalPrice + parseInt(product.price);
    }

    return (
        <div className="orderResume">
            <h2 className="orderResume__title">RESUMEN DE LA COMPRA</h2>
            <OrderResumeList
                products = {orderResumeProducts}
            />
            <p className="orderResume__edit">
                <button className="orderResume__edit__button">Editar</button>
            </p>
            <OrderResumePayment totalPrice = {orderTotalPrice}/>
        </div>
    )
}

export default OrderResume;