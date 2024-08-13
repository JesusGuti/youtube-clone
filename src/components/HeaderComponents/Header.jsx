import YoutubeIcon from "@icons/YoutubeIcon"
import SearchBar from "@components/HeaderComponents/SearchBar"
import UserCircle from "@components/UserComponents/UserCircle"
import NotificationButton from "@components/HeaderComponents/NotificationButton"
import MenuButton from "@components/HeaderComponents/MenuButton"

function Header () {
    return (
        <header className="[grid-area:header] flex flex-row w-full h-full p-5 mb-2 justify-between items-center sticky top-0 z-1 bg-youtube">
            <div className="flex gap-5">
                <MenuButton />
                <YoutubeIcon />
            </div>
            <SearchBar />
            <div className="flex gap-5 p-2">
                <NotificationButton />
                <UserCircle />
            </div>
        </header>
    )
}

export default Header
