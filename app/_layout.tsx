import { NotesProvider } from "@/provider/notes-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NotesProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen options={{ title: "Home" }} name="index" />
        <Stack.Screen options={{ title: "Add Note" }} name="new-note" />
        <Stack.Screen options={{ title: "Note" }} name="note" />
      </Stack>
    </NotesProvider>
  );
}
