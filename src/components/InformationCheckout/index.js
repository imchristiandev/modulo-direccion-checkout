import React from 'react';
import InformationCheckoutForm from './informationCheckoutForm';

import './InformationCheckout.scss';

const InformationCheckout = () => {
    return (
        <div className='info'>
            <h2 className='info__title'>DIRECCIÓN DE ENVÍO</h2>
            <InformationCheckoutForm/>
        </div>
    )
}

export default InformationCheckout;