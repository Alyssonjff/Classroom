import CustomInput from "./components/CustomInput";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <CustomInput left="CircleArrowUp" placeholder="Default" />
      <CustomInput right="CircleArrowUp" placeholder="Default" />
      <CustomInput left="https://" right=".com"  placeholder="Default"  />
      <CustomInput left="CircleArrowUp" right="CircleArrowUp" placeholder="Default" grayArea={false}/>
      <CustomInput left="vercel/" placeholder="Default" />
      <CustomInput right="@gmail.com" placeholder="Default" />
    </div>
  );
}

export default App;
