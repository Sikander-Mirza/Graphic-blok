import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievements.css'; // Custom styles

const Achievements = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the component is visible
    });

    return (
        <div className="achievements-section" ref={ref}>
            <h2 className="text-center">ACHIEVEMENTS</h2>
            <div className="row text-center mt-4">
                <div className="col">
                    {inView && <CountUp end={1000} duration={3} />}+
                    <p className='text-white'>HAPPY CLIENTS</p>
                </div>
                <div className="col">
                    {inView && <CountUp end={350} duration={3} />}+
                    <p className='text-white'>WEBSITES LAUNCHED</p>
                </div>
                <div className="col">
                    {inView && <CountUp end={500} duration={3} />}+
                    <p className='text-white'>SOCIAL MEDIA CAMPAIGNS</p>
                </div>
                <div className="col">
                    {inView && <CountUp end={750} duration={3} />}+
                    <p className='text-white'>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
