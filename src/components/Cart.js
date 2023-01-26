import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera: {monsteraPrice}€</li>
                <li>Lierre: {ivyPrice}€</li>
                <li>Bouquet de fleurs: {flowerPrice}€</li>
            </ul>
            <p>Le prix total: {monsteraPrice + ivyPrice + flowerPrice}€</p>
        </div>
    )
}

export default Cart