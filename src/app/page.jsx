import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const TopAnime = await response.json();

  const topAnime = await getAnimeResponse("/top/anime", "limit=8");

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
