import { useState, useEffect } from 'react';
import Axios from 'axios';
import Map from './components/Map';
import Navbar from './components/Navbar';
import IPDetails from './components/IPDetails';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const [ipDetails, setIpDetails] = useState({});
    const [lat, setLat] = useState(22.5726);
    const [lon, setLon] = useState(88.3832);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(link);
    }, []);

    const fetchIpDetails = async () => {
        setLoading(true);
        try {
            const res = await Axios.get('https://ipapi.co/json/');
            setIpDetails(res.data);
            setLat(res.data.latitude);
            setLon(res.data.longitude);
            setHistory(prev => [...new Set([res.data.ip, ...prev])].slice(0, 5));
        } catch (error) {
            console.error('Error fetching IP details:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className="content">
                <IPDetails 
                    ipDetails={ipDetails} 
                    fetchIpDetails={fetchIpDetails} 
                    loading={loading} 
                    history={history} 
                />
                <Map lat={lat} lon={lon} darkMode={darkMode} />
            </div>
        </div>
    );
}

export default App;
