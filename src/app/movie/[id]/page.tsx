import Image from "next/image";
import style from "./page.module.css";
import { MovieData } from "@/types";
import movies from "@/mock/dummy.json";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const {
    title,
    subTitle,
    company,
    runtime,
    description,
    posterImgUrl,
    releaseDate,
    genres,
  }: MovieData = movies.find((movie) => movie.id === parseInt(id))!;

  return (
    <div className={style.container}>
      <section>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${posterImgUrl}')` }}
        >
          <Image
            src={posterImgUrl}
            alt={`${title}의 이미지`}
            width={300}
            height={450}
            style={{
              height: "350px",
              width: "auto",
              zIndex: 1,
            }}
            priority
          />
        </div>
        <div className={style.info_container}>
          <div>
            <h2>{title}</h2>
            <div>
              {releaseDate} / {genres.join(", ")} / {runtime}분
            </div>
            <div>{company}</div>
          </div>
          <div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.description}>{description}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
