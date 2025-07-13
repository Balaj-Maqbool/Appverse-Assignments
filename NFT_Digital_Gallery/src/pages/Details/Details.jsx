import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NFTContext from '../../context/NFTContext.jsx';
import NFTDetails from '../../components/NFTDetails/NFTDetails.jsx';
import { getNFTById } from '../../services/api.js';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);
  const { nfts } = useContext(NFTContext);

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        setLoading(true);

        // First check if NFT is already in context
        const existingNFT = nfts.find(nft => nft.id === parseInt(id));

        if (existingNFT) {
          setNft(existingNFT);
        } else {
          // Fetch from API if not found in context
          const data = await getNFTById(id);
          setNft(data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFT details:', error);
        setLoading(false);
      }
    };

    fetchNFT();
  }, [id, nfts]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading NFT details...</p>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="not-found">
        <h2>NFT Not Found</h2>
        <p>The NFT you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="details-page">
      <NFTDetails nft={nft} />
    </div>
  );
};

export default Details;