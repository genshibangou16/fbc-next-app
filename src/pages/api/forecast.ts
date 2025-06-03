import type { NextApiRequest, NextApiResponse } from "next";

export type ForecastResponseData = {
  reportDatetime: string;
  targetArea: string;
  overview: string;
  region: string;
  regionOverview: string;
};

type ForecastData = {
  publishingOffice: string;
  reportDatetime: string;
  targetArea: string;
  headlineText: string;
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastResponseData | { error: string }>
) {
  try {
    const data: ForecastData = await fetch(
      "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json"
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
    const textArray: string[] = data.text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    const indexOfSubHeading: number = textArray.findIndex((line) =>
      line.includes("地方】")
    );
    const responseData: ForecastResponseData = {
      reportDatetime: data.reportDatetime,
      targetArea: data.targetArea,
      overview: textArray.slice(0, indexOfSubHeading).join("\n"),
      region: textArray[indexOfSubHeading] || "",
      regionOverview: textArray.slice(indexOfSubHeading + 1).join("\n"),
    };
    res.status(200).json(responseData);
  } catch {
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
}
