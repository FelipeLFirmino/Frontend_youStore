import './App.css';
import SignInSide from './pages/SignInSide';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
// paleta de cores e tema que sera usado na nossa aplicação
const theme = createTheme({
  palette: {
    primary: {
     main: '#0D3360' ,
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* login template from material UI */}
        <SignInSide></SignInSide>
      
      </div>
    </ThemeProvider>
  );
}

export default App;
