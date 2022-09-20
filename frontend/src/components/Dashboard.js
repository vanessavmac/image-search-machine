import { useState } from 'react';
import API from '../api';

function Dashboard() {
  const [query, setQuery] = useState('');

  async function submitForm() {
    if (query === '') {
      alert('Please fill the textarea field');
      return;
    }
    const queryArray = query.split(/\r?\n/);
    
    await API.post('/api/searches/new-search', {
      queries: queryArray
    });
  }

  return (
    <div className="dashboard">
      <h1>Image Search Machine</h1>
      <label htmlFor="list">
        Copy and paste a list of items to generate images using the Google Images API.
      </label>
      <textarea
        onChange={(e) => setQuery(e.target.value)}
        id="list"
        name="list"
        rows="5"></textarea>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Dashboard;
