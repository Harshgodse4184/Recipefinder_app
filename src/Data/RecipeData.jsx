import { createContext, useContext, useReducer, useEffect, useState } from "react"
const RecipeContext = createContext({
    Recipes: [],
    RecipeSearchHeader: () => { },
    SpinnerState: ""
})
const RecipesReducer = (Recipes, action) => {
    let NewRecipes = Recipes;
    if (action.type === "Add_Recipes") {
        NewRecipes = action.payload.recipes;
    } else if (action.type === "Set_Empty") {
        NewRecipes = [];
    }
    return NewRecipes;

}
const RecipeDataProvider = ({ children }) => {
    const [Recipes, dispatchRecipes] = useReducer(RecipesReducer, []);
    // console.log(Recipes);
    const addRecipes = (recipes) => {
        dispatchRecipes({
            type: "Add_Recipes",
            payload: {
                recipes
            }
        })
    }
    const [RecipeSearch, setSearchItem] = useState("banana");
    const [SpinnerState, setSpinnerState] = useState(false);
    const RecipeSearchHeader = (item) => {
        dispatchRecipes({
            type: "Set_Empty"
        })
        setSearchItem(item);
        // console.log(item);
    }
    // console.log(RecipeSearch)
    const YOUR_APP_ID = 'ccdd911a';
    const YOUR_APP_KEY = '08ad675a25ae98de77f5b765322f9efe';
    let API = `https://api.edamam.com/search?q=${RecipeSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    const fetchAPIData = async (url) => {
        // console.log(RecipeSearch);
        try {
            const res = await fetch(url);
            const data = await res.json();
            addRecipes(data.hits);
            setSpinnerState(true);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAPIData(API);
    }, [RecipeSearch]);
    return <RecipeContext.Provider value={{ Recipes: Recipes, RecipeSearchHeader: RecipeSearchHeader, SpinnerState: SpinnerState }}>
        {children}
    </RecipeContext.Provider>
}
export default RecipeDataProvider;
export { RecipeContext }