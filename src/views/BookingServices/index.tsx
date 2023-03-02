import React from "react"
import { ServiceCard } from "./components/ServiceCard"

import { AuthContext } from "@/contexts/AuthContext"
import { CompanyUser } from "@/models/User/user"
import { Box, Button, Typography } from "@mui/material"
import { StoreContainer } from "./components/StoreContainer"

export const BookingServices = () => {
  const authContext = React.useContext(AuthContext)

  const [stores, setStores] = React.useState<any>([])

  const getUserStores = async () => {
    const user = authContext.user as CompanyUser

    const headers: Headers = new Headers({
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    })


    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/store-user/${user.id}`,
      {
        method: "GET",
        headers,
      }
    )
    const data = await response.json()
    console.log(data)
    setStores(data.stores)
  }

  const createService = async () => {
    if (stores.length === 0) {
      return
    }

    const headers: Headers = new Headers({
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    })

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/service`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: "Service 1",
          duration: 3000,
          price: 1000,
          storeUid: stores[0].storeUid,
        }),
      }
    )
    const data = await response.json()
    console.log(data)
  }

    const createStore = async () => {

    const headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/store`, {
      method: 'POST',
      headers,
      body: JSON.stringify(
        {
          name: "Coiffeur Paris",
          storeType: "Coiffeur",
          postCode: 75011,
          city: "Paris",
          address: "4 rue reaumur"
        }
      )
    });
    const data = await response.json();
    getUserStores()
  };

  React.useEffect(() => {
    getUserStores()
  }, [])

  return (
    <>
      <Typography gutterBottom variant="h2">
        Mes enseignes et leurs services :
      </Typography>
      <Box sx={{display: 'flex'}}>
        {stores.map((store: any) => {
          return <StoreContainer store={store} />
        })}
      </Box>

      <Button onClick={createService}>
        Create a service
      </Button>

      <Button onClick={createStore}>
        Create store
      </Button>
    </>
  )
}
