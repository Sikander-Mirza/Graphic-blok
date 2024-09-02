import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievements.css'; // Import your custom styles

const Achievements = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the component is visible
    });

    // Helper array to dynamically generate the achievements
    const achievementsData = [
        { end: 1000, label: 'HAPPY CLIENTS' },
        { end: 350, label: 'WEBSITES LAUNCHED' },
        { end: 500, label: 'SOCIAL MEDIA CAMPAIGNS' },
        { end: 750, label: 'PROJECTS COMPLETED' }
    ];

    return (
        <div className="achievements-section" ref={ref}>
            <h2 className="text-center">ACHIEVEMENTS</h2>
            <div className="d-flex text-center container mt-5">
                {achievementsData.map((achievement, index) => (
                    <div className="col" key={index}>
                        {inView && <CountUp end={achievement.end} duration={3} />}+
                        <p className="text-white">{achievement.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
