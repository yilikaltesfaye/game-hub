import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  //   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <List>
        {/* {isLoading &&
          skeletons.map((skeleton) => <SkeletonText key={skeleton} />)} */}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
