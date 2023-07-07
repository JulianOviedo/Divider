import { useRef, useState } from "react"
import Member from "./Member"
import { useLocation } from "wouter"



interface GroupMembers {
    name: string
}

export default function AddPeople() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [people, setPeople] = useState<GroupMembers[]>([])
    const [, setLocation] = useLocation();

    const groupName = localStorage.getItem('groupName')



    const addPeople = () => {
        if (inputRef.current?.value) {
            setPeople([...people, { name: inputRef.current.value }])
            inputRef.current.value = ''
        }
    }

    const removePeople = (id: number) => {
        setPeople(people.filter((_, index) => index !== id))
    }


    return (
        <>
            <header className="flex flex-row justify-between items-center px-2">
                <h1 className="text-2xl font-bold text-center text-gray-700 p-4 flex-grow"> {groupName?.toUpperCase()}</h1>
                {people.length > 0 && <span onClick={() => setLocation('/add-bills')} className="bg-lime-500 text-gray-800 rounded-full px-4 py-2">⇨</span>}
            </header>
            <hr />
            <main className='flex justify-center flex-col items-center mt-6 gap-4 '>
                <p>Add people</p>
                <div className="mb-6">
                    <input ref={inputRef} className='rounded-lg p-2 w-72 text-black text-center' type="text" placeholder='Julian Oviedo' />
                    <button onClick={addPeople} className="ml-2 py-2 px-4 border rounded-xl">✓</button>
                </div>
                {people?.map((person, index) => (
                    <Member id={index} name={person.name} removePeople={removePeople} />
                ))}
            </main>
        </>
    )
}