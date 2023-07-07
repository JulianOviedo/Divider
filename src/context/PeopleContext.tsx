import { createContext } from "react";
import { GroupMembers } from "../types";

interface PeopleContextProps {
  people: GroupMembers[];
  setPeople: React.Dispatch<React.SetStateAction<GroupMembers[]>>;
}

export const PeopleContext = createContext<PeopleContextProps>({
  people: [],
  setPeople: () => {},
});
