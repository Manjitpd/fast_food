import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credendtials, setcredenditals] = useState({ name: "", email: "", password: "", geolocation: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credendtials.name, email: credendtials.email, password: credendtials.password, location: credendtials.geolocation })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("enter valid credendtials")
        }
    }

    const onChange = (event) => {
        setcredenditals({ ...credendtials, [event.target.name]: event.target.value })
    }

    return (
        <>

            <div div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credendtials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credendtials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credendtials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credendtials.geolocation} onChange={onChange} id="exampleInputPassword2" />
                    </div>

                    <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>
    )
}
