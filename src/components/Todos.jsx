import useFetch from "../hooks/useFetch";

const Todos = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;
  return <div>{data.map((element) => element.title)}</div>;
};

export default Todos;
