import useArtist from "../hooks/useArtist";

interface Props {
  name: string;
}

export default function ArtistInfo({ name }: Props) {
  const { data, isLoading, error } = useArtist(name);
  // console.log("unutar", data);
  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <main>
          <div>{data?.bio}</div>
          <div>{data?.message}</div>
          <div>{data?.name}</div>
          <div>{data?.listeners}</div>
          <div>{data?.playcount}</div>
        </main>
      )}
    </div>
  );
}
