
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Name must contain at least 3 characters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,8}$/;

    if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Use 6-8 characters with uppercase, number and special character";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // // Profile image is optional
    // if (profileImage) {
    //   if (!profileImage.type.startsWith("image/")) {
    //     newErrors.profileImage = "Please select a valid image";
    //   } else if (profileImage.size > 2 * 1024 * 1024) {
    //     newErrors.profileImage = "Image must be below 2 MB";
    //   }
    // }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await signup(
        form.fullName.trim(),
        form.email.trim(),
        form.password
      );

      navigate("/browse", { replace: true });

    } catch (error) {
      console.error(error);

      setErrors({
        firebase:
          error.code === "auth/email-already-in-use"
            ? "Email is already registered"
            : error.message,
      });

    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-black/20 p-8 shadow-xl">

        <h1 className="mb-1 text-center text-2xl font-semibold text-gray-900">
          Create Account
        </h1>

        <p className="mb-6 text-center text-md text-gray-500">
          Sign up to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className={inputClass}
            />

            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Profile Image 
          <div>
            <label className="mb-1 block text-sm font-medium">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setProfileImage(e.target.files?.[0] || null)
              }
              className={inputClass}
            /> 

            {errors.profileImage && (
              <p className="mt-1 text-xs text-red-500">
                {errors.profileImage}
              </p>
            )}
          </div>*/}

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              maxLength={8}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={inputClass}
            />

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              maxLength={8}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className={inputClass}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
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
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
