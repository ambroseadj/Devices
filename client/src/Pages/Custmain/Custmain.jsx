import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./Custmain.css"
const Custmain = () => {
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
        const { alloted_to_user, ...updatedDevice } = editedDevice;
      
        const response = await axios.put(`https://iot-0xyn.onrender.com/devices/${deviceId}`, updatedDevice, {
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
      const response = await axios.get('https://iot-0xyn.onrender.com/devices');
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
      
      state: {
        light,
        fan,
        mis,
      },
    };

    axios
      .post('https://iot-0xyn.onrender.com', newDevice, {
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
    


      <h2>Devices Alloted to you</h2>
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

        <button className='butt' type="submit">Switch on/off</button>
      </form>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Custmain;
