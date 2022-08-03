import React from "react"
import { Route } from "react-router-dom"
import { useAuth } from "./contexts/authContexts"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
     currentUser ? <Outlet /> : <Navigate to="/login" />
  )
}