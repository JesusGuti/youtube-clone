function MenuItem ({ icon, text, href }) {
    return (
        <li className="text-xsm flex justify-center rounded-md hover:bg-zinc-300/20 p-5">
            <a href={href}>
                {icon}
                <span>{text}</span>
            </a>
        </li>
    )
}

export default MenuItem
