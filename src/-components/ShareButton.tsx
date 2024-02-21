import { Button } from "@mantine/core";
import "./ShareButton.module.css";
import { Link } from "@tanstack/react-router";

export const ShareButton = () => {
  return (
    <Link to="/radioshows/$radioshowId/share" params={{radioshowId:"1"}} >
      <Button
        className="pulse-button"
        variant="filled"
        radius={"lg"}
        style={{ position: "fixed", right: 20, bottom: 20, zIndex: 1000 }}
      >
        Share
      </Button>
    </Link>
  );
};
