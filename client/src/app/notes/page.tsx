"use client"
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postNote = async () => {
    // Your Django backend API URL for creating a note
    const apiUrl = "http://127.0.0.1:8000/notes/api/notes/";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
					
          "Content-Type": "application/json",
          // Include any additional headers, e.g., authentication headers
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (response.ok) {
        console.log("Note created successfully");
        // You can handle success here, e.g., redirect to another page or update state
      } else {
        console.error("Failed to create note");
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* ... your existing JSX code ... */}
        <div>Title :</div>
        <input
          className="text-neutral-950 text-center h-fit inline-flex"
          name="title"
          type="text"
          placeholder="max length 100 chars"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <div>Description :</div>
        <input
          className="text-neutral-950 text-center h-fit inline-flex"
          name="description"
          type="text"
          placeholder="max length 1000 chars"
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <button onClick={postNote}>Post Note</button>
      </main>
    </>
  );
}
