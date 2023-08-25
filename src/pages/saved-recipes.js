import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://foodapp-abix.onrender.com/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <>
    <div>
    <h1 className="heading">Saved Recipes</h1>
  <div>
    {savedRecipes.map((recipe) => (
      <div class="save-card" key={recipe._id}>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <img src={recipe.imageUrl} alt={recipe.name} />
        <p>Cooking Time: {recipe.cookingTime} minutes</p>
      </div>
    ))}
  </div>
</div>
      </>
  );
};