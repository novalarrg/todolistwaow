import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import Form from "../Components/Form"
import TaskCard from "../Components/TaskCard"

const Home = () => {
  return (
    <div>
      {/* Box utama yang membungkus semua */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, gap: 6 }}>
        {/* Box untuk component form */}
        <Box>
          <Typography>To-Do List</Typography>
          <Form />
        </Box>
        {/* Box untuk todo task card */}
        <Box>
          <Typography>Todo</Typography>
        </Box>
        {/* Box untuk In Progress */}
        <Box>
          <Typography>In Progress</Typography>
          <TaskCard />
        </Box>
        {/* Box untuk finish */}
        <Box>
          <Typography>Finish</Typography>
          <TaskCard />
        </Box>
      </Box>
    </div>
  )
}

export default Home
