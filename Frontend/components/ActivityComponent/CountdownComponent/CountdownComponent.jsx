import React, { useState, useEffect } from 'react';
import './CountdownComponent.css'; // For custom styling

const CountdownComponent = () => {
  const targetDate = new Date(new Date().getTime() + 1 * 60 * 60 * 1000); // 1 hour from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Countdown has finished
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      // Debugging: Log time left every second
      console.log("Time Left: ", updatedTimeLeft);

      // Check if time is up
      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        setIsCompleted(true);
        clearInterval(timer); // Stop the timer
      }
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);

  if (isCompleted) {
    return <span>Deal has ended!</span>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 text-left">
          <h2 className="mb-4">Deal Of The Day</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="countdown-container d-flex align-items-center justify-content-between">
            <div className="time-box">
              <span className="time">{timeLeft.days || 0}</span>
              <span className="label">Days</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.hours || 0}</span>
              <span className="label">Hours</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.minutes || 0}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.seconds || 0}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
          <button className='btn btn-secondary'>contact us</button>
        </div>
        <div className="col-lg-6">
          <div className="image-placeholder bg-light"></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
