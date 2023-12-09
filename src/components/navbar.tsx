import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import "../pages-style/navbar.css"

export const Navbar = () => {
  const [user] = useAuthState(auth)
  const signUserOut = async () => {
    await signOut(auth)
  }

  return (
    <div className="body">
      <Link to="/">
        <button className="my-button my-button-container">Main</button>
      </Link>
      {!user ? (
        <Link to="/login">
          <button className="my-button my-button-container">Login</button>
        </Link>
      ) : (
        <Link to="/create-post">
          {/* prettier-ignore */}
          <button className="my-button my-button-container">Create Post</button>
        </Link>
      )}

      <div>
        {user && (
          <>
            {/* prettier-ignore */}
            <button onClick={signUserOut} className="my-button my-button-container">Log-out</button>
            <h2>{user?.displayName}</h2>
            <img className="profile-picture" src={user?.photoURL || ""} />
          </>
        )}
      </div>
    </div>
  )
}
