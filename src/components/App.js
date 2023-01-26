import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import '../styles/Main.scss'

function App() {
  return (
    <div>
      <Banner />
      <main>
        <h2>hello</h2>
        <div className="button">button</div>
        <section>
          <ShoppingList />
        </section>
      </main>
      <aside>
        <Cart />
      </aside>
    </div>
  );
}

export default App;
