import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Contact = () => {
	return (
		<Container className='d-flex align-items-center justify-content-center'>
			<Card style={{ width: "600px", marginTop: "50px" }}>
				<Container>
					<Form style={{ padding: "10px" }}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Your Full Name:</Form.Label>
							<Form.Control type='email' placeholder='Enter your name...' />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Your Email:</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter your email address...'
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Subject</Form.Label>
							<textarea
								className='form-control rounded-0'
								id='exampleFormControlTextarea1'
								rows='5'
							></textarea>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Container>
			</Card>
		</Container>
	);
};

export default Contact;
