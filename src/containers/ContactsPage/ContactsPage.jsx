import React from "react";
import './ContactsPage.css'

const ContactsPage = () => {
    return (
        <div className="ContactsPage-background">
            <div className="ContactsPage-flex-column">
                <h1 className="ContactsPage-title">Contacts</h1>
                <div className="ContactsPage-white-column">
                    <p className="bold-upper-text">Lorem ipsum dolor</p>
                    <div className="ContactsPage-link-row">
                        <div className="phone-icon"></div>
                        <a href="tel:855254254254" className="contacts-link">(+55) 254. 254. 254</a>
                    </div>
                    <div className="ContactsPage-link-row">
                        <div className="mail-icon"></div>
                        <a href="mailto:mail@mailmailmail.ru"
                            className="contacts-link">mail@mailmailmail.ru</a>
                    </div>
                    <div className="ContactsPage-link-row">
                        <div className="location-icon"></div>
                        <a href="http://maps.google.com/?q=17Petrovka,Moscow,Russia"
                            className="contacts-link">
                            17, Petrovka, Moscow, Russia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;