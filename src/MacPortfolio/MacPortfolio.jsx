import React, { use, useState } from "react";
import styles from "@/styles/MacPortfolio.module.css";
import { Navbar, Footer, Desktop } from "../component";

function MacPortfolio() {
  const [bootScreen,isBootScreen] = useState(true);
  const [lockScreen,isLockScreen] = useState(false);
  const [shutdownScreen,isSutdownScreen] = useState(false);

  return (
    <div className={styles.mac_root}>
      {/* navbar */}
      <Navbar />
      {/* Desktop */}
      <Desktop />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default MacPortfolio;