import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { orderList } from "../../GuestData";

export default function FeaturedInfo() {
  const [todayPerc, setTodayPerc] = useState(0);
  const [weekPerc, setWeekPerc] = useState(0);
  const [monthPerc, setMonthPerc] = useState(0);
  const [todaySales, setTodaySales] = useState(0);
  const [thisWeekSales, setThisWeekSales] = useState(0);
  const [thisMonthSales, setThisMonthSales] = useState(0);

  useEffect(() => {
    const getIncome2 = () => {
      function dateCheck(from,to,check) {
        var fDate,lDate,cDate;
        fDate = Date.parse(from);
        lDate = Date.parse(to);
        cDate = Date.parse(check);
        if((cDate <= lDate && cDate >= fDate)) {
            return true;
        }
        return false;
    }
      try {
        const todaySales = orderList.reduce(  (sum, item) => {
          if (dateCheck(new Date("2022-03-23"),new Date("2022-03-24"),new Date(item.createdAt))) {return (sum + item.amount)}
            return sum
        },0)
        
        const yesterdaySales = orderList.reduce(  (sum, item) => {
          if (dateCheck(new Date("2022-03-22"),new Date("2022-03-23"),new Date(item.createdAt))) {return (sum + item.amount)}
            return sum
        },0)
        
        const thisWeekSales = orderList.reduce(  (sum, item) => {
          if (dateCheck(new Date("2022-03-20"),new Date("2022-03-24"),new Date(item.createdAt))) {return (sum + item.amount)}
            return sum
        },0)
        
        const lastWeekSales = orderList.reduce(  (sum, item) => {
          if (dateCheck(new Date("2022-03-13"),new Date("2022-03-17"),new Date(item.createdAt))) {return (sum + item.amount)}
            return sum
          },0)
          
          const thisMonthSales = orderList.reduce(  (sum, item) => {
            if (dateCheck(new Date("2022-03-01"),new Date("2022-03-24"),new Date(item.createdAt))) {return (sum + item.amount)}
          return sum
        },0)
        
        const lastMonthSales = orderList.reduce(  (sum, item) => {
          if (dateCheck(new Date("2022-02-01"),new Date("2022-02-24"),new Date(item.createdAt))) {return (sum + item.amount)}
          return sum
        },0)

        setTodaySales(todaySales)
        setThisWeekSales(thisWeekSales)
        setThisMonthSales(thisMonthSales)
        setTodayPerc((todaySales * 100) / yesterdaySales - 100)
        setWeekPerc((thisWeekSales * 100) / lastWeekSales - 100)
        setMonthPerc((thisMonthSales * 100) / lastMonthSales - 100)

      } catch {console.log("error")}
    };
    getIncome2();
    
  }, [])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${todaySales}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(todayPerc)}{" "}
            {todayPerc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Weekly Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${thisWeekSales}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(weekPerc)}{" "}
            {weekPerc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last week</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Monthly Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${thisMonthSales}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(monthPerc)}{" "}
            {monthPerc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      
    </div>
  );
}
