async function fetchData() {
  const res = await fetch(
    "https://63046ed0761a3bce77e78e9c.mockapi.io/api/users",
    { cache: "force-cache" }
  );
  const data = await res.json();
  return data;
}

export default async function Ssg({ users }) {
  const userData = await fetchData(users);

  return (
    <div>
      <h1>Static Site Generation</h1>
      <ul>
        {userData.map((v) => {
          return <li key={v.id}>{v.name}</li>;
        })}
      </ul>
    </div>
  );
}
