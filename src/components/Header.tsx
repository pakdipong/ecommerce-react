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
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://fastly.picsum.photos/id/497/200/200.jpg?hmac=pD3JCR-6DQCB69-sRAmzUn-m8I5V-ugaHUuCKh9gAFU" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header