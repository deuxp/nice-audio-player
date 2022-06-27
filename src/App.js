import style from "./App.module.scss";
import Footer from "./Components/Footer";
import Name from "./Components/Name";
import ProjectSelector from "./Components/ProjectSelector";
const { layout } = style;

const track = "/drubs.mp3";

function App() {
  return (
    <>
      <Name />
      <main className={layout}>{/* <TabSection track={track} /> */}</main>
      {/* <ProjectSelector /> */}
      <Footer />
    </>
  );
}

export default App;
