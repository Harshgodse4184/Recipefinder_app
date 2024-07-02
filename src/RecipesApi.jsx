import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipesApi() {
    // const [query, setQuery] = useState('');
    // const [recipes, setRecipes] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const YOUR_APP_ID = 'ccdd911a';
    // const YOUR_APP_KEY = '08ad675a25ae98de77f5b765322f9efe';

    // const fetchRecipes = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(
    //             `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    //         );
    //         setRecipes(response.data.hits);
    //     } catch (error) {
    //         console.error('Error fetching recipes:', error);
    //     }
    //     setLoading(false);
    // };

    // const handleChange = (event) => {
    //     setQuery(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetchRecipes();
    // };
    const YOUR_APP_ID = 'ccdd911a';
    const YOUR_APP_KEY = '08ad675a25ae98de77f5b765322f9efe';
    let API = `https://api.edamam.com/search?q=${"egg"}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    const fetchAPIData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAPIData(API);
    }, []);


    return (
        // <div>
        //     <h1>Edamam Recipe Search</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             placeholder="Search for recipes..."
        //             value={query}
        //             onChange={handleChange}
        //         />
        //         <button type="submit">Search</button>
        //     </form>
        //     {loading && <p>Loading...</p>}
        //     <div>
        //         {recipes.map((recipe, index) => (
        //             <div key={index}>
        //                 <h2>{recipe.recipe.label}</h2>
        //                 <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        //                 <ul>
        //                     {recipe.recipe.ingredients.map((ingredient, index) => (
        //                         <li key={index}>{ingredient.text}</li>
        //                     ))}
        //                 </ul>
        //                 <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
        //                     View Recipe
        //                 </a>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <h1>Nkhil</h1>
    );
}

export default RecipesApi;
