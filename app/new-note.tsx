import { useNoteContext } from "@/hook/use-note-context";
import { Note } from "@/type/note";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function NewNote() {
  const { addNote } = useNoteContext();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleAddNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: noteTitle,
      content: noteContent,
      createdAt: new Date(),
    };
    addNote(newNote);
    router.back();
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          value={noteTitle}
          onChangeText={setNoteTitle}
        />
        <TextInput
          placeholder="Content"
          value={noteContent}
          onChangeText={setNoteContent}
          multiline
        />
        <Button title="Add Note" onPress={handleAddNote} />
        <Button title="Cancel" onPress={() => router.back()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
