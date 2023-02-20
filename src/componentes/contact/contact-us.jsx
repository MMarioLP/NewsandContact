import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../estilos/contact/contact-us.css';

export function Contact() {
  return (
    <div className='Formulario'>
    <strong> <h1 id='titulo'> Contact Us</h1></strong>
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="number" placeholder="Number Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className="form-select" aria-label="Default select example">
                <option selected >Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
        </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
      </Form.Group>
   

      <Button variant="primary" type="submit">

        Send
      </Button>
      
    </Form>
    </div>
    </div>
  );


}
export function Mapa(){

  return(
    <div className='map'>
        <img className='imagen-mapa' 
      src={require('../../imagenes/Mapa.png')}
      alt='Optmen' />
    </div>
    );
   
}



