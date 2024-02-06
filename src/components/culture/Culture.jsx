import React, { useEffect } from "react";
import "./Culture.css"; // Make sure to adjust the CSS file path
import { connect } from "react-redux";
import { setCultureData } from "../../redux/action/action";
import { cultureApiUrl } from "../../redux/API/api";

const Culture = ({ cultureData, setCultureData }) => {
  useEffect(() => {
    fetch(cultureApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.articles && Array.isArray(data.articles)) {
          const cultureWithImages = data.articles.filter(
            (item) => item.urlToImage
          );
          setCultureData(cultureWithImages);
        } else {
          console.error("Invalid data format received from the culture API.");
          // Optionally, set cultureData to an empty array or handle the error state
          setCultureData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching culture data:", error.message);
        // Optionally, set cultureData to an empty array or handle the error state
        setCultureData([]);
      });
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
        {cultureData && cultureData.length > 0 ? (
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
