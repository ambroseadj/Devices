import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  userRoutes from './routes/users.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

const app= express();
dotenv.config()
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


app.get('/',(req,res) => {
res.send("This is an API")

})


app.use('/user',userRoutes)


app.post('auth/signup')






app.use(cors());
app.use(bodyParser.json());



const deviceSchema = new mongoose.Schema(
  {
    device_id: String,
    alloted_to_user: String,
    state: {
      light: Number,
      fan: Number,
      mis: Number,
    },
  },
  { collection: 'device' }
);

const Device = mongoose.model('Device', deviceSchema);


app.post('/devices', async (req, res) => {
  try {
    const { device_id, alloted_to_user, state } = req.body;

    
    const newDevice = new Device({
      device_id,
      alloted_to_user,
      state,
    });

    
    await newDevice.save();

    res.status(201).json(newDevice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Device creation failed.' });
  }
});



app.put('/devices/:deviceId', async (req, res) => {
    try {
      const deviceId = req.params.deviceId;
      const updatedDeviceData = req.body;
  
      const updatedDevice = await Device.findByIdAndUpdate(deviceId, updatedDeviceData, { new: true });
  
      if (!updatedDevice) {
        return res.status(404).json({ message: 'Device not found' });
      }
  
      res.status(200).json(updatedDevice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Device update failed.' });
    }
  });
  






app.get('/devices',async(req,res)=>{

    try{
        const devices = await Device.find();
        res.status(200).json(devices);

    } catch(error){
        console.error('Error fetching devices',error);
        res.status(500).json({message:"error fetching data"})
    }
});


const PORT= process.env.PORT || 5000

const DATABASE_URL="mongodb+srv://ambrose:aj208125@stacky-1.dx65ect.mongodb.net/"



mongoose.connect(DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => app.listen(PORT,() => {console.log(`server running on port  ${PORT}`)}))
.catch((err) => console.log(err.message))