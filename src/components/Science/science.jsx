

import React, { useEffect } from "react";
import "./Science.css"; // Make sure to adjust the CSS file path
import { connect } from "react-redux";
import { setScienceData } from "../../redux/action/action";
import { scienceApiUrl } from "../../redux/API/api";

const Science = ({ scienceData, setScienceData }) => {
  useEffect(() => {
    fetch(scienceApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.articles && Array.isArray(data.articles)) {
          const scienceWithImages = data.articles.filter(
            (item) => item.urlToImage
          );
          setScienceData(scienceWithImages);
        } else {
          console.error("Invalid data format received from the science API.");
          // Optionally, set scienceData to an empty array or handle the error state
          setScienceData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching science data:", error.message);
        // Optionally, set scienceData to an empty array or handle the error state
        setScienceData([]);
      });
  }, [setScienceData]);

  const handleImageError = (index) => {
    const updatedScienceData = [...scienceData];

    if (index >= 0 && index < updatedScienceData.length) {
      const placeholderImageUrl = "https://picsum.photos/400/200";
      updatedScienceData[index].urlToImage = placeholderImageUrl;
      setScienceData(updatedScienceData);
    }
  };

  return (
    <div className="news-frame-app">
      <header>
        <h1>Science News</h1>
      </header>
      <div className="news-container">
        {scienceData.length > 0 ? (
          scienceData.map((item) => (
            <div key={item.url} className="news-item">
              <div className="news-image">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  onError={() => handleImageError(item)}
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
          <p>Loading science news data...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  scienceData: state.science.scienceData,
});

const mapDispatchToProps = {
  setScienceData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Science);
