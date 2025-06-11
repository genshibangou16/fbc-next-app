import useSWR from "swr";
import { ForecastResponseData } from "../api/forecast/[slug]";
import Link from "next/link";
import { useAtom } from "jotai";
import { officeIdAtom } from "@/atoms";
import type { ForecastArea } from "@/types/forecastArea";

const fetcher = (url: string): Promise<ForecastResponseData> =>
  fetch(url).then((response) => response.json());

export default function ForecastPage({
  offices,
}: {
  offices: ForecastArea["offices"];
}) {
  const [officeId, setOfficeId] = useAtom<string>(officeIdAtom);
  const { data }: { data: ForecastResponseData | undefined } =
    useSWR<ForecastResponseData>(`/api/forecast/${officeId}`, fetcher);
  const reportDatetime = new Date(data?.reportDatetime || "");
  return (
    <div className="pt-16">
      <div className="my-4">
        <label htmlFor="office">地域を選択してください</label>
        <select
          id="office"
          className="ml-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setOfficeId(e.target.value)}
          value={officeId}
        >
          {Object.entries(offices)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, office]) => (
              <option key={key} value={key}>
                {office.name} ({office.enName})
              </option>
            ))}
        </select>
      </div>
      {data && (
        <>
          <h1 className="text-2xl">
            {data.targetArea}の天気予報（
            {reportDatetime.toLocaleString("ja-JP")}発表）
          </h1>
          <p className="whitespace-pre">{data.overview}</p>

          {data.region && (
            <>
              <h2 className="text-xl mt-4">{data.region}の天気</h2>
              <p className="whitespace-pre">{data.regionOverview}</p>
            </>
          )}
        </>
      )}
      <Link className="text-lg text-blue-600 hover:underline" href="/">
        Go back to Home
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.jma.go.jp/bosai/common/const/area.json");
  const forecastArea: ForecastArea = await res.json();
  const offices = forecastArea.offices;
  return {
    props: {
      offices,
    },
  };
}
