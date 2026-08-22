import React from "react";

export default function Categories() {

    const categoriesItems = [
        {
            id: 1,
            title: 'Mens',
            img: '/src/assets/men1.png'
        },
        {
            id: 2,
            title: 'Accessories',
            img: '/src/assets/png2.png'
        },
        {
            id: 3,
            title: 'Womens',
            img: '/src/assets/png3.png'
        }
    ]
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="mb-5">
                    <h3 className="text-center mb-0 fw-normal">Top Categories</h3>
                </div>
                <div className="row">
                    {categoriesItems.map((item) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                            <div className="card">
                                <img src={item.img} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title text-center"> {item.title}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on
                                        the card title.
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="btn" style={{ backgroundColor: '#635bff', color: 'white', alignSelf: 'center' }}>View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}