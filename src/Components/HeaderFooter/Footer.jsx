import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="container margine_global">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                        </a>
                        <span className="mb-3 mb-md-0 text-white fs-4">© 2024 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3 text-white fs-2"><a href="https://www.instagram.com/ig_nikhil0106/?next=%2F" target='_blank' className=' text-white'><GrInstagram /></a></li>
                        <li className="ms-3 text-white fs-2"><a href="https://github.com/NikhilKhajure" target='_blank' className=' text-white'><FaGithub /></a></li>
                        <li className="ms-3 text-white fs-2 "><a href="https://www.linkedin.com/feed/" target='_blank' className=' text-white'><FaLinkedin /></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer
