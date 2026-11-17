
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

const Browse = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="p-10">
        <h2 className="text-3xl font-bold">
          Welcome, {user?.displayName}!
        </h2>

        <p className="mt-3 text-gray-400">
          You have successfully logged in.
        </p>
      </main>

    </div>
  );
};

export default Browse;
