import useSWR from "swr";
import { ForecastResponseData } from "../api/forecast/[slug]";
import Link from "next/link";

const fetcher = (url: string): Promise<ForecastResponseData> =>
  fetch(url).then((response) => response.json());

export default function ForecastPage() {
  const { data, error } = useSWR<ForecastResponseData>(
    "/api/forecast/130000",
    fetcher
  );
  const reportDatetime = new Date(data?.reportDatetime || "");
  return (
    <div className="pt-16">
      {error && (
        <div className="text-red-500">
          エラーが発生しました: {error.message}
        </div>
      )}
      {data && (
        <>
          <h1 className="text-2xl">
            {data.targetArea}の天気予報（
            {reportDatetime.toLocaleString("ja-JP")}発表）
          </h1>
          <p className="whitespace-pre">{data.overview}</p>
          <h2 className="text-xl mt-4">{data.region}の天気</h2>
          <p className="whitespace-pre">{data.regionOverview}</p>
        </>
      )}
      <Link className="text-lg text-blue-600 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  );
}
