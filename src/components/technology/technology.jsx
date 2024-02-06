

import React, { useState, useEffect } from "react";
import "./technology.css";
import { connect } from "react-redux";
import { setTechnologyData } from "../../redux/action/action";
import { technologyApiUrl } from "../../redux/API/api";

const Technology = ({ techData, setTechnologyData }) => {
  useEffect(() => {
    fetch(technologyApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const newsWithImages = data.articles.filter(
          (item) => item.urlToImage
        );
        setTechnologyData(newsWithImages);
      })
      .catch((error) =>
        console.error("Error fetching technology data:", error)
      );
  }, [setTechnologyData]);

  const handleImageError = (index) => {
    const updatedTechData = [...techData];

    if (index >= 0 && index < updatedTechData.length) {
      const placeholderImageUrl = "https://picsum.photos/400/200";
      updatedTechData[index].urlToImage = placeholderImageUrl;
      setTechnologyData(updatedTechData);
    }
  };

  return (
    <div className="news-frame-app">
      <header>
        <h1>Technology News</h1>
      </header>
      <div className="news-container">
        {techData.length > 0 ? (
          techData.map((item) => (
            <div key={item.url} className="news-item">
              <div className="news-image">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  onError={() => handleImageError(techData.indexOf(item))}
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
          <p>Loading technology news data...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techData: state.technology.techData,
});

const mapDispatchToProps = {
  setTechnologyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);
