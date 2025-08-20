import { Note } from "@/type/note";
import { createContext } from "react";

type NoteContextType = {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  updateNote: (id: string, updatedNote: Partial<Note>) => void;
  getNoteById: (id: string) => Note | undefined;
  getAllNotes: () => Note[];
};
export const NoteContext = createContext<NoteContextType>({
  notes: [],
  addNote: () => {},
  removeNote: () => {},
  updateNote: () => {},
  getNoteById: () => undefined,
  getAllNotes: () => [],
});
