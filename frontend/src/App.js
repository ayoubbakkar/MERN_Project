import {Container} from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <div className='App'>
    <Header/>
    <main className='py-3'>
        <Container>
          <h1> SAUCE SHOP</h1>
        </Container>      
    </main>
    <Footer/>
    </div>

  );
}

export default App;
