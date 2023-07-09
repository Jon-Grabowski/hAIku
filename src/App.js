import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PageContent from './components/PageContent';

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="body">
        <PageContent />
      </div>
    </div>
  );
}

export default App;
