import React, { useEffect } from 'react';
import Message from './message';
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';

const DashboardDetails = () => {
    useEffect(()=>{

    }, [])
    const getMessage = () => {
        axios.get('/user?ID=12345')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };
  return (
    <div className='d-block p-3'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-3'>
                <div className="card">
                    <div className="card-body">
                        <h3>0</h3>
                        <h5 className="card-title">Wohnung</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div className="card">
                    <div className="card-body">
                        <h3>0</h3>
                        <h5 className="card-title">Haus</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div className="card">
                    <div className="card-body">
                        <h3>0</h3>
                        <h5 className="card-title">Mehrfamilienhaus</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div className="card">
                    <div className="card-body">
                        <h3>0</h3>
                        <h5 className="card-title">Gewerbe</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div className="card">
                    <div className="card-body">
                        <h3>0</h3>
                        <h5 className="card-title">Grundstück</h5>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <Message />
            </div>
        </div>
    </div>
  )
}

export default DashboardDetails