import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import UserCard from './Pages/UsersCards.jsx'

const Users = [
  {
    Id: 1,
    Username: 'Luis',
    Password: '474101',
    Contas: 4000
  },
  {
    Id: 2,
    Username: 'Maria De Fátima',
    Password: '474101boas',
    Contas: 200
  },
  {
    Id: 3,
    Username: 'Leonardo',
    Password: '474101Boas',
    Contas: 2000
  }
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
)

/*<App /> 
/*{
      Users.map(User => {
        return (
          <UserCard key={User.Id} Username = {User.Username} Password = {User.Password} Contas = {User.Contas}/>
        )
      })
    }
*/  
