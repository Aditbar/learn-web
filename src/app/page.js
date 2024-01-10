import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const TopAnime = await response.json();

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={"Paling Populer"} />
        <AnimeList api={TopAnime} />
      </section>
    </>
  );
};

export default Page;
