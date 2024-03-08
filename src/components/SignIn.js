import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import "./SignIn.scss";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setError(null);
    setSuccess(false);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formdata", formData);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post("backend_url", formData);
      console.log("Login Success ", response.data);
      setSuccess(true);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log("error : ", error);
      //   setError("Failed to register. Please try again.");
      setError("Failed to Login. Please try again. " + error.message);
    }
  };
  return (
    <Container
      style={{ minHeight: "100vh", minWidth: "300px", maxWidth: "600px" }}
    >
      <div>
        <h1 className="text-center mb-4 mt-3">Sign In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && (
          <Alert variant="success">
            Registration successful. Redirecting...to Dashboard
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your password"
              name={"password"}
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="btn btn-primary"
            className="mt-3 w-100"
          >
            Login
          </Button>
          {/* <h3 className="mt-4">Email: {formData.email}</h3>
      <h3>Password: {formData.password}</h3> */}
        </Form>
      </div>
    </Container>
  );
}

export default SignIn;
