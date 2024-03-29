import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
