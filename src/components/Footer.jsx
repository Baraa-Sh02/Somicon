import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import '../styles/components/Footer.css';

const Footer = ({ data }) => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__grid">
                <div className="footer__brand">
                    <h3 className="footer__brand-title">{data.companyName}</h3>
                    <p className="footer__brand-subtitle">{data.subtitle}</p>
                </div>
                {data.contact.branches.slice(0, 3).map(branch => (
                    <div key={branch.name}>
                        <h4 className="footer__branch-title">{branch.name}</h4>
                        <ul className="footer__list">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>{branch.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="mt-1 flex-shrink-0" />
                                <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">{branch.phone}</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} {data.companyName}. {data.rights}</p>
            </div>
        </div>
    </footer>
);

export default Footer; 