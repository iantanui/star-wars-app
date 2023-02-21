import { useParams } from 'react-router-dom';

function FilmDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Film Details for ID {id}</h1>
    </div>
  );
}

export default FilmDetails;
