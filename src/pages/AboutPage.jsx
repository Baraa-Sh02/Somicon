import React from 'react';
import Animated from '../components/Animated';
import PageHeader from '../components/PageHeader';
import '../styles/components/AboutPage.css';

const AboutPage = ({ data }) => (
    <>
        <PageHeader title={data.title} />
        <div className="section-spaced">
            <div className="container-responsive">
                <div className="about__grid">
                    <Animated type="slideInLeft" className="about__copy">
                        <p className="about__copy-para">{data.content1}</p>
                        <p className="about__copy-para">{data.content2}</p>
                    </Animated>
                    <Animated type="slideInRight">
                        <div className="about__stats-grid">
                            {data.stats.map((stat, index) => (
                                <div key={stat.label} className="about__stat-card">
                                    <span className="about__stat-value">{stat.value}</span>
                                    <p className="about__stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Animated>
                </div>
            </div>
        </div>

        <div className="about__alt-section">
            <div className="container-responsive">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <Animated type="slideInLeft">
                        <img src={data.chairmanMessage.image} alt={data.chairmanMessage.name} className="about__chair-image" />
                    </Animated>
                    <Animated type="slideInRight" className="space-y-6">
                        <h2 className="about__title">{data.chairmanMessage.title}</h2>
                        <p className="about__desc">{data.chairmanMessage.message}</p>
                        <div className="pt-4">
                            <p className="about__person-name">{data.chairmanMessage.name}</p>
                            <p className="about__person-role">{data.chairmanMessage.role}</p>
                        </div>
                    </Animated>
                </div>
            </div>
        </div>

        <div className="section-spaced">
            <div className="container-responsive">
                <Animated type="fadeInUp" className="text-center mb-20">
                    <h2 className="about__mv-title">{data.missionVision.title}</h2>
                </Animated>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <Animated type="fadeInUp" delay={100}>
                         <div className="about__mv-card">
                            <data.missionVision.mission.icon className="h-12 w-12 text-red-600 flex-shrink-0 mt-2"/>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-stone-800 dark:text-white">{data.missionVision.mission.title}</h3>
                                <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">{data.missionVision.mission.description}</p>
                            </div>
                        </div>
                    </Animated>
                    <Animated type="fadeInUp" delay={200}>
                         <div className="about__mv-card">
                            <data.missionVision.vision.icon className="h-12 w-12 text-red-600 flex-shrink-0 mt-2"/>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-stone-800 dark:text-white">{data.missionVision.vision.title}</h3>
                                <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">{data.missionVision.vision.description}</p>
                            </div>
                        </div>
                    </Animated>
                </div>
            </div>
        </div>
    </>
);

export default AboutPage;

