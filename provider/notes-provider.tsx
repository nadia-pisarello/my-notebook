import { NoteContext } from "@/context/note-context";
import { Note } from "@/type/note";
import { ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type NotesProviderProps = {
  children: ReactNode;
};

const NOTES_STORAGE_KEY = "NOTES_APP_STORAGE";

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error("Failed to load notes from storage:", error);
      }
    };
    loadNotes();
  }, []);

  useEffect(() => {
    const saveNotes = async (newNotes: Note[]) => {
      try {
        await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(newNotes));
      } catch (error) {
        console.error("Failed to save notes to storage:", error);
      }
    };
    saveNotes(notes);
  }, [notes]);

  const addNote = (note: Note) => {
    setNotes((newNotes: Note[]) => [...newNotes, note]);
  };
  const removeNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const updateNote = (id: string, updatedNote: Partial<Note>) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === id ? { ...n, ...updatedNote } : n))
    );
  };
  const getNoteById = (id: string) => notes.find((n) => n.id === id);

  const getAllNotes = () => notes;

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        updateNote,
        getNoteById,
        getAllNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
