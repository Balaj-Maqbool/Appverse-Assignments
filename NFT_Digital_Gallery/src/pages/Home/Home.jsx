import React from 'react';
import { useContext } from 'react';
import NFTContext from '../../context/NFTContext.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import './Home.css';

const Home = () => {
    const {
        filteredNfts,
        loading,
        sortBy,
        setSortBy,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery
    } = useContext(NFTContext);

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Rare Digital Art</h1>
                    <p>Explore, collect, and sell extraordinary NFTs from the world's top artists</p>
                    <div className="hero-buttons">
                        <button className="primary-button">Explore Now</button>
                        <button className="secondary-button">Create NFT</button>
                    </div>
                </div>
            </section>

            <section className="gallery-section" id="explore">
                <div className="section-header">
                    <h2>Explore NFTs</h2>
                    <p>Discover unique digital assets from creators worldwide</p>
                </div>

                <Filters
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    filter={filter}
                    setFilter={setFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <Gallery nfts={filteredNfts} loading={loading} />
            </section>

            <section className="about-section" id="about">
                <div className="section-header">
                    <h2>About NFT Gallery</h2>
                    <p>Your gateway to the world of digital collectibles</p>
                </div>
                <div className="about-content">
                    <p>
                        NFT Gallery is a platform dedicated to showcasing the best digital art and collectibles
                        from emerging and established artists. We provide a seamless experience for collectors
                        to discover, purchase, and manage their NFT collections.
                    </p>
                    <p>
                        Our mission is to democratize art ownership and support creators in the digital age.
                        Every NFT on our platform is verified and stored on the blockchain, ensuring authenticity
                        and provenance for collectors.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;