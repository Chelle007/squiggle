import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import AddWishlist from './pages/AddWishlist';
import PrivateChat from './pages/PrivateChat';
import FriendProfile from './pages/FriendProfile';
import SubGroupChat from './pages/SubGroupChat';
import SubGroupChatBunny from './pages/SubGroupChatBunny';

// Main layout
function Layout({ children }) {
  return (
    <div className="flex">
      <main className="flex-1 p-4 bg-[var(--color-c-white-2)]">
        {children}
      </main>
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/chats" />} />
        <Route path="/chats" element={<Layout><Chats /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/add-wishlist" element={<Layout><AddWishlist /></Layout>} />
        <Route path="/private-chat" element={<PrivateChat />} />
        <Route path="/friend-profile" element={<Layout><FriendProfile /></Layout>} />
        <Route path="/sub-group-chat" element={<SubGroupChat />} />
        <Route path="/sub-group-chat/bunny" element={<SubGroupChatBunny />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
