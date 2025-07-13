// Mock API service since we don't have a real API
// In a real app, this would make actual API calls

const categories = ['Art', 'Collectible', 'Photography', 'Virtual World', 'Music', 'Sports'];

const artists = [
    'CryptoPunk', 'Beeple', 'Pak', 'XCOPY', 'Hackatao',
    'Fewocious', 'Trevor Jones', 'Mad Dog Jones', 'Coldie', 'Josie'
];

const getNFTs = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const nfts = [];

    for (let i = 1; i <= 50; i++) {
        nfts.push({
            id: i,
            name: `Digital Dream #${i}`,
            artist: artists[Math.floor(Math.random() * artists.length)],
            price: parseFloat((0.1 + Math.random() * 4.9).toFixed(2)),
            currency: 'ETH',
            image: `https://picsum.photos/400/400?random=${i}`,
            description: 'A unique digital artwork representing the fusion of technology and creativity. Each piece is algorithmically generated and stored on the blockchain.',
            category: categories[Math.floor(Math.random() * categories.length)],
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
            likes: Math.floor(Math.random() * 500),
            views: Math.floor(Math.random() * 2000)
        });
    }

    return nfts;
};

const getNFTById = async (id) => {
    const nfts = await getNFTs();
    return nfts.find(nft => nft.id === parseInt(id));
};

export { getNFTs, getNFTById };