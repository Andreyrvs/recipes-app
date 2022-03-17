import React, {
  // useEffect,
  useState,
} from 'react';

function IngredientsCheckbox({
  ingredients,
  routeInprogress,
  idDaReceita,
  // path,
}) {
  const [finishedPlate, setFinishedPlate] = useState([]);

  // useEffect(() => {
  //   const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   if (getLocal) {
  //     const { cocktails } = getLocal;
  //     if (cocktails[idDaReceita]) {
  //       setFinishedPlate(...cocktails[idDaReceita]);
  //       // console.log('cocktails', cocktails[idDaReceita][0]);
  //       // console.log('Passou');
  //     }
  //   }
  // }, [idDaReceita]);

  const handleChange = ({ target }) => {
    setFinishedPlate((prevState) => ({ ...prevState, [target.name]: target.checked }));

    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        cocktails: {
          [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
        },
        meals: {
          [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
        },
      },
    ));
  };

  return (
    <section className="d-flex flex-column">
      {ingredients.map((ingredient, indexIngredient) => (
        ingredient
        && (
          <div key={ indexIngredient }>
            {routeInprogress
         && (
           <label
             htmlFor={ ingredient }
             style={ { textDecoration: finishedPlate[ingredient] && 'line-through' } }
             data-testid={ `${indexIngredient}-ingredient-step` }
           >
             <input
               type="checkbox"
               id={ ingredient }
               checked={ finishedPlate[ingredient] }
               name={ ingredient }
               onChange={ handleChange }
             />
           </label>
         )}
            {ingredient}
          </div>
        )
      ))}
    </section>
  );
}

IngredientsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsCheckbox;

// const getLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
// if (getLocal) {
//   const { meals } = getLocal;
//   const { cocktails } = getLocal;
//   if (path === '/foods/:idDaReceita/in-progress') {
//     localStorage.setItem('inProgressRecipes', JSON.stringify(
//       {
//         cocktails: {
//           ...cocktails,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//         meals: {
//           ...meals,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//       },
//     ));
//   }
//   if (path === '/drinks/:idDaReceita/in-progress') {
//     localStorage.setItem('inProgressRecipes', JSON.stringify(
//       {
//         cocktails: {
//           ...cocktails,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//         meals: {
//           ...meals,
//           [idDaReceita]: [{ ...finishedPlate, [target.name]: target.checked }],
//         },
//       },
//     ));
//   }
// }
