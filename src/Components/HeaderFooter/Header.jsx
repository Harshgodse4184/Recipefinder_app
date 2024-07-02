import React, { useContext, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { IoFastFood } from "react-icons/io5";
import { RecipeContext } from '../../Data/RecipeData';
function Header() {
    const { RecipeSearchHeader, Recipes } = useContext(RecipeContext);
    const searchItem = useRef();
    const HandleOnSearch = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            RecipeSearchHeader(searchItem.current.value);
        }
    }
    const HandleOnClick = (event) => {
        event.preventDefault();
        RecipeSearchHeader(searchItem.current.value);
    }
    return (
        <>
            <header className="p-3 margine_global mt-3 header_css top-0 sticky-lg-top">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link className='fs-1 text-white text-decoration-none' to="/"><IoFastFood /></Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink className='nav_item' to="/">Home</NavLink></li>
                            <li><NavLink className=' nav_item' to="famousRecipe">FamousRecipe</NavLink></li>
                            <li><NavLink className=' nav_item' to="newRecipe">NewRecipe</NavLink></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark" onKeyDown={HandleOnSearch} placeholder="Search..." ref={searchItem} aria-label="Search" />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2" onClick={HandleOnClick}>Search</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
