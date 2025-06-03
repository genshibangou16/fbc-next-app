import useSWR from "swr";
import { ForecastResponseData } from "../api/forecast";
import Link from "next/link";

const fetcher = (url: string): Promise<ForecastResponseData> =>
  fetch(url).then((response) => response.json());

export default function ForecastPage() {
  const { data }: { data: ForecastResponseData | undefined } =
    useSWR<ForecastResponseData>("/api/forecast", fetcher);
  const reportDatetime = new Date(data?.reportDatetime || "");
  return (
    <div className="pt-16">
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
