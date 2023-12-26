async function fetchData() {
  const res = await fetch(
    "https://63046ed0761a3bce77e78e9c.mockapi.io/api/users",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data;
}

export default async function Isr({ users }) {
  const data = await fetchData(users);
  return (
    <div>
      <h1>Incremental Static Regeneration</h1>
      <ul>
        {data.map((v) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
    </div>
  );
}
