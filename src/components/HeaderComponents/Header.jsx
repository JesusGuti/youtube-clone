import YoutubeIcon from "@icons/YoutubeIcon"
import SearchBar from "@components/HeaderComponents/SearchBar"
import UserCircle from "@components/UserComponents/UserCircle"
import NotificationButton from "@components/HeaderComponents/NotificationButton"
import MenuButton from "@components/HeaderComponents/MenuButton"

function Header () {
    return (
        <header className="[grid-area:header] flex flex-row  w-full h-14 p-6 justify-between items-center sticky">
            <div className="flex gap-5">
                <MenuButton />
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
