import React from 'react';
import Animated from '../components/Animated';
import PageHeader from '../components/PageHeader';
import '../styles/components/ProductsPage.css';

const ProductsPage = ({ data }) => (
    <>
        <PageHeader title={data.title} subtitle={data.subtitle} />
        <div className="products">
            <div className="products__container">
                <div className="products__grid">
                    {data.categories.map((cat, index) => (
                         <Animated key={cat.name} type="fadeInUp" delay={index * 200}>
                             <div className="product-card group">
                                 <div className="product-card__image-wrapper">
                                     <img src={cat.image} alt={cat.name} className="product-card__image"/>
                                     <div className="product-card__image-overlay"></div>
                                     <div className="absolute bottom-0 left-0 p-8">
                                         <h3 className="text-5xl font-bold text-white text-shadow-2xl mb-2">{cat.name}</h3>
                                         <div className="product-card__divider"></div>
                                     </div>
                                 </div>
                                 <div className="product-card__body">
                                     <p className="product-card__desc">{cat.description}</p>
                                     <ul className="product-card__list">
                                         {cat.items.map((item) => (
                                             <li key={item} className="product-card__list-item">
                                                 <div className="product-card__dot"></div>
                                                 <span className="font-medium">{item}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             </div>
                         </Animated>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default ProductsPage;

