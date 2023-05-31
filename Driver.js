
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Menu from '../Menu';

export default function Driver() {

    const [adminDta, setAdminData] = useState([]);
    const [adminId, setAdminId] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [license, setLicense] = useState('');
    const [lisncExDate, setLicenseExDate] = useState('');
    const [experience, setExperience] = useState('');
    const [joining, setJoinDate] = useState('');
    const [reference, setReference] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState('');
    const [document, setDocument] = useState('');
    const [status, setStatus] = useState('');
    const [msg, setMsg] = useState('');

    // const getAdmin = () => {
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost/fleet_manage/backend/Driver_cntlr/AdminName',
    //         responseType: 'json'
    //     }).then(function (response) {
    //         let adminDta = response.data.adminName;
    //         setAdminData(adminDta);
    //     });
    // }


    const getAdmin = () => {
        axios({
            method: 'get',
            url: 'http://localhost/fleet_manage/backend/Driver_cntlr/AdminName',
            responseType: 'json'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(function (response) {
            let adminDta = response.data.adminName;
            setAdminData(adminDta);
        });
    }




    useEffect(() => {
        getAdmin();
    }, []);

    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token == null) {
            navigate("/");
        }
    }, []);

    const save = () => {
        axios.post('http://localhost/fleet_manage/backend/Driver_cntlr/saveDriver', {
            admin_id: adminId,
            phone: phone,
            age: age,
            license_no: license,
            license_expire_date: lisncExDate,
            experience: experience,
            joining_date: joining,
            reference: reference,
            address: address,
            status: status,
            photo: photo,
            document: document,

        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(function (response) {
            let data = response.data;
            console.log(data);
            setMsg(data.msg);
            setAdminId('');
            setPhone('');
            setAge('');
            setLicense('');
            setLicenseExDate('');
            setExperience('');
            setJoinDate('');
            setReference('');
            setAddress('');
            setPhoto('');
            setDocument('');

        })
    }

    const [pmnts, setPmnts] = useState([]);
    const getPmnt = () => {
        axios({
            method: 'get',
            url: 'http://localhost/fleet_manage/backend/Payment_c/pmntGet',
            responseType: 'json'
        }).then(function (response) {
            let pmnt = response.data.pmnts;
            setPmnts(pmnt);
        });
    }

    useEffect(() => {
        getPmnt();
    }, []);


    const deletePemnt = (id) => {
        axios.post('http://localhost/fleet_manage/backend/Payment_c/deletPmnt', {
            id: id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(function (response) {
            let data = response.data;
            setMsg(data.msg);
            getPmnt();
        })

    }


    const editPemnt = (id) => {
        navigate('/editpay/' + id)

    }

    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                <Menu />
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
                                <div className="col-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h5 className="m-0">Add New</h5>
                                        </div>
                                        <div className="card-body row">

                                            <div className='col-12'>
                                                <h4>{msg}</h4>
                                            </div>

                                            <div className='col-6'>
                                                <div>
                                                    <label>Admin Name</label>
                                                    <select className='form-control' onChange={(e) => setAdminId(e.target.value)} value={adminId} >
                                                        <option value='' key=''>Select One</option>
                                                        {adminDta.map((d, i) =>
                                                            <option value={`${d.id}`} key={i} >{d.name} </option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label>Phone Number</label>
                                                    <input type='number' className='form-control' onChange={(e) => setPhone(e.target.value)} value={phone} />
                                                </div>
                                                <div>
                                                    <label>Age</label>
                                                    <input type='number' className='form-control' onChange={(e) => setAge(e.target.value)} value={age} />
                                                </div>
                                                <div>
                                                    <label>License Number</label>
                                                    <input type='number' className='form-control' onChange={(e) => setLicense(e.target.value)} value={license} />
                                                </div>
                                                <div>
                                                    <label>License Expire Date</label>
                                                    <input type='date' className='form-control' onChange={(e) => setLicenseExDate(e.target.value)} value={lisncExDate} />
                                                </div>
                                                <div>
                                                    <label>Experience</label>
                                                    <input type='number' className='form-control' onChange={(e) => setExperience(e.target.value)} value={experience} />
                                                </div>
                                            </div>

                                            <div className='col-6'>
                                                <div>
                                                    <label>Joining Date</label>
                                                    <input type='date' className='form-control' onChange={(e) => setJoinDate(e.target.value)} value={joining} />
                                                </div>
                                                <div>
                                                    <label>Reference</label>
                                                    <input type='text' className='form-control' onChange={(e) => setReference(e.target.value)} value={reference} />
                                                </div>
                                                <div>
                                                    <label>Address</label>
                                                    <input type='text' className='form-control' onChange={(e) => setAddress(e.target.value)} value={address} />
                                                </div>
                                                <div className='form-group'>
                                                    <label>Photo</label>
                                                    <input type='file' className='form-control' onChange={(e) => setPhoto(e.target.value)} value={photo} />
                                                </div>
                                                <div className='form-group'>
                                                    <label>Documents</label>
                                                    <input type='file' className='form-control' onChange={(e) => setDocument(e.target.value)} value={document} />
                                                </div>
                                                <div className='form-group'>
                                                    <label>Stutus</label>
                                                    <div>
                                                        <input type="radio" id="html" name="fav_language" checked value={'active'} onChange={(e) => setStatus(e.target.value)} />
                                                        <label htmlFor='html' >Active</label>
                                                        <input type="radio" id="htmls" name="fav_language" value={'inactive'} onChange={(e) => setStatus(e.target.value)} />
                                                        <label htmlFor='htmls' >Inactive</label><br />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='col-12'>
                                                <div className='col-12'>
                                                    <input type='submit' className='btn btn-block btn-primary' value="Save" onClick={save} />
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="card card-primary card-outline">
                                        <div className="card-header">
                                            <h5 className="m-0">Payment Expense List</h5>
                                        </div>
                                        <div className="card-body">
                                            {/* <table className='table table-bordered table-responsive'>
                                                <thead>
                                                    <tr>
                                                        <th>SL</th>
                                                        <th>Vehicle Name</th>
                                                        <th>Tranjection Date</th>
                                                        <th>Amount</th>
                                                        <th>Remerks</th>
                                                        <th>Type</th>
                                                        <th colSpan={2}>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {pmnts.map((d, i) =>

                                                        <tr key={i}>
                                                            <td>{i + 1}</td>
                                                            <td>{d.name}</td>
                                                            <td>{d.trans_date}</td>
                                                            <td>{d.amount}</td>
                                                            <td>{d.remarks}</td>
                                                            <td>{d.type}</td>
                                                            <td>
                                                                <button className='btn btn-primary btn-sm' onClick={() => editPemnt(d.id)}  >Edit</button>

                                                            </td>
                                                            <td>
                                                                <button className='btn btn-danger btn-sm' onClick={() => deletePemnt(d.id)}  >Delete</button>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table> */}

                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </div>

    );
}
