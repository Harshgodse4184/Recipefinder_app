import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import img1 from '../../../public/Home/banner1.jpg';
import img2 from '../../../public/Home/banner2.jpg';
import img3 from '../../../public/Home/banner3.jpg';
function NewRecipeSlider() {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6 margine_global" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-start">
                        <img src={img1} style={{ width: "100%", height: "80vh" }} alt="" />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Discover Delicious Recipes with Our Recipe Finder WebApp</h1>
                                <p className="opacity-75">ur Recipe Finder WebApp is your go-to tool for exploring a wide range of mouthwatering recipes. With just a few clicks, you can search for recipes based on ingredients, cuisine types</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-next carousel-item-start">
                        <img src={img2} style={{ width: "100%", height: "80vh" }} alt="" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Savor the Flavor: Introducing Our Recipe Finder WebApp</h1>
                                <p>Our Recipe Finder WebApp is designed to simplify your cooking experience by providing access to an extensive collection of recipes.</p>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} style={{ width: "100%", height: "80vh" }} alt="" />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Unlock Culinary Creativity with Our Recipe Finder WebApp"</h1>
                                <p>Our Recipe Finder WebApp empowers home cooks and food enthusiasts alike to explore, discover, and create delicious dishes effortlessly. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default NewRecipeSlider
