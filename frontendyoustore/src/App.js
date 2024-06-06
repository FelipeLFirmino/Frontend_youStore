import './App.css';
import Dashboard from './pages/Dashboard';
import SignInSide from './pages/SignInSide';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menubar from './components/Menubar';


function App() {

// paleta de cores e tema que sera usado na nossa aplicação
const theme = createTheme({
  typography:{
    fontFamily:"Montserrat"
  },
  palette: {
    Yellowbutton: {
     main: '#F5AA27',
    },
  },
});

const [dadosProdutos, setProdutos] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/caminho_ler_arquivos');
      if (!response.ok) {
        throw new Error('Erro ao obter os dados dos computadores');
      }
      const dados = await response.json();
      setProdutos(dados);
      console.log(dados);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []);


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
     
        {/* login template from material UI */}
        {/* <SignInSide></SignInSide> */}
       <Menubar></Menubar>
       <Dashboard></Dashboard>
      </div>
    </ThemeProvider>
  );
}

export default App;
