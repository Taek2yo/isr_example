async function fetchData() {
  const res = await fetch(
    "https://63046ed0761a3bce77e78e9c.mockapi.io/api/users",
    { cache: 'no-store' },
  );
  const data = await res.json();
  return data;
}

export default async function Ssr({ users }) {
  const userData = await fetchData(users)
  
  return (
    <div>
      <h1>Server Side Rendering</h1>
      <ul>
        {userData.map((v) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
    </div>
  );
}
