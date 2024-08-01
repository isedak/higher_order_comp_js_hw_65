import React from "react";
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="AboutPage-background">
            <div className="AboutPage-flex-column">
                <h1 className="AboutPage-title">About Us</h1>
                <div className="AboutPage-white-column">
                    <p className="AboutPage-lit">Lorem ipsum dolor</p>
                    <p className="AboutPage-body-text">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nihil expedita molestias sint odio ullam debitis,
                        officiis dignissimos commodi quam tempora dolor praesentium repellendus
                        natus nulla delectus possimus perspiciatis, fuga dolores?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam officiis iure cum facilis
                        id, itaque architecto voluptates aperiam necessitatibus in minima
                        consectetur alias, sit odit quia quisquam nulla maxime ipsum.</p>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;