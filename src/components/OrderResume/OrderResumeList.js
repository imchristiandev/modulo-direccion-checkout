import React from 'react';
import OrderResumeItem from './OrderResumeItem';

import './OrderResume.scss';

const OrderResumeList = (props) => {

    const orderResumeItemGroup = props.products.map((orderResumeItem, identificator) => (
        <OrderResumeItem 
            key = {`product-${identificator}`} 
            image = {orderResumeItem.image}
            name = {orderResumeItem.name}
            price = {orderResumeItem.price}
        />
    ));
    return(
        <div className="orderResume__list">
            { orderResumeItemGroup }
        </div>
    )
}


export default OrderResumeList