import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import FotoRecomendation from './FotoRecomendation';
import IngredientsCheckbox from '../../components/IngredientsCheckbox';
import MyContext from '../../context';

function RecipieRenderization(props) {
  const {
    detailsRecipies,
    path,
    nameRoute,
    ingredients,
    ingredientMeasure,
    history,
    idDaReceita,
    // routeInprogress,
  } = props;
  const { routeInprogress, setRouteInprogress, continueRecipe } = useContext(MyContext);
  const [buttonsDetails, setButtonsDetails] = useState('Start Recipe');

  console.log(routeInprogress);

  const srcThumb = `str${nameRoute}Thumb`;
  const title = `str${nameRoute}`;

  const pathSplit = path.split(':idDaReceita');
  const startRecipe = `${pathSplit[0]}${idDaReceita}/in-progress`;

  const handleSrcYoutube = (strYoutube) => {
    const srcInitial = strYoutube.split('watch?v=');
    const srcFinal = `${srcInitial[0]}/embed/${srcInitial[1]}`;
    return srcFinal;
  };

  useEffect(() => {
    if (continueRecipe[idDaReceita]) {
      setButtonsDetails('Continue Recipe');
    }
  }, []);

  useEffect(() => {
    if (path === '/foods/:idDaReceita/in-progress') {
      setRouteInprogress(true);
    }
    if (path === '/drinks/:idDaReceita/in-progress') {
      setRouteInprogress(true);
    }
  }, []);

  const handleClick = () => {
    setRouteInprogress(true);
    history.push(startRecipe);
  };

  const filter = () => (
    detailsRecipies
      .map((result, index) => (
        <section key={ index }>
          <img
            data-testid="recipe-photo"
            src={ result[srcThumb] }
            height="200px"
            max-width="360px"
            width="100%"
            alt={ result[title] }
          />
          <section className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p data-testid="recipe-title">{ result[title] }</p>
              <section data-testid="recipe-category">
                <span>
                  { result.strCategory }
                </span>
                <p>
                  {result.strAlcoholic}
                </p>
              </section>
            </div>
            <section className="d-flex">
              <button data-testid="share-btn" type="button">
                <img src={ shareIcon } alt="shareIcon" />
              </button>
              <button data-testid="favorite-btn" type="button">
                <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
              </button>
            </section>
          </section>
          <IngredientsCheckbox
            idDaReceita={ idDaReceita }
            ingredients={ ingredients }
            path={ path }
            routeInprogress={ routeInprogress }
            ingredientMeasure={ ingredientMeasure }
          />
          <p
            className="p-3"
            data-testid="instructions"
          >
            Instructions:
            <br />
            { result.strInstructions }
          </p>
          {!routeInprogress
          && (
            <section>
              {result.strYoutube
          && (
            <iframe
              data-testid="video"
              width="360"
              height="215"
              src={ handleSrcYoutube(result.strYoutube) }
              title="YouTube video player"
            />
          )}
              <FotoRecomendation
                path={ path }
                nameRoute={ nameRoute }
              />
            </section>
          )}
          <div>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="button__startRecipe"
              onClick={ handleClick }
            >
              {buttonsDetails}
            </button>

          </div>
        </section>
      ))
  );

  return (
    <>
      {filter()}
    </>
  );
}

RecipieRenderization.propTypes = {
  path: PropTypes.string,
  detailsRecipies: PropTypes.node,
}.isRequire;

export default RecipieRenderization;
