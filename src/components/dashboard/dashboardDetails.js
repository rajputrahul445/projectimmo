import React from 'react';

const DashboardDetails = () => {
  return (
    <div className='d-block p-3'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-3'>
                <div class="card">
                    <div class="card-body">
                        <h3>0</h3>
                        <h5 class="card-title">Wohnung</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div class="card">
                    <div class="card-body">
                        <h3>0</h3>
                        <h5 class="card-title">Haus</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div class="card">
                    <div class="card-body">
                        <h3>0</h3>
                        <h5 class="card-title">Mehrfamilienhaus</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div class="card">
                    <div class="card-body">
                        <h3>0</h3>
                        <h5 class="card-title">Gewerbe</h5>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-12 mb-3'>
                <div class="card">
                    <div class="card-body">
                        <h3>0</h3>
                        <h5 class="card-title">Grundstück</h5>
                    </div>
                </div>
            </div>
            <div className='col-12'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DashboardDetails