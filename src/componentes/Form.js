import { useState, useContext, useEffect } from 'react'
import { Context } from '../store/context';
import { Link, useParams } from 'react-router-dom'




export const Form = () => {


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const contact = (store.contacts.find((c) => c.id === parseInt(id)));

            if (contact) {

                setValues({
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address,
                })
            }
        }
    }, [])

    // console.log(id);

    const { actions, store } = useContext(Context)
    const [values, setValues] = useState({

        name: "",
        email: "",
        phone: "",
        address: "",


    });
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (id) {
            handleUpdate(id);
        }
        else {

            actions.createContact(setValues, values)
        }


    }

    const handleUpdate = (i) => {
        const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            address: values.address,
        };
        actions.editContact(data, i);


    }
    return (

        <div className='container'>


            <h1> Add New Contact</h1>

            <form onSubmit={handleSubmit} className="row g-3 needs-validation">
                <div className="col-md-12 position-relative">
                    <label htmlFor="validationTooltipUsername" className="form-label">Name</label>
                    <div className="input-group has-validation">
                        <input type="text" name="name" value={values.name} className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required onChange={handleInputChange} />
                    </div>
                </div>
                <div className="col-md-12 ">
                    <label htmlFor="validationTooltipUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="email" name="email" value={values.email} className="form-control" id="email" aria-describedby="validationTooltipUsernamePrepend" required onChange={handleInputChange} />
                    </div>
                </div>
                <div className="col-md-12 ">
                    <label htmlFor="validationTooltipUsername" className="form-label">Phone</label>
                    <div className="input-group has-validation">
                        <input type="tel" name="phone" value={values.phone} className="form-control" id="tel" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationTooltip03" className="form-label">Address</label>
                    <input type="text" name="address" value={values.address} className="form-control" id="email" required onChange={handleInputChange} />
                    <div className="invalid-tooltip">

                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="subt" onClick={handleSubmit}>save</button>
                </div>

                <Link to="/">or get back to contacts</Link>
            </form>
        </div>


    )
}
export default Form