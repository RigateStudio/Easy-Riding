import './index.scss';
import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container id="form-container">
      <p id="intro">Erreur 404, il n'y a rien par ici {'\u00a0'}...</p>
    <Row >
      <Col></Col>
        <Col xs={6}>
          <Link to="/">
          <button> Retour à la page d'accueil</button>
          </Link>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
};

export default NotFound;
