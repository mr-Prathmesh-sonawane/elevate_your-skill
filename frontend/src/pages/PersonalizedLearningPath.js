import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Card from '../components/Card';

function PersonalizedPath() {
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <Link to="/recommend-channels" style={{textDecoration:"none"}}><Card image="YouTube.png" title="YouTube Channel Recommendations"/></Link>
                <Link to="/underprogress" style={{textDecoration:"none"}}><Card image="Google.png" title="Text Resource Recommendations"/></Link>
                <Link to="/underprogress" style={{textDecoration:"none"}}><Card image="Courses.png" title="Course Recommendations"/></Link>
            </div>
        </div>
    );
}

export default PersonalizedPath;