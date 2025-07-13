# 🖼️ NFT Gallery - React Application

![Desktop Gallery](screenshots/desktop-gallery.jpg)

Modern interface showcasing digital art NFTs.

---

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Responsive Design](#responsive-design)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Author](#author)

---

## 📌 Project Overview

**NFT Gallery** is a modern, responsive web application built with React that showcases digital art as Non-Fungible Tokens (NFTs). The platform features a clean, minimalist design with comprehensive functionality for browsing, filtering, and exploring NFT collections.

### Core Functionality:

- Browse NFT collections with rich metadata
- Advanced filtering and sorting options
- Detailed NFT information pages
- Responsive layout for all screen sizes

---

## ✨ Key Features

### 🖼️ NFT Display

- Grid layout showcasing NFT images with metadata (name, artist, price)
- Hover animations and visual effects
- Category tagging system

### 🔍 Advanced Filtering & Sorting

- Search by NFT name or artist
- Category filtering (Art, Collectible, Photography, etc.)
- Multi-criteria sorting (price, name, newest)

### 📱 Responsive Design

- Mobile-first approach with adaptive layouts
- Optimized for screens from 320px to 4K
- Touch-friendly interface components

### ℹ️ Detailed NFT Views

- Comprehensive NFT information display
- Action buttons (Buy, Make Offer, Like)
- Statistics tracking (views, likes, owners)

---

## 🚀 Live Demo

Experience the application live:  
**🔗 [NFT Gallery Live Demo](#)**

> _(Note: Replace with actual deployment link)_

---

## 🛠️ Installation

Follow these steps to run the project locally:

```bash
git clone https://github.com/your-username/nft-gallery.git
cd nft-gallery
npm install
npm start
Visit in your browser: [http://localhost:3000](http://localhost:3000)
```

---

## 📁 Project Structure

src/
├── components/
│ ├── Header/
│ ├── Gallery/
│ ├── NFTItem/
│ ├── Filters/
│ ├── NFTDetails/
│ └── Layout/
├── services/
│ └── api.js
├── context/
│ └── NFTContext.jsx
├── pages/
│ ├── Home.jsx
│ └── Details.jsx
├── App.js
└── index.js

````

---

## 🧰 Technologies Used

- **Frontend Framework:** React 18
- **State Management:** React Context API
- **Routing:** React Router v6
- **Styling:** Plain CSS (no preprocessors)
- **Layout:** CSS Grid & Flexbox
- **UI Architecture:** Component-based design
- **API Handling:** Custom service layer

---

## 📱 Responsive Design

| Breakpoint        | Layout Features                                         |
|-------------------|----------------------------------------------------------|
| Mobile (320–480px) | Single-column layout, stacked filters, simplified nav  |
| Tablet (481–768px) | Two-column NFT grid, compact header                    |
| Desktop (769px+)   | 3–4 column grid, horizontal filters, full navigation   |

---

## 🔗 API Integration

### ✅ Mock API Service

- Generates random NFT data (artist, price, category)
- Simulates API response delays
- Contains 24 mock NFT entries

### 🖼️ Image Service

- Powered by [Lorem Picsum](https://picsum.photos)
- URL Pattern: `https://picsum.photos/400/400?random={id}`

### 🧪 Real API Ready Example (OpenSea)

```js
const getNFTs = async () => {
  const response = await fetch('https://api.opensea.io/api/v1/assets?limit=20');
  const data = await response.json();
  return data.assets.map(asset => ({
    id: asset.token_id,
    name: asset.name || `#${asset.token_id}`,
    artist: asset.creator?.user?.username || 'Unknown',
    price: asset.last_sale?.total_price || 0.1,
    currency: 'ETH',
    image: asset.image_url,
    description: asset.description || 'NFT description',
    category: asset.collection?.name || 'Art'
  }));
};
````

---

## 📸 Screenshots

### 📱 Mobile View

<img src="screenshots/mobile-gallery.jpg" alt="Mobile Gallery" width="300"/>
<img src="screenshots/mobile-filters.jpg" alt="Mobile Filters" width="300"/>

### 💻 Tablet View

<img src="screenshots/tablet-gallery.jpg" alt="Tablet Gallery" width="600"/>

### 🖥️ Desktop View

<img src="screenshots/desktop-gallery.jpg" alt="Desktop Gallery" width="800"/>
<img src="screenshots/nft-details.jpg" alt="NFT Details" width="800"/>

### ✨ Interaction States

<img src="screenshots/hover-effect.jpg" alt="Hover Effects" width="800"/>

---

## 🚧 Future Enhancements

- Real NFT API integrations (OpenSea, Rarible)
- Wallet connection support
- User authentication
- Favorites and personal collection management
- Dark mode toggle
- Advanced filters
- Lazy loading and pagination

---

## 📝 License

This project is licensed under the **MIT License**.  
See the `LICENSE.md` file for full details.

---

## 👤 Author

**Balaj Maqbool**

- GitHub: [@balajmaqbool](https://github.com/balajmaqbool)
- Portfolio: [balajmaqbool.com](https://balajmaqbool.com)
- LinkedIn: [in/balajmaqbool](https://linkedin.com/in/balajmaqbool)

---

> Thank you for exploring **NFT Gallery**!  
> For any questions or feedback, please contact the author.
