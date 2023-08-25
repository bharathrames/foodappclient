import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";


export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);


  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://foodapp-abix.onrender.com/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://foodapp-abix.onrender.com/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("https://foodapp-abix.onrender.com/recipes", { 
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  
  return (
    <>
    <h2 className="heading">Recepies</h2>
    <div className="recipes-container">
  {recipes.map((recipe) => (
    <div className="recipe-card" key={recipe._id}>
      <h2>{recipe.name}</h2>
      <button
        onClick={() => saveRecipe(recipe._id)}
        disabled={isRecipeSaved(recipe._id)}
      >
        {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
      </button>
      <div className="instructions">
        <p>{recipe.instructions}</p>
      </div>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
    </div>
  ))}
</div>
</>
    
  );
};





  




 
