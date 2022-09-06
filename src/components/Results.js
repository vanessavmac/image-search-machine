import Card from './Card';

function Results() {
  return (
    <div>
      <h2>Search Results</h2>
      <button>Download All</button>
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Results;
