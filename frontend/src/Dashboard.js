import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';

const Dashboard = () => {
    const navigate=useNavigate();
    useEffect(() => {
        let token=localStorage.getItem('token')
        if(token==null){
          navigate("/");
        }
      }, []);
    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
            <Menu/>
            <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Starter Page</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Starter Page</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                        <h5 className="m-0">Featured</h5>
                        </div>
                        <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>

                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
                
                </div>
                
                </div>
            </div>

            </div>

            <Footer/>
            </div>
        </div>
    );
}

export default Dashboard;
