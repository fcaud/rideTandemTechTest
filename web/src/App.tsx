import Card from './components/Card';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className='App'>
      <div>
        <div className='LocationHeader'>
          Live bus times for <b>Park Road</b>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default App;
