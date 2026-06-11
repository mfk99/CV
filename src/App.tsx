import "./App.css";
import "./components/header/Header";
import Header from "./components/header/Header";
import DotBackground from "./Background/Background";
import Skills from "./components/skills/Skills";
import TimelineContainer from "./components/timeline/Timeline";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <TimelineContainer />
      <DotBackground />
    </>
  );
}

export default App;
