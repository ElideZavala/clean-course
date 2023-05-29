(() => {
  // función para obtener información de una película por Id
  function getMoviId(movieId: string) {
    console.log({ movieId });
  }

  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    title:       string;
    description: string;
    rating:      number;
    cast:        string[];
  }

  function movie(
      {
        title,
        description,
        rating,
        cast,
      } : Movie
  ) {
    console.log({ title, description, rating, cast });
  }
  // Crea un nuevo actor

interface Actor {
    fullName: string;
    birthdate: Date;
}

function createActor(
    {
      fullName,
      birthdate
    } : Actor
): boolean {
  // tarea asincrona para verificar nombre
  // ..
  // ..
  if (fullName === "elide") return false;
  if (birthdate.getFullYear() < 1900) return false;

  console.log("Crear actor and birthdate", );
  return true;
}
})();

// Continuar
const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if ( isDead ) return 1500;
    if ( isSeparated ) return 2500;
    return  ( isRetired )  ? 3000 : 4000;
}