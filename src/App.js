import "./styles.css";
import { useState } from "react";

/**
 * Welcome! We are going to go through a comprehensive demo
 * of how to create components, interactions, and manage state
 * in React.
 *
 * 1. Create a table with one stock
 * 2. Add button to simulate random price
 * 3. Buy/Sell buttons
 * 4. Update portfolio values, quantity
 * 5. Cash, validate buy and sell orders
 * 6. Day counter
 * 7. Order history
 * 8. More stocks?
 * 9. Search bar
 * 10. How do we make this look better?
 *
 * NOTE: if you are having trouble following along, please
 * check out: `index-complete.js` for the full working demo.
 */
export default function App() {
  /**
   * 1. Getter function: reads value of state
   * 2. Setter function: lets you change the value of state
   * 3. Initial value
   */
  const initialPrice = 100;
  const [price, setPrice] = useState(initialPrice); // javascript
  const [tradeType, setTradeType] = useState("buy");
  const [quantity, setQuantity] = useState(0);
  const [shares, setShares] = useState(10);
  const [cash, setCash] = useState(10000);

  function simulate() {
    // Are you buying or selling
    let quantityInt = parseInt(quantity);
    if (tradeType === "buy") {
      setShares(shares + quantityInt);
      setCash(cash - quantityInt * price);
    } else {
      // Sell
      setShares(shares - quantityInt);
      setCash(cash + quantityInt * price);
    }

    // Update our portfolio accordingly

    setPrice(price + 5 * (0.5 - Math.random()));
  }

  function onTradeTypeChange(event) {
    setTradeType(event.target.value);
  }

  function onQuantityChange(event) {
    setQuantity(event.target.value);
  }

  // below is html
  // curly braces for JS
  return (
    <>
      <h1>Trading Simulator - Michael</h1>
      <table>
        <tbody>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Total</th>
            <th>Action</th>
            <th>Quantity</th>
          </tr>

          <tr>
            <td>$SPY</td>
            <td>${price.toFixed(2)}</td>
            <td>{shares}</td>
            <td>${(shares * price).toFixed(2)}</td>
            <td>
              <select value={tradeType} onChange={onTradeTypeChange}>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
            </td>
            <td>
              <input value={quantity} onChange={onQuantityChange}></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={simulate}>Simulate!</button>
      <br></br>
      Cash: ${cash}
      <br></br>
      {tradeType},{quantity}
    </>
  );
}
