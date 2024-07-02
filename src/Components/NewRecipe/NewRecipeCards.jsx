import { React, useContext } from 'react'
import Cards from '../FamousRecipe/Cards'
import { RecipeContext } from '../../Data/RecipeData';
import LoadingSpinner from '../Home/LoadingSpinner';
function NewRecipeCards() {
    const { Recipes, SpinnerState } = useContext(RecipeContext);
    return (
        <> {Recipes !== undefined && SpinnerState === true ?
            <div className="album py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {Recipes.slice(2, 7).map((value, index) => {
                            return <Cards key={index} index={index} image={value.recipe.image} label={value.recipe.label} source={value.recipe.source} calories={value.recipe.calories} ingredientLines={value.recipe.ingredientLines} mealType={value.recipe.mealType} url={value.recipe.url} shareAs={value.recipe.shareAs} />
                        })}

                    </div>
                </div>
            </div> : <LoadingSpinner />}
        </>
    )
}

export default NewRecipeCards
