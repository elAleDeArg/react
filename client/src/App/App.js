import { PostForm, HomePage, NotFoundPage } from "../pages/index";
import { Routes, Route } from "react-router-dom";
import { PostContainer } from "../context/postContext";

function App() {
  return (
    <div className="bg-neutral-500 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  );
}
export default App;
