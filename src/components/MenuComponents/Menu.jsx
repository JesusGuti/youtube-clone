import HomeIcon from "@icons/HomeIcon"
import ShortsIcon from "@icons/ShortsIcon"
import SubscriptionIcon from "@icons/SubscriptionsIcon"
import YouIcon from "@icons/YouIcon"
import MenuItem from "./MenuItem"

function Menu () {
    return (
        <aside className="[grid-area:menu] fixed">
            <nav>
                <ul className="list-none p-2">
                    <MenuItem icon={<HomeIcon />} text="Principal" href="#" />
                    <MenuItem icon={<ShortsIcon />} text="Shorts" href="#" />
                    <MenuItem icon={<SubscriptionIcon />} text="Subscriptions" href="#" />
                    <MenuItem icon={<YouIcon />} text="You" href="#" />
                </ul>
            </nav>
        </aside>
    )
}

export default Menu
