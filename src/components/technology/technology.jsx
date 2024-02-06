import React, { useEffect } from "react";
import "./Technology.css"; // Make sure to adjust the CSS file path
import { connect } from "react-redux";
import { setTechnologyData } from "../../redux/action/action";
import { technologyApiUrl } from "../../redux/API/api";

const Technology = ({ technologyData, setTechnologyData }) => {
  useEffect(() => {
    fetch(technologyApiUrl)
      .then((response) => {
        if (response.status === 426) {
          throw new Error("Upgrade Required: Please check the API key or server configuration.");
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (data && data.articles && Array.isArray(data.articles)) {
          const technologyWithImages = data.articles.filter(
            (item) => item.urlToImage
          );
          setTechnologyData(technologyWithImages);
        } else {
          console.error("Invalid data format received from the technology API.");
          // Optionally, set technologyData to an empty array or handle the error state
          setTechnologyData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching technology data:", error.message);
        // Optionally, set technologyData to an empty array or handle the error state
        setTechnologyData([]);
      });
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
  technologyData: state.technology.technologyData,
});

const mapDispatchToProps = {
  setTechnologyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Technology);
