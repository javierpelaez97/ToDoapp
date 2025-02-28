import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Desktop from '../../public/Images/CleanDesktop.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Login(){

    

    const{register, handleSubmit} = useForm();




    

        


      

    

    return(
        <>
        
        <Container className='pt-5'>
            <Row>
                <Col sm={4}>
                    <Image src={Desktop} height={650} width={500}></Image>
                </Col>
                <Col sm={7} className='bg-body-secondary'>
                
                    <Form onSubmit={handleSubmit(doLogin)} className='p-4'>
                    <h1>Iniciar sesión</h1>
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