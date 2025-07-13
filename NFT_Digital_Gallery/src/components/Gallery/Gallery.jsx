import React from 'react';
import NFTItem from '../NFTItem/NFTItem.jsx';
import './Gallery.css';

const Gallery = ({ nfts, loading }) => {
    if (loading) {
        return (
            <div className="gallery-loading">
                <div className="spinner"></div>
                <p>Loading NFTs...</p>
            </div>
        );
    }

    if (!nfts.length) {
        return (
            <div className="gallery-empty">
                <p>No NFTs found matching your criteria</p>
            </div>
        );
    }

    return (
        <div className="gallery">
            {nfts.map(nft => (
                <NFTItem key={nft.id} nft={nft} />
            ))}
        </div>
    );
};

export default Gallery;