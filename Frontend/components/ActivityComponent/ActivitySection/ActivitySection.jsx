import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActivitySection.css"
import { Carousel, Button, Row, Col } from "react-bootstrap";


const ActivitySection = () => {
  const imageArray = [
    { id: 1, text: "Фото 1", url: "https://via.placeholder.com/300x200?text=Фото+1" },
    { id: 2, text: "Фото 2", url: "https://via.placeholder.com/300x200?text=Фото+2" },
    { id: 3, text: "Фото 3", url: "https://via.placeholder.com/300x200?text=Фото+3" },
    { id: 4, text: "Фото 4", url: "https://via.placeholder.com/300x200?text=Фото+4" },
    { id: 5, text: "Фото 5", url: "https://via.placeholder.com/300x200?text=Фото+5" },
    { id: 6, text: "Фото 6", url: "https://via.placeholder.com/300x200?text=Фото+6" },
  ];

  // Grouping images into sets of 3
  const groupedImages = [];
  for (let i = 0; i < imageArray.length; i += 3) {
    groupedImages.push(imageArray.slice(i, i + 3));
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-md-start">
              <h1 className="fw-bold">Шубка по вашему хотению</h1>
              <p className="text-muted">
                Индивидуальный пошив шуб на заказ в Москве и Московской области
              </p>
              <Button variant="dark" className="me-2">
                Перейти в каталог
              </Button>
            </div>
            <div className="col-md-4">
              <div className="photo-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Галерея наших работ</h2>
          <Carousel className="mt-4" indicators={false} controls={true} interval={3000}>
            {groupedImages.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {group.map((image) => (
                    <Col md={4} key={image.id}>
                      <div
                        className="bg-secondary text-white d-flex justify-content-center align-items-center"
                        style={{
                          height: "200px",
                          margin: "10px 0",
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                      >
                        <img
                          src={image.url}
                          alt={image.text}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Buttons */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="outline-dark" className="me-2">
              Жмите сюда
            </Button>
            <Button variant="outline-dark" className="me-2">
              Подать заявку
            </Button>
            <Button variant="outline-dark">Написать консультанту</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitySection;
