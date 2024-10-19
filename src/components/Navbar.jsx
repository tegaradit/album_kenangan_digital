export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-200 text-white z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Guru</a></li>
                            <li>
                                <a>Organisasi</a>
                                <ul className="p-2 text-base-100">
                                    <li><a>osis</a></li>
                                    <li><a>PMR</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-xl">CIPTA IT</a>
                </div>  
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li><a href="/guru">Guru</a></li>
                        <li>
                            <details>
                                <summary>Organisasi</summary>
                                <ul className="p-2 bg-white text-black">
                                    <li><a href="/osis">OSIS</a></li>
                                    <li><a href="/pmr">PMR</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"></a>
                </div>
            </div>
        </>
    )
}