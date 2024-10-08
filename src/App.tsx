import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import ArticleDetail from "./routes/articles/article-detail";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/article/:id" element={<ArticleDetail/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
