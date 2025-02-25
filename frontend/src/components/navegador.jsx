import Container from 'react-bootstrap/esm/Container'

import NavLink from 'react-bootstrap/esm/NavLink'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function  Navegador(){
    return(
        <>
            <Navbar bg='dark' data-bs-theme="dark">
                <Container>
                
                    <Navbar.Brand href='/' >Home</Navbar.Brand>
                        <Nav className='me-auto'>
                            <NavLink href='/misTareas'> Mis Tareas</NavLink>
                            <NavLink href='/login' >Login</NavLink>
                            <NavLink href='/register'> Registro</NavLink>
                            <NavLink href='/area' >Mi perfil</NavLink>
                        </Nav>
                
                </Container>

            </Navbar>
           
        </>
    )

}

