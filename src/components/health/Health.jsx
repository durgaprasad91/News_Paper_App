

import React, { useEffect } from "react";
import "./Health.css"; // Make sure to adjust the CSS file path
import { connect } from "react-redux";
import { setHealthData } from "../../redux/action/action";
import { healthApiUrl } from "../../redux/API/api";

const Health = ({ healthData, setHealthData }) => {
  useEffect(() => {
    fetch(healthApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.articles && Array.isArray(data.articles)) {
          const healthWithImages = data.articles.filter(
            (item) => item.urlToImage
          );
          setHealthData(healthWithImages);
        } else {
          console.error("Invalid data format received from the health API.");
          // Optionally, set healthData to an empty array or handle the error state
          setHealthData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching health data:", error.message);
        // Optionally, set healthData to an empty array or handle the error state
        setHealthData([]);
      });
  }, [setHealthData]);

  const handleImageError = (index) => {
    const updatedHealthData = [...healthData];

    if (index >= 0 && index < updatedHealthData.length) {
      const placeholderImageUrl = "https://picsum.photos/400/200";
      updatedHealthData[index].urlToImage = placeholderImageUrl;
      setHealthData(updatedHealthData);
    }
  };

  return (
    <div className="news-frame-app">
      <header>
        <h1>Health News</h1>
      </header>
      <div className="news-container">
        {healthData.length > 0 ? (
          healthData.map((item, index) => (
            <div key={item.url} className="news-item">
              <div className="news-image">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  onError={() => handleImageError(index)}
                />
              </div>
              <div className="news-content">
                <h2>{item.title}</h2>
                <p>{item.description || "No content available"}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading health news data...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  healthData: state.health.healthData,
});

const mapDispatchToProps = {
  setHealthData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Health);
