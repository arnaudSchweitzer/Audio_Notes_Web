import React from "react";
import { useCtx } from "../utils/context";
function Home() {
  const { setUserName, userName } = useCtx();
  return <div>Hi {userName}</div>;
}

export default Home;
