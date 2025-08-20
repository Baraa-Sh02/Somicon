import React from 'react';
import PageHeader from '../components/PageHeader';
import Animated from '../components/Animated';
import '../styles/components/ServicesPage.css';

const ServicesPage = ({ handleNavClick, data, dir }) => {
    const services = [
        {
            title: data.waterAnalysis.title,
            description: data.waterAnalysis.description,
            imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
            pageIndex: 5
        },
        {
            title: data.antiscalant.title,
            description: data.antiscalant.description,
            imageUrl: '/assets/chemical-indust.jpg',
            pageIndex: 6
        },
        {
            title: data.precipitationTest.title,
            description: data.precipitationTest.description,
            imageUrl: '/assets/laboratory.jpg',
            pageIndex: 7
        },
        {
            title: data.membraneAutopsy.title,
            description: data.membraneAutopsy.description,
            imageUrl: '/assets/industry.jpg',
            pageIndex: 8
        },
        {
            title: data.cleaningTests.title,
            description: data.cleaningTests.description,
            imageUrl: '/assets/water-treatment.jpg',
            pageIndex: 9
        },
        {
            title: data.plantInspection.title,
            description: data.plantInspection.description,
            imageUrl: '/assets/chemist.jpg',
            pageIndex: 10
        }
    ];

    return (
        <div className={`services`} dir={dir}>
            <PageHeader
                title={data.title}
                subtitle={data.subtitle}
            />
            <div className="services__container">
                <div className="services__grid">
                    {services.map((service, index) => (
                        <Animated key={service.title} delay={index * 200} type="fadeInUp">
                            <div 
                                className="service-card"
                                onClick={() => handleNavClick(service.pageIndex)}
                            >
                                <div className="service-card__image-wrapper">
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="service-card__image"
                                    />
                                    <div className="service-card__overlay"></div>
                                </div>
                                <div className="service-card__body">
                                    <h3 className="service-card__title">
                                        {service.title}
                                    </h3>
                                    <p className="service-card__desc">
                                        {service.description}
                                    </p>
                                    <div className="service-card__cta">
                                        {data.learnMore}
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;

