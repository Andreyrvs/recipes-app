import React, { } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import IngredientsFoodsCheckbox from './IngredientsFoodsCheckbox';

function DrinksIngredients({ meals, dataMeals }) {
  return (
    <section className="receita">
      <section>
        <section className="container__image">
          <img
            className="image"
            data-testid="recipe-photo"
            src={ meals.strMealThumb }
            alt="strDrinkThumb"
          />
        </section>
        <section className="container__title-buttons">
          <section className="container__title">
            <span
              data-testid="recipe-title"
            >
              { meals.strDrink }
            </span>
            <span
              data-testid="recipe-category"
            >
              { meals.strCategory }
            </span>
          </section>
          <section className="container__buttons">
            <img
              height="26px"
              data-testid="share-btn"
              src={ shareIcon }
              alt="shareIcon"
            />
            <img
              height="26px"
              data-testid="favorite-btn"
              src={ whiteHeartIcon }
              alt="shareIcon"
            />
          </section>
        </section>
        <section className="container__ingredientes">
          <p>Ingredientes</p>
          <IngredientsFoodsCheckbox meals={ meals } dataMeals={ dataMeals } />
        </section>
        <section className="container__instructions">
          <span>Instructions</span>
          <p
            data-testid="instructions"
            className="instructions"
          >
            { meals.strInstructions }
          </p>
        </section>
        <section className="container__button">
          <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
        </section>
      </section>
    </section>
  );
}

DrinksIngredients.propTypes = {
  meals: PropTypes.object,
}.isRequire;

export default DrinksIngredients;
