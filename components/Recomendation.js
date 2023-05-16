import { useState } from 'react'
import styles from '../styles/Recomendation.module.css'
const allPizzas = [
  { name: 'Margherita', ingredients: ['sos pomidorowy', 'ser mozzarella', 'bazylia'] },
  { name: 'Marinara', ingredients: ['sos pomidorowy', 'czosnek', 'oregano'] },
  { name: 'Pepperoni', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pepperoni'] },
  { name: 'Hawajska', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'ananas'] },
  { name: 'Capriciosa', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'oliwki'] },
  { name: 'Prosciutto e funghi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki'] },
  { name: 'Quattro formaggi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'ser pleśniowy', 'ser gouda', 'parmezan'] },
  { name: 'Calzone', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'cebula', 'jajko'] },
  { name: 'Diavola', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pikantna papryczka', 'cebula'] },
  { name: 'Margherita con prosciutto', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'bazylia'] },
  { name: 'Quattro stagioni', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'karczochy', 'oliwki', 'cebula'] },
  { name: 'Tonno', ingredients: ['sos pomidorowy', 'ser mozzarella', 'tuńczyk', 'cebula', 'oliwki'] },
  { name: 'Vegetariana', ingredients: ['sos pomidorowy', 'ser mozzarella', 'papryka', 'pieczarki', 'cebula', 'oliwki'] },
  { name: 'Caprese', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pomidory', 'bazylia'] },
  { name: 'Bianca', ingredients: ['ser mozzarella', 'ser ricotta', 'szpinak', 'czosnek'] },
  { name: 'Frutti di mare', ingredients: ['sos pomidorowy', 'ser mozzarella', 'owoce morza'] },
  { name: 'Salsiccia', ingredients: ['sos pomidorowy', 'ser mozzarella', 'włoska kiełbasa', 'papryka'] },
  { name: 'Quattro salumi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'salami', 'szynka', 'kiełbasa', 'prosciutto'] },
  { name: 'Tartufina', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'cebula', 'ser truflowy'] }
  ]
  const RecommendationSystem = ({ allPizzas }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recommendedPizza, setRecommendedPizza] = useState(null);
    const [matchedPizzas, setMatchedPizzas] = useState([]);
  
    const handleSelectChange = (event) => {
      const selectedOptions = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
      setSelectedIngredients(selectedOptions);
    };
  
    const handleButtonClick = () => {
      const filteredPizzas = allPizzas.filter((pizza) => {
        return selectedIngredients.every((ingredient) =>
          pizza.ingredients.includes(ingredient)
        );
      });
  
      if (filteredPizzas.length === 0) {
        setMatchedPizzas([]);
        setRecommendedPizza(null);
        alert("Niestety, nie mamy pizzy z wybranymi składnikami.");
      } else {
        setMatchedPizzas(filteredPizzas);
        setRecommendedPizza(
          filteredPizzas[Math.floor(Math.random() * filteredPizzas.length)]
        );
      }
    };
  
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>SYSTEM REKOMENDACJI PIZZY</h1>
        <p className={styles.desc}>Wybierz składniki, które lubisz:</p>
        <select
          className={styles.select}
          multiple
          value={selectedIngredients}
          onChange={handleSelectChange}
        >
          {[
            'ser mozzarella',
            'sos pomidorowy',
            'pieczarki',
            'cebula',
            'papryka',
            'oliwki',
            'szynka',
            'tuńczyk',
            'karczochy',
            'ananas',
            'bazylia',
            'ser ricotta',
            'szpinak',
            'czosnek',
            'owoce morza',
            'włoska kiełbasa',
            'salami',
            'prosciutto',
            'ser truflowy',
          ].map((ingredient) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
        <button className={styles.button} onClick={handleButtonClick}>ZNAJDŹ PIZZĘ DLA MNIE!</button>
        <p className={styles.desc}>Wszystkie pasujące pizze:</p>
        {matchedPizzas.length > 0 && (
        <div>
          <ul>
            {matchedPizzas.map((pizza) => (
              <li key={pizza.name}>
                <strong>{pizza.name}</strong> - {pizza.ingredients.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className={styles.desc}>Twoja rekomendowana pizza:</p>
      {recommendedPizza && (
        <div>
          <strong>{recommendedPizza.name}</strong>
        </div>
      )}
    </div>
  );
};
  
  const Recommendation = () => <RecommendationSystem allPizzas={allPizzas} />;
  
  export default Recommendation;