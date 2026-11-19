import { useAuth } from "../context/AuthContext";  

const Header = () => {

    const { user, logout } = useAuth();
    
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return(
        
      <header className="flex items-center justify-between px-10 py-5 fixed top-0 left-0 right-0 z-50 bg-grdient-to-b from-black min-h-[80px]">

        <h1 className="text-2xl font-bold text-red-500">
          My App
        </h1>

        <div className="flex items-center gap-4">

          <div className="flex items-center gap-3">

  
            <img src={user?.photoURL || "https://placehold.co/150x150?text=User"}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
            />


            <span className="font-medium">
              {user?.displayName}
            </span>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-5 py-2 hover:bg-red-700"
          >
            Logout (fGPT@123)
          </button>

        </div>
      </header>

    )
}

export default Header