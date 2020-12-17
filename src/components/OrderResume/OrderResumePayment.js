import React from 'react';

import './OrderResume.scss';

const OrderResumePayment = (props) => {
    return(
        <div className="orderResume__payment">
            <div className="orderResume__subtotal">
                <div className="orderResume__subtotal__title">
                    SUBTOTAL
                </div>
                <div className="orderResume__subtotal__value">
                    {props.totalPrice.toLocaleString('es-MX')}
                </div>
                <div className="orderResume__subtotal__title">
                    ENVÍO
                </div>
                <div className="orderResume__subtotal__send">
                    A calcular
                </div>
            </div>
            <div className="orderResume__total">
                <div className="orderResume__total__title">
                    TOTAL
                </div>
                <div className="orderResume__total__value">
                    $13,974.00
                </div>
            </div>
        </div>
    )
}

export default OrderResumePayment;