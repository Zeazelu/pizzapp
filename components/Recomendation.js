import { useState } from 'react'
import styles from '../styles/Recomendation.module.css'
import Image from 'next/image';
import Link from 'next/link';
const allPizzas = [
  { name: 'Margherita', ingredients: ['sos pomidorowy', 'ser mozzarella', 'bazylia'], image: '/images/istockphoto-1168754685-612x612.jpg', path: `http://localhost:3000/product/6463fe638a69567f53f0bc30`},
  { name: 'Marinara', ingredients: ['sos pomidorowy', 'czosnek', 'oregano'], image: '/images/marinara.jpg', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Pepperoni', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pepperoni'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463ff3e8a69567f53f0bc5a` },
  { name: 'Hawajska', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'ananas'], image: '/images/istockphoto-503580316-170667a.jpg', path: `http://localhost:3000/product/6463ffb58a69567f53f0bc65` },
  { name: 'Capriciosa', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'oliwki'], image: '/images/Tavola-da-disegno-6.png', path: `http://localhost:3000/product/646400328a69567f53f0bc7e` },
  { name: 'Prosciutto e funghi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki'], image: '/images/pizza-prosciutto-e-funghi.jpg', path: `http://localhost:3000/product/6464007a8a69567f53f0bc8d` },
  { name: 'Quattro formaggi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'ser pleśniowy', 'ser gouda', 'parmezan'], image: '/images/pizza-quattro-formaggi.jpg', path: `http://localhost:3000/product/646400db8a69567f53f0bc9e` },
  { name: 'Calzone', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'cebula', 'jajko'], image: '/images/pizza.png', path: `http://localhost:3000/product/646401298a69567f53f0bcb1` },
  { name: 'Diavola', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pikantna papryczka', 'cebula'], image: '/images/Diavola-scaled.jpg', path: `http://localhost:3000/product/6464016b8a69567f53f0bcc6` },
  { name: 'Margherita con prosciutto', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'bazylia'], image: '/images/Prosciutto-scaled-600x600.jpg', path: `http://localhost:3000/product/646401d28a69567f53f0bd09` },
  { name: 'Quattro stagioni', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'karczochy', 'oliwki', 'cebula'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Tonno', ingredients: ['sos pomidorowy', 'ser mozzarella', 'tuńczyk', 'cebula', 'oliwki'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Vegetariana', ingredients: ['sos pomidorowy', 'ser mozzarella', 'papryka', 'pieczarki', 'cebula', 'oliwki'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Caprese', ingredients: ['sos pomidorowy', 'ser mozzarella', 'pomidory', 'bazylia'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Bianca', ingredients: ['ser mozzarella', 'ser ricotta', 'szpinak', 'czosnek'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Frutti di mare', ingredients: ['sos pomidorowy', 'ser mozzarella', 'owoce morza'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Salsiccia', ingredients: ['sos pomidorowy', 'ser mozzarella', 'włoska kiełbasa', 'papryka'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Quattro salumi', ingredients: ['sos pomidorowy', 'ser mozzarella', 'salami', 'szynka', 'kiełbasa', 'prosciutto'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` },
  { name: 'Tartufina', ingredients: ['sos pomidorowy', 'ser mozzarella', 'szynka', 'pieczarki', 'cebula', 'ser truflowy'], image: '/images/pizza.png', path: `http://localhost:3000/product/6463fefb8a69567f53f0bc51` }
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
        <><div>
          <Link href={recommendedPizza.path}>
            <Image src={recommendedPizza.image} alt="" width="350" height="350" />
            </Link>
          </div>
          <p className={styles.desc}>{recommendedPizza.name}</p>
        </>
      )}
    </div>
  );
};
  
  const Recommendation = () => <RecommendationSystem allPizzas={allPizzas} />;
  
  export default Recommendation;