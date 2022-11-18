import CustomNavBar from "./components/CustomNavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <CustomNavBar />
      <ItemListContainer greeting="Mensaje." />
    </>
  );
};

export default App;
