"use client";

import { useState } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { Heading2 } from "../components/Headings";

export default function FindRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // https://api-ninjas.com/profile
  const validateIngredient = async (ingredient: string): Promise<boolean> => {
    try {
      const response = await axios.post("/api/validateIngredient", {
        ingredient,
      });
      console.log(response.data); // Inspect response data
      return response.data.length > 0; // Ingredient is valid if the response contains data
    } catch (error) {
      console.error("Error validating ingredient:", error);
      return false;
    }
  };

  const handleAddIngredient = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (ingredients.trim() === "") {
      setError("Please enter at least one ingredient.");
      return;
    }

    // Split the ingredients by comma or space and remove duplicates
    const inputIngredients = ingredients
      .split(/[, ]+/)
      .map((ing) => ing.trim())
      .filter((ing) => ing.length > 0);

    const newValidIngredients: string[] = [];
    const invalidIngredients: string[] = [];

    for (const ingredient of inputIngredients) {
      const isValid = await validateIngredient(ingredient);
      if (isValid) {
        if (!ingredientList.includes(ingredient)) {
          newValidIngredients.push(ingredient);
        }
      } else {
        invalidIngredients.push(ingredient);
      }
    }

    // Update state with new valid ingredients
    if (newValidIngredients.length > 0) {
      setIngredientList([...ingredientList, ...newValidIngredients]);
    }

    // Set error message for invalid ingredients
    if (invalidIngredients.length > 0) {
      setError(
        `Invalid ingredients: ${invalidIngredients.join(
          ", ",
        )}. Please correct and try again.`,
      );
    }

    // Clear the input field
    setIngredients("");
  };

  const handleRemoveIngredient = (ingredient: string): void => {
    setIngredientList(
      ingredientList.filter((item: string) => item !== ingredient),
    );
  };

  const handleClearIngredients = (): void => {
    setIngredientList([]);
    setError(null);
  };

  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[60svh] flex-col items-start md:mt-10">
        <Heading2 className="mb-6 mt-10">Find Recipe</Heading2>
        <div>
          <p className="text-lg">
            Enter the ingredients you have on hand in the input below and choose
            filters. We will return a list of recipes that you can make with the
            ingredients you entered.
          </p>
          <div className="mt-6">
            <form
              onSubmit={handleAddIngredient}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Add ingredients..."
                className="flex-grow rounded-xl border border-[var(--primary)] p-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-[var(--primary)] px-4 py-2 text-white"
              >
                Add
              </button>
            </form>
          </div>
          {error && <p className="mt-2 text-red-500">{error}</p>}

          {/* Display Ingredients as Tags */}
          <div className="mt-4">
            {ingredientList.length > 0 && (
              <div>
                <div className="mb-4 flex flex-wrap gap-4">
                  {ingredientList.map((ingredient, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm"
                    >
                      {ingredient}
                      <button
                        onClick={() => handleRemoveIngredient(ingredient)}
                        className="text-red-500 transition-all duration-300 ease-in-out hover:text-[var(--primary)]"
                        aria-label={`Remove ${ingredient}`}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleClearIngredients}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-[var(--text-nav)] transition-all duration-300 ease-in-out hover:bg-red-600"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mt-6">
          <h3 className="mb-4 text-xl font-semibold">Filter Recipes</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Cuisine Filter */}
            <div>
              <label className="mb-2 block font-medium" htmlFor="cuisine">
                Cuisine
              </label>
              <select
                id="cuisine"
                className="w-full rounded-lg border border-gray-300 p-2"
              >
                <option value="">All Cuisines</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="french">French</option>
              </select>
            </div>

            {/* Meal Type Filter */}
            <div>
              <label className="mb-2 block font-medium" htmlFor="mealType">
                Meal Type
              </label>
              <select
                id="mealType"
                className="w-full rounded-lg border border-gray-300 p-2"
              >
                <option value="">All Meal Types</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>

            {/* Dietary Preferences */}
            <div>
              <label className="mb-2 block font-medium" htmlFor="diet">
                Dietary Preferences
              </label>
              <select
                id="diet"
                className="w-full rounded-lg border border-gray-300 p-2"
              >
                <option value="">All Diets</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="keto">Keto</option>
                <option value="paleo">Paleo</option>
              </select>

              {/* Descriptions */}
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Vegetarian:</strong> Excludes meat and seafood, but
                  includes eggs and dairy.
                </p>
                <p>
                  <strong>Vegan:</strong> Excludes all animal products,
                  including eggs, dairy, and honey.
                </p>
                <p>
                  <strong>Gluten-Free:</strong> Avoids gluten-containing
                  ingredients like wheat, rye, and barley.
                </p>
                <p>
                  <strong>Keto:</strong> Focuses on low-carb, high-fat recipes
                  to maintain ketosis.
                </p>
                <p>
                  <strong>Paleo:</strong> Inspired by Paleolithic diets, avoids
                  processed food, grains, and dairy.
                </p>
              </div>
            </div>

            {/* Cooking Time */}
            <div>
              <label className="mb-2 block font-medium" htmlFor="cookingTime">
                Cooking Time
              </label>
              <select
                id="cookingTime"
                className="w-full rounded-lg border border-gray-300 p-2"
              >
                <option value="">Any Time</option>
                <option value="15">Under 15 minutes</option>
                <option value="30">Under 30 minutes</option>
                <option value="60">Under 1 hour</option>
                <option value="120">1+ hour</option>
              </select>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="mb-2 block font-medium" htmlFor="difficulty">
                Difficulty Level
              </label>
              <select
                id="difficulty"
                className="w-full rounded-lg border border-gray-300 p-2"
              >
                <option value="">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="w-full rounded-lg bg-[var(--accent)] p-3 font-semibold text-[var(--text-nav)] transition-all duration-300 ease-in-out hover:bg-[var(--primary)] hover:text-[var(--text-nav)]">
            Search Recipes
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
