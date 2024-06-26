
import './Dashboard.css';
import ps5 from '../Photos/ps5.png';
import pc from '../Photos/pc.png';
import motion_racing_simulator from '../Photos/motion_racing_simulator.webp';
import nintendo_switch from '../Photos/nintendo_switch.png';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";


function App() {
    
    const [gamerData, setgamerData] = useState([])

    

    const redID = 8888899999
    
    const getDeviceImage = () => {
        const gamingData = gamerData.find(gaming => gaming.redID === redID);
        
        if (gamingData) {
            switch (gamingData.device) {
                case 'PS5':
                    return <img src={ps5} alt="PS5" />;
                case 'PC':
                    return <img src={pc} alt="PC" />;
                case 'Racing':
                    return <img src={motion_racing_simulator} alt="Motion Racing Simulator" />;
                case 'Switch':
                    return <img src={nintendo_switch} alt="Nintendo Switch" />;
                default:
                    return null;
            }
        } else {
            return null;
        }
    };



    

    const gamepoint = `${process.env.REACT_APP_API_URL}gaming`

    

    let fetchData = async() => {
        console.log('fetching...')
        console.log(gamepoint)
        const response = await axios.get(gamepoint)
        console.log(response)
        const {data} = response
        setgamerData(data)
        console.log(data)
        return data
    }
    
    
    
 
    

   

    
    
    useEffect(() => {
        fetchData()
    }, []);
    

    
    

    
    

    

    return (
        <html lang="en">
    
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="_check_in_page.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://unpkg.com/bs-brain@2.0.3/components/footers/footer-2/assets/css/footer-2.css"/>
        <title>Check In Page</title>
      </head>
        <body>
        
        
        
        <div class = 'containering content'>
        <div class="awesome-container">
        
            <p><span style={{fontWeight: 'bold', color: '#A6192E'}}>Engagement Center Dashboard</span></p>
            <p>User Status: {gamerData.find(gaming => gaming.redID === redID)?.status || 'Not Found'}</p>
            <p>Queue Position: {gamerData.find(gaming => gaming.redID === redID)?.position}</p>
            <p>Device:</p>
            {getDeviceImage()}
            
            
            
            
            
           
        </div>
    
    
    
        
        
          
          
        </div>    
        
        
        
        
    
        <script src="_check_in_page.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    </body>
    </html>
  );
}

export default App;

