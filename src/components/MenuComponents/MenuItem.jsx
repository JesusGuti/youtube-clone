function MenuItem ({ icon, text, href }) {
    return (
        <li className="text-xsm flex justify-center rounded-md hover:bg-zinc-300/20 mb-10 ml-1">
            <a href={href}>
                {icon}
                <span>{text}</span>
            </a>
        </li>
    )
}

export default MenuItem
