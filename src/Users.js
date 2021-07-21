import { useState, useEffect } from 'react';
import { List as StyledList } from './styled/List'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({html_url: '---'});
  const url = 'https://api.github.com/users';
  
  const fetchUsers = () => {
    fetch(url).then(response => response.json()).then(fetchedUsers => setUsers(fetchedUsers))
  }

  const setUser = (u) => {
    setCurrentUser(u)
  }
  useEffect(() => {fetchUsers()}, []);

  return <div data-testid='users'>
          <div>number of users [{users.length}]</div>
          {currentUser && <h3>{currentUser.html_url}</h3>}
          <ul>
            {users.length && users.map(user => 
              <StyledList onClick={() =>setUser(user)} key={user.id}>
                <label>{user.id}:</label> {user.login}
              </StyledList>)}
          </ul>
        </div>
}

export default Users;