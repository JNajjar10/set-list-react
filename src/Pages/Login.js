
import React from 'react'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'


const Login = () => {
  return (
      <SpotifyAuth
      redirectUri='http://localhost:3000/home'
      clientID='9b555f70b448466cb3cd9a0122182268'
      scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
    />
  )
}
export default Login