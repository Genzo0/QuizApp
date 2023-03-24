import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dash from './components/Dash';
import Libraries from './features/auth/Libraries';
import QuizDetail from './features/quiz/QuizDetail';
import QuestionList from './features/question/QuestionList';
import PersistLogin from './features/auth/PersistLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Public/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        
        <Route element={<PersistLogin/>}>
          <Route path='libraries' element={<Dash/>}>
            <Route index element={<Libraries/>}/>

            <Route path='quiz'>
              <Route path=':id' element={<QuizDetail/>}/>
              <Route path='play' element={<Layout/>}>
                <Route path=':id' element={<QuestionList/>}/>
              </Route>
            </Route>
          </Route>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
