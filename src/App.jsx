
import classes from'./App.module.css'
import AccessClipboard from './Components/AccessClipboard/AccessClipboard'
import Brands from './Components/Brands/Brands'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Logo from './Components/Logo/Logo'
import Outery from './Components/Outery/Outery'
import Snippet from './Components/Snippet/Snippet'
import WorkFlow from './Components/WorkFlow/WorkFlow'

function App() {


  return (
    <div className={classes.App}>
     <Logo/>
     <Hero/>
     <Snippet/>
     <AccessClipboard/>
     <WorkFlow/>
     <Brands/>
     <Outery/>
     <Footer/>
    </div>
  )
}

export default App
