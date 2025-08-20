import { useNoteContext } from "@/hook/use-note-provider";
import { Link } from "expo-router";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const { notes } = useNoteContext();
  return (
    <>
      <View style={styles.container}>
        <Text>Notes List</Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{ pathname: "/note/[id]", params: { id: String(item.id) } }}
            >
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.createdAt.toISOString()}</Text>
            </Link>
          )}
        />
        <Link href="/new-note">Add Note</Link>
        <Link
          href={{
            pathname: "/note/[id]",
            params: { id: "1" },
          }}
        >
          View Note by ID
        </Link>
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
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: "#007AFF",
  },
});
