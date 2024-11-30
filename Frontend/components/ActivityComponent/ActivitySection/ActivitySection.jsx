import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ActivitySection.css"
const ActivitySection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-md-start">
              <h1 className="fw-bold">
                Шубка по вашему хотению
              </h1>
              <p className="text-muted">
                Индивидуальный пошив шуб на заказ в Москве и Московской области
              </p>
              <button className="btn btn-dark me-2">Перейти в каталог</button>
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
          <div className="row justify-content-center py-3">
            {/* Large central image */}
            <div className="col-12 col-md-4 mb-3">
              <div className="photo-placeholder-large bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
            {/* Smaller surrounding images */}
            <div className="col-6 col-md-2 mb-3">
              <div className="photo-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <div className="photo-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <div className="photo-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <div className="photo-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
                <span>Фото</span>
              </div>
            </div>
          </div>

          {/* Small image grid */}
          <div className="row text-center py-4">
            {Array(7)
              .fill("")
              .map((_, index) => (
                <div key={index} className="col-3 col-md-1 mb-3">
                  <div className="photo-placeholder-small bg-secondary text-white d-flex justify-content-center align-items-center">
                    <span>Фото</span>
                  </div>
                </div>
              ))}
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-dark me-2">Жмите сюда</button>
            <button className="btn btn-outline-dark me-2">Подать заявку</button>
            <button className="btn btn-outline-dark">Написать консультанту</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitySection;
