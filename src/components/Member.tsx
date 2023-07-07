interface MemberProps {
    name: string
    id: number
    removePeople: (id: number) => void
}

export default function Member({ name, id, removePeople }: MemberProps) {
    return (
        <>
        <div key={id} className="flex flex-row w-full justify-between px-6 items-center">
            <span className="text-sm font-bold">{name}</span>
            <div>
            <button onClick={() => removePeople(id)} className="rounded-full bg-red-500 py-2 px-4 mr-2">X</button>
            </div>
        </div>
        <hr className="border-collapse border-slate-100 w-full"/>
        </>
    )
}