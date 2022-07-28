import React, {useEffect, useState} from 'react';
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';
import Sidebar from './sidebar';
import DashboardHeader from './dashboardHeader';
import { useParams } from 'react-router-dom';

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const enquiry = useParams().enquiry;
    useEffect(()=>{
        getEnquiriesData(enquiry);
       console.log(enquiry)
    }, [ enquiry])
    const getEnquiriesData = async (enquiry) => {
        const postData = {
            "userId" : localStorage.getItem('userId'),
            "mode" : enquiry
        }
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.getEnquiries;
        await axios.post(baseURL, postData)
            .then((response) => {
                console.log(response);
                setEnquiries(response.data.dataList)
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
        <div className='tableWrp'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Surface</th>
                    <th scope="col">Construction Year</th>
                    <th scope="col">Room</th>
                    <th scope="col">Floors</th>
                    <th scope="col">Units</th>
                    <th scope="col">Leasehold</th>
                    <th scope="col">Division Declaration</th>
                    <th scope="col">Development Possible</th>
                    <th scope="col">Create Date</th>
                    <th scope="col">Floor Plan Files</th>
                    <th scope="col">Photo Files</th>
                    <th scope="col">Attachment Files</th>
                    </tr>
                </thead>
                <tbody>
                        {enquiries.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.surface}</td>
                                <td>{data.constructionYear}</td>
                                <td>{data.room}</td>
                                <td>{data.floors}</td>
                                <td>{data.units}</td>
                                <td>{data.leasehold}</td>
                                <td>{data.divisionDeclaration}</td>
                                <td>{data.developmentPossible}</td>
                                <td>{data.createDate}</td>
                                <td>{data.floorPlanFiles.map((img, i)=>(
                                    <img src={img} alt={img} key={i}/>
                                ))}</td>
                                <td>{data.photoFiles.map((img, i)=>(
                                    <img src={img} alt={img} key={i}/>
                                ))}</td>
                                <td>{data.attachmentFiles.map((img, i)=>(
                                    <img src={img} alt={img} key={i}/>
                                ))}</td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Enquiries;