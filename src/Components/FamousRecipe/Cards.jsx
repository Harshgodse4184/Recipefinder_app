import React from 'react'

function Cards({ index, image, label, source, calories, mealType, url, shareAs, ingredientLines }) {
    return (
        <>
            <div className="col" key={index}>
                <div className="card shadow-sm p-4">

                    <img src={image} style={{ height: "250px" }} alt="" />
                    <div className="card-body">
                        <center className=' fs-4 fw-bold  title_card'> {label} </center>
                        <div className=" pt-2 pb-3">
                            <span className=' fw-bolder text-success fs-5'>Source :</span><span> {source} </span> <br />
                            <span className=' fw-bold text-success fs-5'>Calories :</span> <span> {calories} </span> <br />
                            <span className=' fw-bold text-success fs-5'>Ingredients :</span> {ingredientLines.map((value) => {
                                return <span> {value} </span>
                            })} <br />
                            <span className=' fw-bold text-success fs-5'>Meal Type :</span> {mealType.map((value) => {
                                return <span> {value} </span>
                            })}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-danger text-danger"><a href={url} target='_blank ' className=' text-decoration-none'>Blog</a> </button>
                                <button type="button" className="btn btn-sm btn-outline-danger text-danger"><a href={shareAs} target='_blank ' className=' text-decoration-none'>View All Details</a></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
