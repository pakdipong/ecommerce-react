import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-base-100 shadow">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="flex-1">
                        <Link to={'/'}>
                            <button className="btn btn-ghost text-xl">myShop</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header