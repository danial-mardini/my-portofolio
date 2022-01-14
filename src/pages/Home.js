import React from "react";
import './Home.css';
import {
    Carousel,
    CarouselProvider,

} from 'react-slim-carousel'
import 'react-slim-carousel/dist/index.css'


const images = [
    process.env.PUBLIC_URL + '/img/airport.png',
    process.env.PUBLIC_URL + '/img/food.png',
    process.env.PUBLIC_URL + '/img/glass-wash.png',
    process.env.PUBLIC_URL + '/img/barber.png',
];



const Home = () => {

    const slides = images.map((image) => (
        <img
            key={image}
            src={image}
            alt="img"
            style={{ width: "70%", height: 450, borderRadius: 20 }}
            draggable={false}
        />
    ));

    return (
        <div className="container">
            <div className="first-page">
                <div className="title">
                    <div className="btn">
                        <ul>
                            <li><a href="#my-work">works</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} />
                    </div>
                    <div className="social">

                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/danial-mardini-146811141/" target="_blank">
                                    <img src={process.env.PUBLIC_URL + '/img/Linkedin-icon-png.png'} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/danial-mardini" target="_blank">
                                    <img src={process.env.PUBLIC_URL + '/img/github-icon.png'} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="discrapiont">
                    <div className="name">
                        <h1>
                            Danial Mardini
                        </h1>
                    </div>
                    <div className="specialization">
                        <h1>
                            Front End Developer
                        </h1>
                    </div>
                    <div className="palce">
                        <h1>
                            Based In Dubai
                        </h1>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <div className="biography">
                            <h3>
                                Biography
                            </h3>
                            <br />
                            <span>
                                Worke For Mony and Develop For Love
                            </span>
                            <br />
                            <span>
                                I'm Danial , an Front End Developer Based In Dubai
                            </span>
                        </div>
                        <div className="contact">
                            <h3>
                                Contact
                            </h3>
                            <br />
                            <span>
                                Uae , Dubai
                            </span>
                            <br />
                            <span>
                                Danial.mardini.dm@gmail.com
                            </span>
                            <br />
                            <span>
                                +971527062698
                            </span>
                        </div>
                        <div className="services">
                            <h3>
                                Services
                            </h3>
                            <br />
                            <span>
                                Fornt End Developer
                            </span>
                            <br />
                            <span>
                                React js Deveoper
                            </span>

                        </div>
                    </div>
                    <div className="img">
                        <div className="my-img">
                            <img src={process.env.PUBLIC_URL + '/img/my.jpg'} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="experince">
                            <h3>
                                Years Of Experince
                            </h3>
                            <br />
                            <span>
                                5
                            </span>

                        </div>
                        <div className="satisfitation">
                            <h3>
                                satisfitation Clients
                            </h3>
                            <br />
                            <span>
                                100 %
                            </span>

                        </div>
                        <div className="Nationality">
                            <h3>
                                Nationality
                            </h3>
                            <br />
                            <span>
                                Syria
                            </span>


                        </div>
                    </div>

                </div>
            </div>
            <div className="betwin">

            </div>
            <div className="second-page">
                <div className="advantage">
                    <h1>
                        My Advanteg
                    </h1>
                </div>
                <div className="icons">

                    <div className="item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + '/img/html-icon.png'} />
                            <h3>
                                99%
                            </h3>
                        </div>
                        <div className="language-name">
                            <h3>HTML</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + '/img/css-icon.png'} />
                            <h3>
                                99%
                            </h3>
                        </div>
                        <div className="language-name">
                            <h3>Css</h3>
                        </div>
                    </div>


                    <div className="item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + '/img/js-icon.png'} />
                            <h3>
                                93%
                            </h3>
                        </div>
                        <div className="language-name">
                            <h3>Java Script</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + '/img/react-icon.png'} />
                            <h3>
                                90%
                            </h3>
                        </div>
                        <div className="language-name">
                            <h3>React Js</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon-wrapper">
                            <img src={process.env.PUBLIC_URL + '/img/bootstrap.png'} />
                            <h3>
                                94%
                            </h3>
                        </div>
                        <div className="language-name">
                            <h3>Bootstrap</h3>
                        </div>
                    </div>


                </div>

            </div>
            <div className="betwin">

            </div>
            <div className="third-page">
                <div className="head">
                    <h1>
                        Experince
                    </h1>
                </div>
                <div className="explain">
                    <div className="first-div">
                        <h2>
                            2017 - 2019
                        </h2>

                        <span>
                            Create applications in React Js
                        </span>
                        <span>
                            Create Responsive designs
                        </span>
                        <span>
                            Create well documented code.
                        </span>
                        <span>
                            Develop and manage fleet management system.
                        </span>
                        <span>
                            Develop and maintain UI for internal affair system
                            for employees
                        </span>


                    </div>
                    <div className="second-div">
                        <h2>
                            2019 - 2020
                        </h2>

                        <span>
                            Create applications in React Js
                        </span>
                        <span>
                            Create Responsive designs
                        </span>
                        <span>
                            Create well documented code.
                        </span>
                        <span>
                            Develop and manage fleet management system.
                        </span>
                    </div>
                    <div className="third-div">
                        <h2>
                            2020 - present
                            <br />
                            Freelance - Uae - Dubai


                        </h2>

                        <span>
                            Create applications in React Js
                        </span>
                        <span>
                            Create Responsive designs
                        </span>
                        <span>
                            Create well documented code.

                        </span>

                    </div>
                </div>

            </div>
            <div className="betwin">

            </div>
            <div className="forth-page">
                <div id="my-work" className="project">
                    <h2>
                        My Latest Project
                    </h2>
                </div>
                <CarouselProvider>
                    <Carousel
                        autoPlay={true}
                        autoSize={true}
                        centerMode={false}
                        draggable={true}
                        easing="ease-in-out"
                        edgeFriction={0.3}
                        gap={20}
                        infinite
                        initialSlide={0}
                        interval={3000}
                        orientation="horizontal"
                        playDirection="normal"
                        slidesToScroll={1}
                        slideSpeed={400}
                        threshold={0.2}
                        visibleSlides={1}>
                        {slides}
                    </Carousel>

                </CarouselProvider>

            </div>
        </div>
    )
}

export default Home;
