import Router from './router/router.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import Companies from './components/Companies.js'

Router.add(/login/, Login.main)
    .add(/home/, Home.main)
    .add(/companies/, Companies.main)
    .listen()

Router.navigate('/companies')