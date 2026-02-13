import { Link } from "react-router"
import { NAV_LINKS } from "../../utils"

function Nav() {
    return (
        <nav className="z-10 bg-white shadow-md w-56 fixed flex flex-col justify-between top-0 left-0 bottom-0">
            <Link to={'/private/declarations'}
                className="bg-blue-600 text-center italic text-white uppercase rounded-sm py-5 font-extrabold ">
                HEALTHcare </Link>
            <ul>
                {NAV_LINKS.map(({ to, label }, index) => (
                    <li key={`navlink-${index}`} className={`border-b border-gray-300 ${index === 0 ? "border-t" : null}`}>
                        < Link to={to} className="py-1 pl-2 italic font-bold hover:bg-gray-200 block" >
                            {label}
                        </Link>
                    </li>
                ))
                }

            </ul >
            <button type="button" onClick={() => null} className="bg-red-700  rounded-sm text-white hover:text-red-700 py-2 font-bold hover:border hover:border-red-700 hover:bg-white">
                Déconnexion
            </button>
        </nav >
    )
}

export default Nav