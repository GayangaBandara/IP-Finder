import React from "react";

const IPDetails = ({ ipDetails, fetchIpDetails, loading, history }) => {
  return (
    <div className="ip-details">
      <button
        className="generate-button"
        onClick={fetchIpDetails}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Generate IP Details"}
      </button>
      <h4>What is my IPv4 address?</h4>
      <h1 id="ip">{ipDetails.ip}</h1>
      <h4>Approximate location:</h4>
      <p>
        {ipDetails.city && `${ipDetails.city}`}
        {ipDetails.city && ipDetails.region && `, `}
        {ipDetails.region && `${ipDetails.region}`}
        {ipDetails.region && ipDetails.country_name && `, `}
        {ipDetails.country_name && `${ipDetails.country_name}.`}
      </p>
      <h4>Internet Service Provider (ISP):</h4>
      <p>{ipDetails.org}</p>

      {history.length > 0 && (
        <div className="ip-history">
          <h4>IP History:</h4>
          <ul>
            {history.map((ip, index) => (
              <li key={index} onClick={() => fetchIpDetails(ip)}>
                {ip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IPDetails;
