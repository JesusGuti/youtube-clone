import ThreeLines from "./icons/ThreeLines"
import YoutubeIcon from "./icons/YoutubeIcon"
import SearchBar from "./HeaderComponents/SearchBar"
import UserCircle from "./UserComponents/UserCircle"

function Header () {
    return (
        <header className="flex flex-row w-full p-5 gap-6 items-center">
            <ThreeLines />
            <YoutubeIcon />
            <SearchBar />
            <UserCircle />
        </header>
    )
}

export default Header
