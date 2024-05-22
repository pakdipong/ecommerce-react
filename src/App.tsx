import Header from "./components/Header"
import Footer from "./components/Footer"
import productsData from './products-data.json'
import ProductCard from "./components/ProductCard"


function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="hero min-h-full bg-base-200 py-6">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome to myShop</h1>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sit, quasi sint vitae eligendi sed totam dolore soluta inventore dolor sapiente beatae velit optio illo corporis pariatur perspiciatis quaerat voluptatem?</p>
            </div>
          </div>
        </div>
        <div className="text-xl font-bold my-6 px-4 md:px-0">New Products</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-14">
          {
            productsData.map((product, index) => (
              <ProductCard
                key={index}
                productId={product.id}
                imageUrl={product.imageUrl}
                price={product.price}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
