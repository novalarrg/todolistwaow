import React from "react"
import { Box, Typography } from "@mui/material"

const TaskCard = () => {
  return (
    <Box sx={{ minWidht: "300px", margin: "" }}>
      <Typography>titlle</Typography>
      <Typography>date</Typography>
      <Typography>description</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Select</Typography>
        <Typography>DeleteButton</Typography>
      </Box>
    </Box>
  )
}

export default TaskCard
