import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export default function Body() {
  return(
		<div id='material-form'>
			<Form>
				<Form.Group controlId="formMaterialFinder">
					<Form.Control type="material" placeholder="Enter Material Information" />
				</Form.Group>
				<Button variant='primary'>Submit</Button>
			</Form>
		</div>
  )
}
