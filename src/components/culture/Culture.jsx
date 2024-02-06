

import React, { useState, useEffect } from "react";
import "./culture.css";
import { connect } from "react-redux";
import { setCultureData } from "../../redux/action/action";
import { cultureApiUrl } from "../../redux/API/api";

const Culture = ({ cultureData, setCultureData }) => {
  useEffect(() => {
    fetch(cultureApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received data:", data);

        if (data && (data.articles || (data.data && Array.isArray(data.data)))) {
          // Use the default format if data.articles is present
          // or if data.data is present and is an array
          const newsWithImages = (data.articles || data.data).filter((item) => item.urlToImage);
          setCultureData(newsWithImages);
        } else {
          console.error("Invalid API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching culture data:", error));
  }, [setCultureData]);


  const handleImageError = (index) => {
    const updatedCultureData = [...cultureData];

    if (index >= 0 && index < updatedCultureData.length) {
      const placeholderImageUrl = "https://picsum.photos/400/200";
      updatedCultureData[index].urlToImage = placeholderImageUrl;
      setCultureData(updatedCultureData);
    }
  };

  return (
    <div className="news-frame-app">
      <header>
        <h1>Culture News</h1>
      </header>
      <div className="news-container">
        {cultureData.length > 0 ? (
          cultureData.map((item, index) => (
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
          <p>Loading culture news data...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cultureData: state.culture.cultureData,
});

const mapDispatchToProps = {
  setCultureData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Culture);
