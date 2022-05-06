import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
// import { useEffect, useMemo } from "react";
// import { userList } from "../../GuestData";

export default function Home() {
  const [userStats, setUserStats] = useState([
    {"name":"Apr","Active User":0},
    {"name":"May","Active User":0},
    {"name":"Jun","Active User":0},
    {"name":"Jul","Active User":3},
    {"name":"Aug","Active User":5},
    {"name":"Sep","Active User":15},
    {"name":"Oct","Active User":7},
    {"name":"Nov","Active User":26},
    {"name":"Dec","Active User":32},
    {"name":"Jan","Active User":15},
    {"name":"Feb","Active User":27},
    {"name":"Mar","Active User":39}
  ]);

  // const MONTHS = useMemo(
  //   () => [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Agu",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const getStats2 = () => {
  //       };
  //   getStats2();
  // }, [MONTHS])
  

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("/users/stats");
  //       res.data.map((item) =>
  //         setUserStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], "Active User": item.total },
  //         ])
  //       );
  //     } catch {}
  //   };
  //   getStats();
  // }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid  
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
