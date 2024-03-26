import { useEffect, useState } from "react";
import styles from "./ScrollButton.module.css";
import NorthIcon from "@mui/icons-material/North";
import Button from "@mui/material/Button";

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const sxStyle = {
    px: "5px",
    pt: "2px",
    pb: "1px",
    width: "2px",
    backgroundColor: "#494949",
    color: "#d5d5d5",
    "&:hover": {
      backgroundColor: "#949494",
      color: "#2a2a2a",
    },
  };

  return (
    <div className={styles.div}>
      {isVisible && (
        <Button sx={sxStyle}>
          <NorthIcon onClick={scrollToTop} />
        </Button>
      )}
    </div>
  );
}
