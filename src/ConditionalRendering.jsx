const ConditionalRendering = () => {

  // an object to simulate the actual data from DB
 const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Phone", inStock: false },
  { id: 3, name: "Keyboard", inStock: true },
];
const filter1 = products.filter((p) => p.inStock)
const filter2 = products.filter((p) => !p.inStock)

  return (
    <>
    {/* trying out condtional rendering as part of my react journey */}
     {
      filter1.map((f) => (
        <div key={f.id}>
          <p>{f.name}</p>
          <p>available</p>
        </div>
      ))
     }
      {
        filter2.map((f2) => (
          <div key={f2.id}>
            <p>{f2.name}</p>
            <p>out of stock</p>
          </div>
        ))
      }

      {/* a cleaner and simpler way of rendering conditionally based on the data available than above. */}
      {
        products.map((p) =>(
          <div key={p.id}>
            <p>{p.name}</p>
            {p.inStock ? "available" : "out of stock"}
          </div>
        ))
      }
     <h1>building...</h1>
        </>
    )
}
export default ConditionalRendering