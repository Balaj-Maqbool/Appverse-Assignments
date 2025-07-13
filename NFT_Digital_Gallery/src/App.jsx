
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NFTProvider } from './context/NFTContext.jsx';
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Details from './pages/Details/Details.jsx';
import './App.css';

function App() {
  return (
    <NFTProvider>
      <Router>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Layout>
      </Router>
    </NFTProvider>
  );
}

export default App;