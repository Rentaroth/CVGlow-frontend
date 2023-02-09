import { Template } from './components/Template'
import { DataProvider } from './components/Context';

function App() {
  return (
    <DataProvider className="w-full h-fit">
      <Template/>
    </DataProvider>
  );
}

export default App;
