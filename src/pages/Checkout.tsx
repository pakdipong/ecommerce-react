import { Navigate } from 'react-router-dom'
import AmountDue from "../components/AmountDue"
import CheckoutForm from "../components/CheckoutForm"
import Footer from "../components/Footer"
import Header from "../components/Header"

export type DataProps = {
  id: string,
  imageUrl: string,
  price: number
}

function Checkout() {
  const item = localStorage.getItem('item')
  if (!item) {
    return (<Navigate to="/" replace />)
  } else {
    const data: DataProps = JSON.parse(item)
    return (
      <>
        <Header />
        <div className="container mx-auto">
          <div className="grid grid-cols-4 border my-14">
            <div className="col-span-4 lg:col-span-2">
              <CheckoutForm />
            </div>
            <div className="col-span-4 lg:col-span-2 order-first lg:order-last bg-neutral text-neutral-content">
              <AmountDue data={data} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Checkout