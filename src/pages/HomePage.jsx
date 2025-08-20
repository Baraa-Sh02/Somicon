import React from 'react';
import { ChevronsDown, ArrowRight } from 'lucide-react';
import Animated from '../components/Animated';
import '../styles/pages/HomePage.css';

const HomePage = ({ data, handleNavClick }) => {
    return (
    <>
        <section className="hero">
            <div className="hero__overlay"></div>
            <div 
                className="hero__bg"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`
                }}
            ></div>
            <div className="hero__content">
                <Animated type="fadeInDown">
                    <h1 className="hero__title">{data.home.hero.title}</h1>
                </Animated>
                <Animated type="fadeInUp" delay={300}>
                    <p className="hero__subtitle">{data.home.hero.subtitle}</p>
                </Animated>
                <Animated type="zoomIn" delay={600}>
                    <button 
                        onClick={() => handleNavClick(2)} 
                        className="hero__cta"
                    >
                        {data.home.hero.cta}
                        <ArrowRight className={`${data.dir === 'ltr' ? 'ms-3' : 'me-3'} h-6 w-6`} />
                    </button>
                </Animated>
            </div>
            <div className="hero__chevron">
                <ChevronsDown size={40} className="text-white" />
            </div>
        </section>

        <div className="clients-section">
             <div className="container mx-auto px-4">
                <Animated type="fadeInUp">
                    <h3 className="clients-title">{data.home.clients.title}</h3>
                </Animated>
                <div className="logos-track group">
                     <div className="logos-track__inner">
                         {data.home.clients.logos.concat(data.home.clients.logos).map((logo, index) => (
                             <div key={index} className="logos-track__item">
                                 <img 
                                     src={logo} 
                                     alt={`Client logo ${index + 1}`} 
                                     className="logos-track__img" 
                                     onError={(e) => {
                                         e.target.style.display = 'none';
                                     }}
                                 />
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </div>
        
        <section className="cta-banner" style={{backgroundImage: `linear-gradient(rgba(219, 39, 48, 0.8), rgba(185, 28, 28, 0.9)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <div className="cta-banner__container">
                <Animated type="fadeInUp">
                    <h2 className="cta-banner__title">{data.home.ctaBanner.title}</h2>
                </Animated>
                <Animated type="fadeInUp" delay={200}>
                    <p className="cta-banner__subtitle">{data.home.ctaBanner.subtitle}</p>
                </Animated>
                <Animated type="zoomIn" delay={400}>
                    <button 
                        onClick={() => handleNavClick(4)} 
                        className="cta-banner__button"
                    >
                        {data.home.ctaBanner.cta}
                    </button>
                </Animated>
            </div>
        </section>
    </>
    );
};

export default HomePage;

