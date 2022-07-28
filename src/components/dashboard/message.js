import React, {useEffect, useState} from 'react';
import axios from "axios";
import API_HOST from '../API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from '../API_ENDPOINTS/API_ENDPOINTS';

const Message = () => {
    const [message, setMessage] = useState([]);
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
  return (
    <div className='rightArea'>
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
                                <td><button className='btn btn-danger p-2'><i className="fas fa-trash-alt"></i></button></td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Message