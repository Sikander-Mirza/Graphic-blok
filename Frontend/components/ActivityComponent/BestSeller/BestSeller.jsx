import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomSection = () => {
  return (
    <div>
      {/* Statistics Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">Наше ателье в цифрах</h2>
          <Row className="text-center">
            {Array.from({ length: 5 }, (_, index) => (
              <Col sm={6} md={4} lg={2} key={index} className="mb-4">
                <div
                  className="bg-secondary text-white rounded-circle mx-auto d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <span>Иконка</span>
                </div>
                <p className="mt-2">Описание цифры {index + 1}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gift Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <h3 className="fw-bold">Дарим вам подарок</h3>
              <p className="text-muted">
                Здесь описание вашего подарка или акции. Этот текст будет
                привлекать внимание клиента и содержать всю важную информацию о
                предложении.
              </p>
              <Button variant="dark">Подробнее</Button>
            </Col>
            <Col md={6}>
              <div
                className="bg-secondary text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "8px",
                }}
              >
                <span>Фото</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ready Solutions Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">
            Готовые решения по ценам 2016 года
          </h2>
          <Row>
            {Array.from({ length: 4 }, (_, index) => (
              <Col sm={6} md={3} key={index} className="mb-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    alt={`Фото ${index + 1}`}
                  />
                  <Card.Body>
                    <Card.Title>Фото {index + 1}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Button variant="dark">Посмотреть все примеры</Button>
          </div>
        </Container>
      </section>

      {/* Footer-Like Section */}
      <section className="py-4">
        <Container>
          <Row className="text-center">
            {Array.from({ length: 4 }, (_, index) => (
              <Col sm={6} md={3} key={index} className="mb-3">
                <p>Текст {index + 1}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CustomSection;
