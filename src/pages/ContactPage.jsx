import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Animated from '../components/Animated';
import PageHeader from '../components/PageHeader';
import '../styles/components/ContactPage.css';

const ContactPage = ({ data }) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        alert("Thank you for your message!");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <>
            <PageHeader title={data.title} subtitle={data.subtitle} />
            <div className="contact">
                <div className="contact__container">
                    <div className="contact__grid">
                        <Animated type="slideInLeft">
                             <div className="contact__card">
                                 <h3 className="contact__title">{data.form.send}</h3>
                                 <form onSubmit={handleSubmit} className="contact__form">
                                     <input 
                                         type="text" 
                                         name="name" 
                                         placeholder={data.form.name} 
                                         value={formState.name} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="contact__input"
                                     />
                                     <input 
                                         type="email" 
                                         name="email" 
                                         placeholder={data.form.email} 
                                         value={formState.email} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="contact__input"
                                     />
                                     <textarea 
                                         name="message" 
                                         placeholder={data.form.message} 
                                         rows="6" 
                                         value={formState.message} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="contact__textarea"
                                     ></textarea>
                                     <button 
                                         type="submit" 
                                         className="contact__submit"
                                     >
                                         {data.form.send}
                                     </button>
                                 </form>
                             </div>
                        </Animated>
                        <Animated type="slideInRight" className="contact__info">
                            <h3 className="contact__info-title">{data.info.title}</h3>
                            {data.info.branches.map(branch => (
                                <div key={branch.name} className="contact__branch">
                                    <div className="mt-2">
                                        <branch.icon className="h-10 w-10 text-red-600"/>
                                    </div>
                                    <div>
                                        <h4 className="contact__branch-name">{branch.name}</h4>
                                        <div className="contact__branch-lines">
                                            <p className="flex items-center gap-3"><MapPin size={20}/><span>{branch.address}</span></p>
                                            <p className="flex items-center gap-3"><Phone size={20}/><a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">{branch.phone}</a></p>
                                            <p className="flex items-center gap-3"><Mail size={20}/><a href={`mailto:${branch.email}`} className="hover:text-red-600 transition-colors">{branch.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Animated>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;

