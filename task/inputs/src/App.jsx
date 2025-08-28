import CustomInput from "./components/CustomInput";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <CustomInput left="icon" placeholder="Default" />
      <CustomInput right="icon" placeholder="Default" />
      <CustomInput left="https://" right=".com"  placeholder="Default"  />
      <CustomInput left="icon" right="icon" placeholder="Default" grayArea={false}/>
      <CustomInput left="vercel/" placeholder="Default" />
    </div>
  );
}

export default App;
