import React, {useState} from 'react';
import './InformationCheckoutForm.scss';
import axios from '../../axios';

const InformationCheckoutForm = () => {
    const [informationForm, setInformationForm] = useState({
        zipcode: '',
        value: 'DEFAULT',
        informationAddress: null,
        colonyOptionGroup: [],
    });
    const colonyOptionGroup = informationForm.colonyOptionGroup.map((colonyOption, index) => (
        <option key={`option-${index+1}`} value={`colony-${index+1}`}>{colonyOption}</option>        
    ));

    const handleChange = (event) => {
        const zipcodeResponse = event.target.value.replace('zipcode-','');
        console.log('data', zipcodeResponse);
        getAddressData(zipcodeResponse);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let zipcodeEvent = event.target.elements['zipcode'];
        let colony = event.target.elements['colony'];
        
        let colonyData = colony.tagName === 'SELECT' ? 
            colony.options[colony.selectedIndex].label :
            colony.value;

        let data = {
            firstName: event.target.elements['firstName'].value,
            lastName: event.target.elements['lastName'].value,
            email: event.target.elements['email'].value,
            telephone: event.target.elements['telephone'].value,
            zipcode: zipcodeEvent.options[zipcodeEvent.selectedIndex].label,
            colony: colonyData,
            state: event.target.elements['state'].value,
            city: event.target.elements['city'].value,
            street: event.target.elements['street'].value
        }
        console.log('mi data', data)
        axios.post('contact/', data)
            .then(function (response) {
                alert('respuesta de post', response);
            })
            .catch(function (error) {
                alert('error', error);
            })
    }

    const getAddressData = async (zipcodeResponse) => {
        const request = await axios.get(`postalCodes/${zipcodeResponse}`);

        setInformationForm({
            zipcode: `zipcode-${zipcodeResponse}`,
            informationAddress: request.data,
            colonyOptionGroup: request.data.colonies
        });
    }

    return (
        <form id="checkoutInfo" className='form' onSubmit={handleSubmit}>
            <div className="form__field">
                <label className="form__field__label" htmlFor="firstName">
                    <i className="fas fa-user"></i>
                </label>
                <input className="form__field__input" type="text" id="firstName" placeholder="Nombre"/>
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="lastName">
                    <i className="fas fa-user"></i>
                </label>
                <input className="form__field__input" type="text" id="lastName" placeholder="Apellidos"/>
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="email">
                    <i className="fas fa-envelope"></i>
                </label>
                <input className="form__field__input" type="email" id="email" placeholder="Correo electrónico"/>
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="telephone">
                    <i className="fas fa-phone-alt"></i>
                </label>
                <input className="form__field__input" type="text" id="telephone" placeholder="Número de teléfono"/>
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="zipcode">
                    <i className="fas fa-map-marked"></i>
                </label>
                <select className="form__field__input" id="zipcode" value={informationForm.value} onChange={handleChange}>
                    <option value="DEFAULT" disabled>Código Postal</option>
                    <option value="zipcode-11000">11000</option>
                    <option value="zipcode-89000">89000</option>
                </select>
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="colony">
                    <i className="fas fa-map-marked"></i>
                </label>
                {informationForm.informationAddress ?
                    informationForm.informationAddress.colonies.length > 1 ?
                    <select className="form__field__input" id="colony" value={informationForm.value}>
                        {colonyOptionGroup}
                    </select> :
                    <input 
                        className="form__field__input" 
                        type="text" 
                        id="colony" 
                        placeholder="Colonia" 
                        defaultValue={informationForm.informationAddress.colonies[0]}
                    />
                :
                    <input className="form__field__input" type="text" id="colony" placeholder="Colonia"/>
                }
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="state">
                    <i className="fas fa-map-marked"></i>
                </label>
                <input 
                    className="form__field__input" 
                    type="text" 
                    id="state" 
                    placeholder="Estado/Región"
                    defaultValue={
                        informationForm.informationAddress ?
                        informationForm.informationAddress.state :
                        null
                    }
                />
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="city">
                    <i className="fas fa-map-marked"></i>
                </label>
                <input 
                    className="form__field__input" 
                    type="text" 
                    id="city" 
                    placeholder="Ciudad"
                    defaultValue={
                        informationForm.informationAddress ?
                        informationForm.informationAddress.city :
                        null
                    }
                />
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="delegation">
                    <i className="fas fa-map-marked"></i>
                </label>
                <input 
                    className="form__field__input" 
                    type="text" 
                    id="delegation" 
                    placeholder="Delegación o Municipio"
                    defaultValue={
                        informationForm.informationAddress ?
                        informationForm.informationAddress.town :
                        null
                    }
                />
            </div>

            <div className="form__field">
                <label className="form__field__label" htmlFor="street">
                    <i className="fas fa-map-marked-alt"></i>
                </label>
                <input className="form__field__input" type="text" id="street" placeholder="Calle"/>
            </div>

            <div className="form__submit">
                <input className="form__field__submit" type="submit" value="Libreta de direcciones"/>
                <input className="form__field__submit" type="submit" value="Guardar"/>
            </div>

            <div className="form__verification">
                <input className="form__verification__input" type="checkbox" id="invoiceAddress"/>
                <label className="form__verification__label" htmlFor="invoiceAddress">Utilizar como dirección de facturación</label>
            </div>
        </form>
    );
}

export default InformationCheckoutForm;