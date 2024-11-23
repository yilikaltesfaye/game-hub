import useGenres, { Genre } from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  //   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
