import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Desktop from '../../public/Images/CleanDesktop.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(){


    const{register, handleSubmit} = useForm();



    const [user, setUser] = useState(null)


      function doLogin(datos){
        
        axios.post("http://localhost:3000/usuarios", datos)
        .then((response) =>{
            console.log(response.data)
            setUser({email: datos.email, password: datos.password})
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
        
      }

    

    return(
        <>
        
        <Container className='pt-5'>
            <Row>
                <Col sm={5}>
                    <Image src={Desktop} height={650} width={500}></Image>
                </Col>
                <Col sm={7}>
                    <Form onSubmit={handleSubmit(doLogin)}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type='email' placeholder='example@correo.com' {...register('email')}></Form.Control>
                            <Form.Text className='text-muted'>
                                No compartas tu email con nadie mas 
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formbasicPassword'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Contraseña' {...register('password')}></Form.Control>
                            
                        </Form.Group>
                        <Button variant="secondary" type='submit' >Enviar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}