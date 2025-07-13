
import './Filters.css';

const Filters = ({
    sortBy,
    setSortBy,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery
}) => {
    const categories = ['all', 'Art', 'Collectible', 'Photography', 'Virtual World', 'Music', 'Sports'];

    return (
        <div className="filters-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search NFTs or artists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="filter-controls">
                <div className="filter-group">
                    <label htmlFor="category-filter">Category:</label>
                    <select
                        id="category-filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="filter-select"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="sort-by">Sort by:</label>
                    <select
                        id="sort-by"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="filter-select"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filters;