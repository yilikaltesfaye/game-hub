import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main "`, //wider than 1024 px
        }}
        templateColumns={{
          base: `1fr`,
          lg: `250px 1fr`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList
              onSelectGenre={(genre) => setSelectGenre(genre)}
              selectedGenre={selectGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
