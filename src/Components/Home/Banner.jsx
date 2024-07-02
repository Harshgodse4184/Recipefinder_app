import React from 'react'
import FamousRecipe from '../FamousRecipe/FamousRecipe'
import { NavLink } from 'react-router-dom';
function Banner() {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center margine_global banner">
                <div>
                    <span className="display-5 fw-bold text-white ">Delicious Recipe</span>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead  text-black fs-3 fw-medium banner_text">Welcome to our culinary haven, where every recipe tells a story of flavor and tradition. Dive into a world of delectable delights, where every dish whispers tales of taste and inspiration.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3 btn_custom"><NavLink className=' nav_item' to="famousRecipe">Find More</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
