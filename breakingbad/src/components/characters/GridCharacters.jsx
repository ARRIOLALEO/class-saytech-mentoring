import Loading from "../ui/Loading";
const GridChracters = ({ isLoading, characters }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={character.img} />
            </div>
            <div className="card-back">
              <ul>
                <li>
                  <strong>Actor name:</strong> {character.name}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GridChracters;
