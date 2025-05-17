import style from "./page.module.css";
import MovieItem from "@/components/movie-item";
import movies from "@/mock/dummy.json";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q || ""} fallback={<div>Loading...</div>}>
      <div className={style.container}>
        {movies.slice(0, 1).map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </Suspense>
  );
}
