import React, {useEffect, useState} from 'react';
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';
import Sidebar from './sidebar';
import DashboardHeader from './dashboardHeader';

const DashboardDetails = () => {
    const [apartmentEnquiryCount, setApartmentEnquiryCount] = useState('0');
    const [houseEnquiryCount, setHouseEnquiryCount] = useState('0');
    const [apartmentBuildingEnquiryCount, setApartmentBuildingEnquiryCount] = useState('0');
    const [businessEnquiryCount, setBusinessEnquiryCount] = useState('0');
    const [propertyEnquiryCount, setPropertyEnquiryCount] = useState('0');
    useEffect(()=>{
        getDashboardDetailsData();
    }, [])
    const getDashboardDetailsData = async () => {
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.getDashboardDetails;
        await axios.get(baseURL)
            .then((response) => {
                console.log(response);
                setApartmentEnquiryCount(response.data.apartment_EnquiryCount)
                setHouseEnquiryCount(response.data.house_EnquiryCount)
                setApartmentBuildingEnquiryCount(response.data.apartment_Building_EnquiryCount)
                setBusinessEnquiryCount(response.data.business_EnquiryCount)
                setPropertyEnquiryCount(response.data.property_EnquiryCount)
            })
            .catch((error) => {
                console.log(error);
            })
           
    };
    
  return (
    <div className='pageWrp'>
        <Sidebar />
        <div className='rightArea'>
        <DashboardHeader />
            <div className='row'>
                <div className='col-md-4 col-12 mb-3'>
                    <div className="card text-center">
                        <div className="p-4 card-body">
                            <h3>{apartmentEnquiryCount}</h3>
                            <h5 className="card-title">Wohnung</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 mb-3'>
                    <div className="card text-center">
                        <div className="p-4 card-body">
                            <h3>{houseEnquiryCount}</h3>
                            <h5 className="card-title">Haus</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 mb-3'>
                    <div className="card text-center">
                        <div className="p-4 card-body">
                            <h3>{apartmentBuildingEnquiryCount}</h3>
                            <h5 className="card-title">Mehrfamilienhaus</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 mb-3'>
                    <div className="card text-center">
                        <div className="p-4 card-body">
                            <h3>{businessEnquiryCount}</h3>
                            <h5 className="card-title">Gewerbe</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12 mb-3'>
                    <div className="card text-center">
                        <div className="p-4 card-body">
                            <h3>{propertyEnquiryCount}</h3>
                            <h5 className="card-title">Grundstück</h5>
                        </div>
                    </div>
                </div>
                {/* <div className='col-12'>
                    <Message />
                </div> */}
            </div>
        </div>
    </div>

  )
}

export default DashboardDetails