import { NoteContext } from "@/context/note-context";
import { useContext } from "react";

export function useNoteContext() {
  const noteData = useContext(NoteContext);
  if (!noteData) {
    throw new Error("NoteData no está disponible");
  }
  return noteData;
}
