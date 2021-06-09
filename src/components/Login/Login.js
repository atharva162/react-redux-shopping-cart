import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

function Login() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        contactNumber: ''
    })

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        if(formValue.password < 8){
            return setError('Passwords must be greater than 8 characters')
        }
        if(formValue.contactNumber < 10){
            return setError('Contact number must be a 10 digit number')
        }
        try {
            setError('');
            setLoading(true);
            localStorage.setItem('user', JSON.stringify(formValue));
            window.location ="/";
        } catch (error) {
            setError('Failed to log in, please try again')
        }
        setLoading(false);
    }

    return (
        <>
        <Card className="container">
           <Card.Body>
           <h2 className="text-center mb-4">Welcome to React project</h2>
           <h2 className="text-center mb-4">Login In to continue</h2>
           {error && <Alert variant="danger">{error}</Alert>}
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
            <Form.Group id="password">
            <Form.Label>
             Password
            </Form.Label>
            <Form.Control type="password" name="password" required value={formValue.password} onChange={handleChange}/>
            </Form.Group>
            <Button className="w-100" type="submit" disabled={loading}>Log In</Button>
           </Form>
           </Card.Body>
       </Card>
      
        </>
    )
}

export default Login