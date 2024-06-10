import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Intro from '../Intro/Intro';
import './Home.css';

function Home() {
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://6666d505a2f8516ff7a524d7.mockapi.io/lab7/api`;

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => setStaff(data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div className="container mt-5">
            <Intro />
            <h2 className="text-center movie-selection-title">Movie Selection</h2>
            <div className="row movie-selection">
                {staff.map((staffs) => (
                    <div key={staffs.id} className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="card movie-card">
                            <img
                                src={staffs.img}
                                alt={staffs.name}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{staffs.name}</h5>
                                <p className="card-text"><strong>Price: {staffs.price} $</strong></p>
                                <Link to={`/detail/${staffs.id}`} className="btn btn-primary">
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
