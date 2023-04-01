import {
  Box,
  CircularProgress,
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material";
import { green } from "../colors";

export function UiProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: green[100],
          opacity: 0.3,
        }}
        size={32}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: green[100],
          animationDuration: "550ms",
          position: "absolute",
          left: 0,

          borderRadius: "4.55556px",

          [`& .${circularProgressClasses.circle}`]: {
            strokeDasharray: "20px,200px",
            strokeLinecap: "round",
          },
        }}
        size={32}
        thickness={5}
        {...props}
      />
    </Box>
  );
}
