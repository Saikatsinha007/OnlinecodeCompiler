
//components
import Home from './components/home';
import DataProvider from './context/Dataprovide';

function App() {
  return (
    <DataProvider>    
      <Home/>
    </DataProvider>
  );
}

export default App;