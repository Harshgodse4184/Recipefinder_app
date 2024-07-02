import { useState } from 'react'
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer'
import Home from './Components/Home/Home'
import FamousRecipe from './Components/FamousRecipe/FamousRecipe'
import NewRecipe from './Components/NewRecipe/NewRecipe'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDataProvider from './Data/RecipeData'
function App() {
  return (
    <>

      <RecipeDataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/famousRecipe" element={<FamousRecipe />} />
            <Route path="/newRecipe" element={<NewRecipe />} />
            <Route path="/newRecipe/famousRecipe" element={<FamousRecipe />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecipeDataProvider>
    </>
  )
}

export default App
