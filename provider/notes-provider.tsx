import { NoteContext } from "@/context/note-context";
import { Note } from "@/type/note";
import { ReactNode, useState } from "react";

type NotesProviderProps = {
  children: ReactNode;
};

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const addNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  const removeNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const updateNote = (id: string, updatedNote: Partial<Note>) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === id ? { ...n, ...updatedNote } : n))
    );
  };
  const getNoteById = (id: string) => {
    return notes.find((n) => n.id === id);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, removeNote, updateNote, getNoteById }}
    >
      {" "}
      {children}
    </NoteContext.Provider>
  );
}
