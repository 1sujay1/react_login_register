import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post("backend_url", formData);
      console.log("Register Success ", response.data);
      if (formData.email.includes("sujay") || response.data) {
        setSuccess(true);
        setFormData({ name: "", email: "", password: "", c_password: "" });
      } else {
        setError("Failed to register. Please try again. ");
      }
    } catch (error) {
      console.log("error : ", error);
      //   setError("Failed to register. Please try again.");
      setError("Failed to register. Please try again. " + error.message);
    }
  };
  const handleChange = (e) => {
    setError(null);
    setSuccess(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container
      // className="justify-content-center align-items-center"
      style={{ minHeight: "100vh", minWidth: "300px", maxWidth: "600px" }}
    >
      <div>
        <h1 className="text-center mb-4 mt-3">Sign Up</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && (
          <Alert variant="success">
            Registration successful. Redirecting...to Dashboard
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              value={formData.c_password}
              name="c_password"
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Button type="submit" varient="primary" className="w-100">
            Register
          </Button>
        </Form>
        <br></br>
      </div>
    </Container>
  );
}

export default SignUp;
