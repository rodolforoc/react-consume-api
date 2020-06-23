import React, {useState, useEffect} from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryTitle, setRepositoryTitle] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: repositoryTitle,
      url: 'test',
      techs: []
    });

    const repository = response.data;
    setRepositories([...repositories, repository]);
    setRepositoryTitle('');
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    
    const repositoriesUpdated = repositories.filter(repository => repository.id !== id)
    setRepositories(repositoriesUpdated);
  }

  function handleTitle(e) {
    setRepositoryTitle(e.target.value);
  }

  return (
    <div>
      <ul data-testid="repository-list">

        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
          </li>
        ))}
      </ul>
      
      <input type="text" onChange={handleTitle} />
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
