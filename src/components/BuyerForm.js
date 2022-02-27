import { useState } from "react";
import { UseCartContext } from "../context/CartContext";

export default function BuyerForm(){
    const {SetBuyerData} = UseCartContext();
    const [buyerForm, setBuyerForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (event) =>{
        setBuyerForm({
            ...buyerForm,
            [event.target.name]: event.target.value
        });
    }
    return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    value={buyerForm.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange}
                    value={buyerForm.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefono:</label>
                <input 
                    type="text" 
                    name="phone" 
                    onChange={handleChange}
                    value={buyerForm.phone}
                />
            </div>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => SetBuyerData(buyerForm)}
            >Aceptar</button>
        </form>
    )
}