import { Link, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import MiniPortfolio from './project_files/mini-portfolio'
import InterviewQuestionsApp from './project_files/interview-questions-react-app'
import ApiBlogsFetch from './project_files/blogs-fetching-react-app'
import SimpleFaqs from './project_files/faqs-react-app'
import Google from './project_files/google-react-app'
import AppStore from './project_files/app-store-react-app'

function App() {
  return (
    <>      
      <Switch>
        <Route exact path='/' component={Home}/>        
        <Route exact path='/AppStore' component={AppStore}/>
        <Route exact path='/MiniPortfolio' component={MiniPortfolio}/>
        <Route exact path='/InterviewQuestionsApp'component={InterviewQuestionsApp}/>
        <Route exact path='/ApiBlogsFetch' component={ApiBlogsFetch}/>
        <Route exact path='/SimpleFaqs' component={SimpleFaqs}/>
        <Route exact path='/GoogleSearchClone' component={Google}/>
      </Switch>
    </>
  )
}

export default App;