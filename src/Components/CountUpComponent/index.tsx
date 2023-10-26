import React, { useState, useEffect } from 'react';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div className='count-up'>
            <div className='container'>
                <div className='site-counter' ref={ref}>
                    <div className='counter-img'>
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <div className='counter-num'>
                        {isVisible && <strong className='numbers'><CountUp start={0} end={220} duration={3} /></strong>}
                        <span>Projects Completed</span>
                    </div>
                </div>
                <div className='site-counter' ref={ref}>
                    <div className='counter-img'>
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <div className='counter-num'>
                        {isVisible && <strong className='numbers'><CountUp start={0} end={900} duration={3} /></strong>}
                        <span>Projects Completed</span>
                    </div>
                </div>
                <div className='site-counter' ref={ref}>
                    <div className='counter-img'>
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <div className='counter-num'>
                        {isVisible && <strong className='numbers'><CountUp start={0} end={80} duration={3} /></strong>}
                        <span>Projects Completed</span>
                    </div>
                </div>
                <div className='site-counter' ref={ref}>
                    <div className='counter-img'>
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <div className='counter-num'>
                        {isVisible && <strong className='numbers'><CountUp start={0} end={100} duration={3} />%</strong>}
                        <span>Projects Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountUpComponent;
