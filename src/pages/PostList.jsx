import { useLoaderData } from "react-router";

export default function PostList() {
  const notes = useLoaderData();
  return (
    <div>
      <form>
        <input type="text" />
        <button>create post</button>
      </form>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <h1>{note.title}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const loader = async () => {
  const response = await fetch(`http://localhost:3000/posts`);
  const data = await response.json();
  return data;
};
