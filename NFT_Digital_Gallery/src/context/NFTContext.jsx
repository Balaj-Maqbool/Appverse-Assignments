import React, { createContext, useState, useEffect } from 'react';
import { getNFTs } from '../services/api.js';

const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
    const [nfts, setNfts] = useState([]);
    const [filteredNfts, setFilteredNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('newest');
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const data = await getNFTs();
                setNfts(data);
                setFilteredNfts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching NFTs:', error);
                setLoading(false);
            }
        };

        fetchNFTs();
    }, []);

    useEffect(() => {
        let result = [...nfts];

        // Apply filter
        if (filter !== 'all') {
            result = result.filter(nft => nft.category === filter);
        }

        // Apply search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(nft =>
                nft.name.toLowerCase().includes(query) ||
                nft.artist.toLowerCase().includes(query)
            );
        }

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'newest':
            default:
                result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }

        setFilteredNfts(result);
    }, [nfts, sortBy, filter, searchQuery]);

    return (
        <NFTContext.Provider
            value={{
                nfts,
                filteredNfts,
                loading,
                sortBy,
                setSortBy,
                filter,
                setFilter,
                searchQuery,
                setSearchQuery
            }}
        >
            {children}
        </NFTContext.Provider>
    );
};

export default NFTContext;