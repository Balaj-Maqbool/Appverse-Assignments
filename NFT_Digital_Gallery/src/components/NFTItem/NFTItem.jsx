import React from 'react';
import { Link } from 'react-router-dom';
import './NFTItem.css';

const NFTItem = ({ nft }) => {
    return (
        <Link to={`/details/${nft.id}`} className="nft-item">
            <div className="nft-image-container">
                <img src={nft.image} alt={nft.name} className="nft-image" />
                <div className="nft-category">{nft.category}</div>
            </div>
            <div className="nft-info">
                <h3 className="nft-name">{nft.name}</h3>
                <div className="nft-artist">
                    <span className="artist-icon">👤</span>
                    <span>{nft.artist}</span>
                </div>
                <div className="nft-price-container">
                    <div className="price-label">Price</div>
                    <div className="nft-price">{nft.price} {nft.currency}</div>
                </div>
                <div className="nft-stats">
                    <div className="stat">
                        <span className="stat-icon">❤️</span>
                        <span>{nft.likes}</span>
                    </div>
                    <div className="stat">
                        <span className="stat-icon">👁️</span>
                        <span>{nft.views}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NFTItem;