import useStore from "./store";

const App = () => {
  const people = useStore(state => state.people)

  return (
    <>
      <p>Hello !</p>
      {people.map(p => <div key={p}><li>{p}</li></div>)}
    </>
  )
}
export default App;
