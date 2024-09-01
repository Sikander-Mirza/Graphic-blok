import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PhoneNumberModal = ({ show, handleClose, handleSend }) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Country codes embedded directly in the file
  const countryCodes = [
    { name: "United States", dial_code: "+1", code: "US" },
    { name: "United Kingdom", dial_code: "+44", code: "GB" },
    { name: "India", dial_code: "+91", code: "IN" },
    { name: "Pakistan", dial_code: "+92", code: "PK" },
    { name: "Afghanistan", dial_code: "+93", code: "AF" },
    { name: "Albania", dial_code: "+355", code: "AL" },
    { name: "Algeria", dial_code: "+213", code: "DZ" },
    { name: "Andorra", dial_code: "+376", code: "AD" },
    { name: "Angola", dial_code: "+244", code: "AO" },
    { name: "Argentina", dial_code: "+54", code: "AR" },
    { name: "Australia", dial_code: "+61", code: "AU" },
    { name: "Austria", dial_code: "+43", code: "AT" },
    { name: "Belgium", dial_code: "+32", code: "BE" },
    { name: "Brazil", dial_code: "+55", code: "BR" },
    { name: "Canada", dial_code: "+1", code: "CA" },
    { name: "China", dial_code: "+86", code: "CN" },
    { name: "Denmark", dial_code: "+45", code: "DK" },
    { name: "France", dial_code: "+33", code: "FR" },
    { name: "Germany", dial_code: "+49", code: "DE" },
    { name: "Italy", dial_code: "+39", code: "IT" },
    { name: "Japan", dial_code: "+81", code: "JP" },
    { name: "Mexico", dial_code: "+52", code: "MX" },
    { name: "Netherlands", dial_code: "+31", code: "NL" },
    { name: "Russia", dial_code: "+7", code: "RU" },
    { name: "South Africa", dial_code: "+27", code: "ZA" },
    { name: "Spain", dial_code: "+34", code: "ES" },
    { name: "Sweden", dial_code: "+46", code: "SE" },
    { name: "Switzerland", dial_code: "+41", code: "CH" },
    { name: "Turkey", dial_code: "+90", code: "TR" },
    { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
    { name: "Vietnam", dial_code: "+84", code: "VN" },
    { name: "Zambia", dial_code: "+260", code: "ZM" },
    { name: "Zimbabwe", dial_code: "+263", code: "ZW" },
    // Add more country codes as needed...
  ];

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValid(/^\d+$/.test(value)); // Basic validation to allow only numbers
  };

  const handleSubmit = () => {
    if (isValid && phoneNumber) {
      handleSend(`${countryCode}${phoneNumber}`);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Your Phone Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Country Code</Form.Label>
            <InputGroup>
              <Form.Control as="select" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.dial_code}>
                    {country.dial_code} ({country.name})
                  </option>
                ))}
              </Form.Control>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>{countryCode}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                isInvalid={!isValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={!phoneNumber || !isValid}>
          Send Message
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PhoneNumberModal;
