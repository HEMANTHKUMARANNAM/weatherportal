import React from "react";
import { useTheme } from "../context/ThemeContext";

function Newsitems({ title, description, url, imageUrl }) {
    // Extract domain from the url for the favicon
    const domain = new URL(url).hostname;
    
    // Get the current theme from the ThemeContext
    const { theme } = useTheme();

    // Define styles based on the theme
    const cardStyle = {
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        border: theme === "dark" ? "1px solid #444" : "1px solid #ddd"
    };

    const textStyle = {
        color: theme === "dark" ? "#bbb" : "#333"
    };

    return (
        <div className="card mb-3" style={cardStyle}>
            <div className="row row-cols-2">
                <div className="col">
                    <img
                        src={imageUrl}
                        className="card-img-top"
                        alt="News"
                        style={{ objectFit: "cover", height: "300px" }}
                    />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">
                            {domain && (
                                <img
                                    src={`https://${domain}/favicon.ico`}
                                    style={{ width: "20px", height: "20px", objectFit: "cover", marginRight: "10px" }}
                                    alt="favicon"
                                />
                            )}
                            {title}
                        </h5>
                        <p className="card-text" style={textStyle}>{description}</p>
                        <a
                            href={url}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsitems;
