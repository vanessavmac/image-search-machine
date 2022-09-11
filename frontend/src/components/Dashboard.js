function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Image Citation Machine</h1>
      <form>
        <label htmlFor="list">
          Copy and paste a list of items to generate images using the Google Images API.
        </label>
        <textarea id="list" name="list" rows="5"></textarea>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Dashboard;
