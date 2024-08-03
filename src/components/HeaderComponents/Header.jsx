import ThreeLines from "@icons/ThreeLines"
import YoutubeIcon from "@icons/YoutubeIcon"
import SearchBar from "@components/HeaderComponents/SearchBar"
import UserCircle from "@components/UserComponents/UserCircle"
import NotificationButton from "@components/HeaderComponents/NotificationButton"

function Header () {
    return (
        <header className="flex flex-row w-full h-14 p-6 justify-between items-center sticky">
            <div className="flex gap-5">
                <ThreeLines />
                <YoutubeIcon />
            </div>
            <SearchBar />
            <div className="flex gap-5">
                <NotificationButton />
                <UserCircle />
            </div>
        </header>
    )
}

export default Header
