import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const tabFormUrl = urlParms.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
      
    }
  }, [location.search]);

  return <div>
    <div className="">
      {/* Sidebar */}

      <DashSidebar/>

    </div>
    {/* profile */}
    {tab == 'profile' && <DashProfile/>}
  </div>;
}
