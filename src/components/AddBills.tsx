import { useContext, useRef, useState } from "react";
import { PeopleContext } from "../context/PeopleContext";

interface GroupMembers {
    name: string;
    bill: number;
    id: string;
}

export default function addBills() {
    const { people, setPeople } = useContext(PeopleContext);
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [selectedPerson, setSelectedPerson] = useState<GroupMembers | null>(null);
    const billRef = useRef<HTMLInputElement>(null);

    const handleModal = (person: GroupMembers) => {
        setIsOpen(!isOpen);
        setSelectedPerson(person);
    };

    const handleBill = () => {
        const newBill = parseFloat(billRef.current?.value || "0");
        if (!isNaN(newBill) && selectedPerson) {
            const updatedPeople = people.map((person) => {
                if (person.id === selectedPerson.id) {
                    return { ...person, bill: newBill };
                }
                return person;
            });
            setPeople(updatedPeople);
        }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="flex justify-center py-2">
                <button className="bg-orange-200 text-slate-600 py-2 px-4 rounded-full">
                    Settle Bills
                </button>
            </header>
            <main className="relative z-10">
                {people.length > 0 &&
                    people.map((person) => {
                        return (
                            <>
                            <div
                                key={person.id}
                                className="flex flex-row justify-between px-4 py-2 items-center"
                            >
                                <span>{person.name}</span>
                                <div>
                                    <span>$ {person.bill}</span>
                                    <button
                                        onClick={() => handleModal(person)}
                                        className="rounded-full bg-lime-500 py-2 px-4 ml-2"
                                    >
                                        📝
                                    </button>
                                </div>
                            </div>
                            <hr />
                            </>
                        );
                    })}
                {isOpen && selectedPerson &&(
                    <div className="z-0 fixed top-[30%] right-[16%] bg-[#FCA91C] w-64 h-48 shadow-[0_0_0_100vmax_rgba(0,0,0,0.7)] transition-all duration-1000 flex items-center flex-col">
                        <h1 className="text-white text-center text-2xl">{selectedPerson.name}</h1>
                        <input
                            ref={billRef}
                            type="number"
                            className="bg-white rounded flex justify-center items-center p-2 mt-4 text-slate-700"
                            placeholder="Amount"
                        />
                        <button
                            onClick={handleBill}
                            className="mt-4 bg-orange-200 text-slate-600 py-2 px-4 rounded-full"
                        >
                            Save
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}
