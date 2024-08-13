import UserCircle from "@components/UserComponents/UserCircle"
import ThreeDots from "@icons/ThreeDots"
import ThumbnailTimer from "./ThumbnailTimer"

function Thumbnail () {
    return (
        <div className="h-fit relative -z-[1]">
            <img className="w-full box-border rounded-xl" src="thumbnail.jpg" alt="thumbnail" />
            <ThumbnailTimer />
            <aside className="flex flex-row gap-3 mt-3">
                <UserCircle />
                <div className="flex-1 flex flex-col">
                    <span className="mb-1 font-semibold w-full line-clamp-2">
                        Los programadores quieren cobrar por resolver pruebas técnicas donde quieren el mejor salario posible y ya no seguir aprendiendo
                    </span>
                    <small className="text-md text-slate-400">
                        midulive
                    </small>
                    <small className="text-md text-slate-400">
                        20k visitas hace 5 horas
                    </small>
                </div>
                <ThreeDots />
            </aside>
        </div>
    )
}

export default Thumbnail
