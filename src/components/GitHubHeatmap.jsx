import React, { useCallback, useEffect, useState } from "react";
import Heatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { request, gql } from "graphql-request";

// GitHub API URL
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// Environment variable for token
const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const GITHUB_QUERY = gql`
  {
    user(login: "devXlalit") {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

const GitHubHeatmap = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      if (!GITHUB_ACCESS_TOKEN) {
        return;
      }

      try {
        const data = await request({
          url: GITHUB_GRAPHQL_API,
          document: GITHUB_QUERY,
          requestHeaders: {
            Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
          },
        });

        const transformedData =
          data.user.contributionsCollection.contributionCalendar.weeks
            .flatMap((week) => week.contributionDays)
            .map((day) => ({
              date: day.date,
              count: day.contributionCount,
            }));

        setContributions(transformedData);
      } catch (error) {
        console.error("❌ Error fetching contributions:", error);
      }
    };

    fetchGitHubContributions();
  }, []);

  return (
    <div className="mt-5 md:my-10 md:w-[45vw] md:absolute top-96 -z-10 right-0 md:right-12">
      <div className="">
        <Heatmap
          startDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
          endDate={new Date()}
          values={contributions}
          showMonthLabels={true}
          showWeekdayLabels={false}
          horizontal={true}
          gutterSize={0.5}
          onClick={() => window.location.assign("https://github.com")}
          classForValue={(value) => {
            if (!value || value.count === 0) return "color-empty";
            if (value.count >= 1 && value.count < 5) return "color-scale-1";
            if (value.count >= 5 && value.count < 10) return "color-scale-2";
            if (value.count >= 10 && value.count < 20) return "color-scale-3";
            if (value.count >= 20) return "color-scale-4";
            return "color-empty";
          }}
          tooltipDataAttrs={(value) => ({
            "data-tip": `${value.date}: ${value.count} contributions`,
          })}
        />
      </div>
    </div>
  );
};

export default GitHubHeatmap;
