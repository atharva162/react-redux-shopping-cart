import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Navbar from './Navbar/Navbar';

function CheckoutPage() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        contactNumber: '',
        address: ''
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')).name;
        setFormValue({...formValue, name: user })
        const useremail = JSON.parse(localStorage.getItem('user')).email;
        setFormValue({...formValue, email: useremail })
        const phone = JSON.parse(localStorage.getItem('user')).contactNumber;
        setFormValue({...formValue, contactNumber: phone })
     }, []) 
    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault();
        window.location = "/";
    }

    return (
        <>
        <Navbar/>
        <Card className="container">
           <Card.Body>
           <h2 className="text-center mb-4">Check your order details and enter your shipping address</h2>
           <Form onSubmit={handleSubmit}>
           <Form.Group id="name">
            <Form.Label>
                Name
            </Form.Label>
            <Form.Control type="text" name="name" required value={formValue.name} onChange={handleChange}/>
            </Form.Group>       
            <Form.Group id="contactNumber">
            <Form.Label>
            Contact Number
            </Form.Label>
            <Form.Control type="number" name="contactNumber" required value={formValue.contactNumber} onChange={handleChange}/>
            </Form.Group>      
           <Form.Group id="email">
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" name="email" required value={formValue.email} onChange={handleChange}/>
            </Form.Group> 
            <Form.Group id="email">
            <Form.Label>
                Address
            </Form.Label>
            <Form.Control type="text" name="address" required value={formValue.address} onChange={handleChange}/>
            </Form.Group>    
            <Button className="w-100" type="submit">Confirm Order</Button>
           </Form>
           </Card.Body>
       </Card>
      
        </>
    )
}

export default CheckoutPage
