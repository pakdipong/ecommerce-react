import { Link } from "react-router-dom"

type ProductCardProps = {
    productId: string,
    imageUrl: string,
    price: number
}

function ProductCard({ productId, imageUrl, price }: ProductCardProps) {
    return (
        <Link to={`/product/${productId}`}>
            <div className="card w-full bg-base-100 rounded-1 p-1 border-2 hover:bg-base-300 duration-300">
                <figure>
                    <img className="w-full" src={imageUrl} alt="Product" />
                </figure>
                <div className="card-body p-1">
                    <h2 className="card-title justify-between">
                        Product {productId}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard