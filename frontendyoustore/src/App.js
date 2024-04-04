import './App.css';
import Dashboard from './pages/Dashboard';
import SignInSide from './pages/SignInSide';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
// paleta de cores e tema que sera usado na nossa aplicação
const theme = createTheme({
  palette: {
    Yellowbutton: {
     main: '#F5AA27',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
     
        {/* login template from material UI */}
        <SignInSide></SignInSide>
       {/* <Dashboard></Dashboard> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
