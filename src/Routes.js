import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PagGrafic from './Pages/PaGrafic'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Buscar-graficos" component={PagGrafic}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;