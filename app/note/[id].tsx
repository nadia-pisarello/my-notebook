import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useNoteContext } from "@/hook/use-note-context";

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const { getNoteById, updateNote, removeNote } = useNoteContext();

  const note = getNoteById(id as string);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  if (!note) return <Text>Nota no encontrada</Text>;

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.bodyInput]}
            value={content}
            onChangeText={setContent}
            multiline
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>{note.title}</Text>
          <Text>{note.content}</Text>
        </>
      )}

      <Button
        title={isEditing ? "Save" : "Edit"}
        onPress={() => {
          if (isEditing) {
            updateNote(note.id, { title, content } as Partial<typeof note>);
          }
          setIsEditing(!isEditing);
        }}
      />

      {!isEditing && (
        <Button
          title="Delete"
          color="red"
          onPress={() => removeNote(note.id)}
        />
      )}
      <Button
        title="Back"
        color="green"
        onPress={isEditing ? () => setIsEditing(false) : router.back}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
  bodyInput: { height: 100, textAlignVertical: "top" },
});
