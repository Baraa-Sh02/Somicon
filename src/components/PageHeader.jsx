import React from 'react';
import Animated from './Animated';
import '../styles/components/PageHeader.css';

const PageHeader = ({ title, subtitle }) => (
    <div className="page-header">
        <div className="page-header__container">
            <Animated type="fadeInDown">
                <h1 className="page-header__title">{title}</h1>
            </Animated>
            {subtitle && (
                <Animated type="fadeInUp" delay={200}>
                    <p className="page-header__subtitle">{subtitle}</p>
                </Animated>
            )}
        </div>
    </div>
);

export default PageHeader; 