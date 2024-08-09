import { useEffect, useState } from 'react';
import Axios from 'axios';
import Map from './components/Map';
import './App.css';

function App() {
    const [ipDetails, setIpDetails] = useState({});
    const [lat, setLat] = useState(22.5726);
    const [lon, setLon] = useState(88.3832);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchIpDetails = async () => {
        setLoading(true);
        try {
            const res = await Axios.get('https://ipapi.co/json/');
            setIpDetails(res.data);
            setLat(res.data.latitude);
            setLon(res.data.longitude);
        } catch (error) {
            console.error('Error fetching IP details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Optional: Fetch IP details on load if desired
        // fetchIpDetails();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? 'App dark-mode' : 'App'}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h1 className="heading">IP Address Finder</h1>
            <button className="generate-button" onClick={fetchIpDetails} disabled={loading}>
                {loading ? 'Fetching...' : 'Generate IP Details'}
            </button>
            <div className="left">
                <h4>What is my IPv4 address?</h4>
                <h1 id="ip">{ipDetails.ip}</h1>
                <h4>Approximate location: </h4>
                <p>
                    {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.
                </p>
                <h4>Internet Service Provider (ISP):</h4>
                <p>{ipDetails.org}</p>
            </div>
            <Map lat={lat} lon={lon} />
        </div>
    );
}

export default App;
