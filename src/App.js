import "./App.css";
import Footer from "./footer";

function Card(props) {
  return (
    <article>
      <h2>{props.type}</h2>
      <p>{props.size}</p>
      <p>{props.price}</p>
      <button>Køb nu</button>
    </article>
  );
}

function CardList(props) {
  const mappedData = props.products.map((product) => <Card {...product} />);
  return (
    <ul>
      <li>{mappedData}</li>
    </ul>
  );
}

function App(props) {
  const products = [
    {
      type: "Tshirt",
      size: "Medium",
      price: 2515,
    },
    {
      type: "Pants",
      size: "Large",
      price: 2675,
    },
    {
      type: "Dress",
      size: "Small",
      price: 3675,
    },
    {
      type: "Jacket",
      size: "Medium",
      price: 4687,
    },
  ];
  const links = [
    {
      name: "Fronter",
      aLink: "https://kea-fronter.itslearning.com/",
    },
    {
      name: "IKEA",
      aLink: "https://www.ikea.com/",
    },
  ];

  return (
    <div className="app">
      <h1>Hello World</h1>
      <main>
        <section>
          <CardList products={products} />
        </section>
      </main>
      <Footer links={links}></Footer>
    </div>
  );
}

export default App;
