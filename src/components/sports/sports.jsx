
import React, { useState, useEffect } from "react";
import "./sports.css";
import { connect } from "react-redux";
import { setSportsData } from "../../redux/action/action";
import { sportsApiUrl } from "../../redux/API/api";

const Sports = ({ sportsData, setSportsData }) => {
  useEffect(() => {
    fetch(sportsApiUrl)
      .then((response) => response.json())
      .then((data) => {
        const newsWithImages = data.articles.filter(
          (item) => item.urlToImage
        );
        setSportsData(newsWithImages);
      })
      .catch((error) => console.error("Error fetching sports data:", error));
  }, [setSportsData]);

  const handleImageError = (index) => {
    const updatedSportsData = [...sportsData];

    if (index >= 0 && index < updatedSportsData.length) {
      const placeholderImageUrl = "https://picsum.photos/400/200";
      updatedSportsData[index].urlToImage = placeholderImageUrl;
      setSportsData(updatedSportsData);
    }
  };

  return (
    <div className="news-frame-app">
      <header>
        <h1>Sports News</h1>
      </header>
      <div className="news-container">
        {sportsData.length > 0 ? (
          sportsData.map((item) => (
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
          <p>Loading sports news data...</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sportsData: state.sports.sportsData,
});

const mapDispatchToProps = {
  setSportsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sports);
