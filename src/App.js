
import {useRoutes} from 'hookrouter'
import routes from './Routes/routes'

function App() {
  const routeResult = useRoutes(routes)
  return routeResult
}

export default App;