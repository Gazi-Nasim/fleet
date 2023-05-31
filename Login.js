import React from "react";
import '../App.css';

export default Login = () => {

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a href="index2.html"><b>Admin</b>Panel</a>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <div className="input-group mb-3">
                            <input type="email" name="email" onChange={(e) => { e.target.valu('setMail') }} className="form-control" placeholder="Email" required />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" name="password" onChange={(e) => { e.target.valu('setPass') }} className="form-control" placeholder="Password" required />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">

                            </div>

                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );


}