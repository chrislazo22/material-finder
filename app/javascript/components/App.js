import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import Body from './Body'

export default function App() {
  return(
    <div>
			<Header/>
      <Container>
			  <Body />
      </Container>
    </div>
  )
}
