import './App.css';
import ColorChanger from './components/ColorChanges';
import CountIncrement from './components/CountIncrement';
import SimpleForm from './components/SimpleForm';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  return (
    <>
      <ToggleSwitch />
      <CountIncrement />
      <SimpleForm />
      <ColorChanger />

    </>
  );
}

export default App;
