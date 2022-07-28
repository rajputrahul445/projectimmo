import React, {useEffect, useState} from 'react';
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';
import Sidebar from './sidebar';
import DashboardHeader from './dashboardHeader';

const Message = () => {
    const [message, setMessage] = useState([]);
    //const [messageId, setMessageId] = useState('');
    useEffect(()=>{
        getMessageData();
    }, [])
    const getMessageData = async () => {
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.getMessage;
        await axios.get(baseURL)
            .then((response) => {
                console.log(response);
                setMessage(response.data.dataList)
            })
            .catch((error) => {
                console.log(error);
            })
           
    };
    const deleteMesage = async (id) => {
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.deleteEnquiry;
        const headers = { 
            'Authorization': localStorage.getItem('token'),
        };
        const postData = {
            "id" : id,
            "mode" : "message"
        }
        await axios.post(baseURL, postData, headers)
        .then(response => 
            {
                console.log('Delete successful', response);
                setTimeout(()=>{
                    getMessageData();
                }, 1000)
            }
            )
        .catch(error => {
            //setErrorMessage(error.message);
            console.log('There was an error!', error);
        });
        
    }
  return (
    <div className='pageWrp'>
        <Sidebar />
        <div className='rightArea'>
        <DashboardHeader />
        <div className='tableWrp'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {message.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.messageName}</td>
                                <td>{data.messageEmail}</td>
                                <td>{data.messageFare}</td>
                                <td><button className='btn btn-danger p-2' name={data.messageId} onClick={()=>{deleteMesage(data.messageId)}}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Message