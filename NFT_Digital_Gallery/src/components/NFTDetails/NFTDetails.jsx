import React from 'react';
import { Link } from 'react-router-dom';
import './NFTDetails.css';

const NFTDetails = ({ nft }) => {
    if (!nft) return null;

    return (
        <div className="nft-details-container">
            <div className="nft-details">
                <div className="nft-image-section">
                    <img src={nft.image} alt={nft.name} className="detail-image" />
                </div>

                <div className="nft-info-section">
                    <div className="nft-header">
                        <h1 className="nft-title">{nft.name}</h1>
                        <div className="nft-category">{nft.category}</div>
                    </div>

                    <div className="artist-info">
                        <div className="artist-label">Artist</div>
                        <div className="artist-name">
                            <span className="artist-icon">👤</span>
                            {nft.artist}
                        </div>
                    </div>

                    <p className="nft-description">{nft.description}</p>

                    <div className="price-info">
                        <div className="price-label">Current Price</div>
                        <div className="nft-price">{nft.price} {nft.currency}</div>
                    </div>

                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-value">{nft.views}</div>
                            <div className="stat-label">Views</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{nft.likes}</div>
                            <div className="stat-label">Likes</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">24</div>
                            <div className="stat-label">Owners</div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="buy-button">Buy Now</button>
                        <button className="offer-button">Make Offer</button>
                        <button className="like-button">❤️ Like</button>
                    </div>
                </div>
            </div>

            <Link to="/" className="back-link">
                ← Back to Gallery
            </Link>
        </div>
    );
};

export default NFTDetails;