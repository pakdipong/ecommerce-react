import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import productsData from "../products-data.json"
import Button from "../components/Button"

function Product() {
  const { id } = useParams()

  const data: any = productsData.find((product) => (
    product.id == id
  ))

  if (!data) {
    return (
      <>
        <Header />
        <div className="mx-auto mt-14 text-3xl font-bold">Product Not Fond</div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-6 md:gap-12 my-14">
          <div className="col-span-4 md:col-span-2">
            <img className="w-full" src={data.imageUrl} alt="" />
          </div>
          <div className="col-span-4 md:col-span-2 px-4 md:px-0">
            <h1 className="text-3xl font-bold">Product {data.id}</h1>
            <h1 className="text-xl font-bold my-6">${data.price}</h1>
            <Link to={'/checkout'}>
              <Button text="Add to Cart" />
            </Link>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque voluptas vitae, esse doloribus hic vel. Iusto corporis cum quibusdam itaque reprehenderit quia, atque natus officia. Illo similique eum nostrum!</p>
            <details className="collapse collapse-arrow rounded-none border-y">
              <summary className="collapse-title text-xl font-medium">Review(1)</summary>
              <div className="collapse-content">
                <div>
                  <h1 className="text-lg font-bold">Name</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product