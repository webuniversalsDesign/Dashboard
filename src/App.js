import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardHome from './Components/Dashboard-Home';

function App() {
  return (
 <>
<BrowserRouter>

<Routes>
<Route path="/" element={<DashboardHome/>}/>
</Routes>

</BrowserRouter>
 </>
  );
}

export default App;
