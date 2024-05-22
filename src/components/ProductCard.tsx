import { Link } from "react-router-dom"

type ProductCardProps = {
    productId: string,
    imageUrl: string,
    price: number
}

function ProductCard({ productId, imageUrl, price }: ProductCardProps) {
    return (
        <div className="card w-full bg-base-100 rounded-1 p-1 hover:bg-base-300 duration-300">
            <figure>
                <Link to={`/product/${productId}`}>
                    <img className="w-full" src={imageUrl} alt="Product" />
                </Link>
            </figure>
            <div className="card-body p-1">
                <h2 className="card-title">
                    Product {productId}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ProductCard