import * as React from 'react';

import Main from './Main';
import Header from './Header';

export default function InstituteDashboard() {
  const [mainValue, setMainValue] = React.useState('classes');
  const [classid,setClassId] = React.useState(null)

  return (
    <>
      <div class="flex-container">
        <div class="header">
          <Header />
        </div>
        <div class="body1">
          {/* sidebar */}
          <div class="sidebar">
            <div
              style={{
                overflowY: 'auto',
                height: '90%',
                fontSize: '20px',
                padding: '30px',
              }}
            >
              <div>
                <h5>Academics</h5>
                <button className='btn btn-sm' onClick={() => setMainValue('classes')}>Classes</button>
                <br />
                <button className='btn btn-sm' onClick={() => setMainValue('faculty')}>Faculty</button>
                <br />
                <button className='btn btn-sm' onClick={() => setMainValue('roles')}>Roles</button>
              </div>
              <br />
              <div>
                <h5>Finance</h5>
                <button className='btn btn-sm' onClick={() => setMainValue('feecollected')}>Fee Collected</button>
                <br />
                <button className='btn btn-sm' onClick={() => setMainValue('expanses')}>Expanses</button>
                <br />
                <button className='btn btn-sm' onClick={() => setMainValue('profit')}>Profit</button>
              </div>
              <br />
              <div>
                <h5>Inventory</h5>
                <button className='btn btn-sm' onClick={() => setMainValue('inventory')}>Inventory</button>
              </div>
            </div>
          </div>
          <div class="main">
            <Main mainContentValue={mainValue} setmainvalue = {setMainValue} setclassid = {setClassId} classid = {classid} />
          </div>
        </div>
      </div>
    </>
  );
}
