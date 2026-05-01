import { MainContainer } from "./components/layout/MainContainer";
import { SceneProvider } from "./context/SceneContext";

export default function App() {
  return (
    <SceneProvider>
      <MainContainer />
    </SceneProvider>
  );
}

