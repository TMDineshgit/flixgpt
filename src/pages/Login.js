
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      await login(email.trim(), password);

      navigate("/browse", { replace: true });

    } catch (error) {
      setErrors({
        firebase: "Invalid email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">

      <div className="w-full max-w-md rounded-xl bg-black/20 p-8 shadow-xl">

        <h1 className="mb-1 text-center text-2xl font-semibold">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={inputClass}
            />

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {errors.firebase && (
            <p className="text-sm text-red-500">
              {errors.firebase}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
