import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import SearchPage from "./pages/search/SearchPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import BookmarkPage from "./pages/bookmark/BookmarkPage";
import WritePage from "./pages/write/WritePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
