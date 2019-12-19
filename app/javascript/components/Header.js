import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
  return(
    <div>
			<Navbar bg="dark" variant="dark">
      	<Container>
					<Navbar.Brand>Material Finder</Navbar.Brand>
      	</Container>
			</Navbar>
    </div>
  )
}
