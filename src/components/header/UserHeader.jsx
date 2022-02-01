import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
// import { fetchUserDetails } from "../../core/hooks/getUser"

const UserHeader = () => {
  const [error, setError] = useState(null)
  const [userDetails, setUserDetails] = useState(true)

  useEffect(() => {
    // fetchData()
    // async function fetchData() {
    //   let userDetailsData = await fetchUserDetails()
    //   setUserDetails(userDetailsData);
    //   if (userDetailsData.includes("error")) {
    //     setError(userDetails)
    //   }
    // }
  }, [])

  return (
    <>
      {userDetails && (
        <Typography
          variant="h6"
          component="h6"
          gutterBottom
          style={{ fontSize: "18px" }}
        >
          {/* {`${userDetails[0].lastName}, ${userDetails[0].firstName} (${userDetails[0].studentNo})`} */}
        </Typography>
      )}
      <hr />
    </>
  )
}

export default UserHeader
