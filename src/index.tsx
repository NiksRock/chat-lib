import ReactDOM from 'react-dom/client'
import User from './components/user/User'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <User />
)

export { default as User } from './components/user/User'
