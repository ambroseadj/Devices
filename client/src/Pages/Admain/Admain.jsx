import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./Admain.css"
const Admain = () => {
  const [device_id, setDeviceId] = useState('');
  const [alloted_to_user, setAllotedToUser] = useState('');
  const [light, setLight] = useState(0);
  const [fan, setFan] = useState(0);
  const [mis, setMis] = useState(0);
  const [devices, setDevices] = useState([]);
  const [editedDevice, setEditedDevice] = useState({  
    device_id: '',
    alloted_to_user: '',
    state: {
      light: 0,
      fan: 0,
      mis: 0,
    },});




    const handleEditDevice = async (deviceId) => {
      try {
        const updatedDevice = { ...editedDevice }; 
        const response = await axios.put(`http://localhost:5000/devices/${deviceId}`, updatedDevice, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.status === 200) {
          console.log('Device updated successfully');
          fetchDevices(); 
        } else {
          console.error('Device update failed');
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    };
    






  const fetchDevices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/devices');
      if (response.status === 200) {
        
        setDevices(response.data);
        console.log({devices})
      }
    } catch (error) {
      console.error('Error fetching devices:', error);
    }
  };

  useEffect(() => {
    
    fetchDevices();
  }, []); 

  const createDevice = () => {
    const newDevice = {
      device_id,
      alloted_to_user,
      state: {
        light,
        fan,
        mis,
      },
    };

    axios
      .post('http://localhost:5000/devices', newDevice, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 201) {
       
          console.log('Device created successfully');
          fetchDevices();
        } else {
        
          console.error('Device creation failed');
        }
      })
      .catch((error) => {
        console.error('Request error:', error);
      });
  };

  return (
    <div className='container'>
      <h2>Create a New IoT Device</h2>
      <div>
        <label>Device ID:</label>
        <input
        style={{width:"40%"}}
          type="text"
          value={device_id}
          onChange={(e) => setDeviceId(e.target.value)}
        />
      </div>
      <div>
        <label>Allotted to User:</label>
        <input
          type="text"
          value={alloted_to_user}
          onChange={(e) => setAllotedToUser(e.target.value)}
        />
      </div>
      <div>
        <label>Light:</label>
        <select value={light} onChange={(e) => setLight(e.target.value)}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
      </div>
      <div>
        <label>Fan:</label>
        <select value={fan} onChange={(e) => setFan(e.target.value)}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
      </div>
      <div>
        <label>Miscellaneous Load:</label>
        <select value={mis} onChange={(e) => setMis(e.target.value)}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
      </div>
      <button className='butt' onClick={createDevice}>Create Device</button>


      <h2>Devices List</h2>
      <ul>
  {devices.map((device) => (
    <li key={device._id}>
      
      <p>Allotted to User:</p> {device.alloted_to_user}
      <br />
      <p>Light:</p> 
      <span className={`status ${device.state.light === 1 ? 'on' : 'off'}`}>
        {device.state.light === 1 ? 'On' : 'Off'}
      </span>
      <br />
      <p>Fan:</p> 
      <span className={`status ${device.state.fan === 1 ? 'on' : 'off'}`}>
        {device.state.fan === 1 ? 'On' : 'Off'}
      </span>
      <br />
      <p>Miscellaneous Load:</p> 
      <span className={`status ${device.state.mis === 1 ? 'on' : 'off'}`}>
        {device.state.mis === 1 ? 'On' : 'Off'}
      </span>
      <br />

      <br>
      
      
      </br>
      <form onSubmit={() => handleEditDevice(device._id)}>
        <label>Assign Devices to User:</label>
        <input
          type="text"
          value={editedDevice.alloted_to_user}
          onChange={(e) => setEditedDevice({ ...editedDevice, alloted_to_user: e.target.value })}
        />
        <br />

        <label>Change Light state:</label>
        <select value={editedDevice.state.light} onChange={(e) => setEditedDevice({ ...editedDevice, state: { ...editedDevice.state, light: parseInt(e.target.value) } })}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
        <br />

        <label>Change Fan state:</label>
        <select value={editedDevice.state.fan} onChange={(e) => setEditedDevice({ ...editedDevice, state: { ...editedDevice.state, fan: parseInt(e.target.value) } })}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
        <br />
    <br/>
        <label>Change Miscellaneous Load State:</label>
        <select value={editedDevice.state.mis} onChange={(e) => setEditedDevice({ ...editedDevice, state: { ...editedDevice.state, mis: parseInt(e.target.value) } })}>
          <option value={0}>Off</option>
          <option value={1}>On</option>
        </select>
        <br />

        <button className='butt' type="submit">Edit Device</button>
      </form>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Admain;
