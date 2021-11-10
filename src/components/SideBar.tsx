import { Button } from './Button';

interface props {
  allGenres: Array<{
    id: number;
    title: string;
    name:'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }>
  genreId:number;
  handleClickButton:(id:number) => void;
}

export function SideBar({allGenres, genreId, handleClickButton}: props) {

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      <div className="buttons-container">
        {allGenres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
