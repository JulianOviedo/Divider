import { createContext } from "react";

interface GroupMembers {
    id: string
    name: string;
    bill: number
  }

interface PeopleContextProps {
  people: GroupMembers[];
  setPeople: React.Dispatch<React.SetStateAction<GroupMembers[]>>;
}

export const PeopleContext = createContext<PeopleContextProps>({
  people: [],
  setPeople: () => {},
});
