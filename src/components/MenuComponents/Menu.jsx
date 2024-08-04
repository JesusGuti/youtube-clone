import HomeIcon from "@icons/HomeIcon"

function Menu () {
    return (
        <aside className="[grid-area:menu] p-1">
            <nav className="bg-slate-800">
                <ul>
                    <li className="text-xsm p-5">
                        <a href="#" className="flex flex-col justify-center">
                            <HomeIcon />
                            Principal
                        </a>
                    </li>
                    <li className="text-xsm p-5">
                        <a href="">
                            Shorts
                        </a>
                    </li>
                    <li className="text-xsm p-5">
                        <a href="">
                            Principal
                        </a>
                    </li>
                    <li className="text-xsm p-5">
                        <a href="">
                            Principal
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu
