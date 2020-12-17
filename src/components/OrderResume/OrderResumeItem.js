import React from 'react';

import './OrderResume.scss';

const OrderResumeItem = (props) => {
    return(
        <div className="orderResume__item">
            <div className="orderResume__item__image">
                <img src={props.image} alt={props.name}/>
            </div>
            <p className="orderResume__item__name">
                {props.name}
            </p>
            <div className="orderResume__item__price">
                {parseInt(props.price).toLocaleString('es-MX')}
            </div>
        </div>
    )
}

export default OrderResumeItem;