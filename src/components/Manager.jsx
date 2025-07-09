import { useState, useEffect } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGlobe,
  FaUser,
  FaLock,
  FaPlus,
  FaShieldAlt,
} from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [form, setform] = useState({
    website: "",
    username: "",
    password: "",
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPasswords = localStorage.getItem("passwords");
    if (savedPasswords) {
      try {
        const parsedData = JSON.parse(savedPasswords);
        setDataArray(parsedData);
      } catch (error) {
        console.error("Error parsing saved passwords:", error);
        setDataArray([]);
      }
    }
    setIsDataLoaded(true);
  }, []);

  // Save data to localStorage whenever dataArray changes (but only after initial load)
  useEffect(() => {
    if (isDataLoaded) {
      localStorage.setItem("passwords", JSON.stringify(dataArray));
    }
  }, [dataArray, isDataLoaded]);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const addPassword = () => {
    if (form.website && form.username && form.password) {
      if (editingId !== null) {
        // Update existing password
        setDataArray(
          dataArray.map((item) =>
            item.id === editingId ? { ...form, id: editingId } : item
          )
        );
        setEditingId(null);
        toast.success("Password updated successfully!", {
          style: {
            background: "#fff",
            color: "#333",
            border: "1px solid #e2e8f0",
            padding: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
          },
        });
      } else {
        // Add new password
        const newPassword = {
          ...form,
          id: Date.now(),
        };
        setDataArray([...dataArray, newPassword]);
        toast.success("Password added successfully!", {
          style: {
            background: "#fff",
            color: "#333",
            border: "1px solid #e2e8f0",
            padding: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
          },
        });
      }
      // Clear form
      setform({
        website: "",
        username: "",
        password: "",
      });
    }
  };

  const handleEdit = (item) => {
    setform({
      website: item.website,
      username: item.username,
      password: item.password,
    });
    setEditingId(item.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      setDataArray(dataArray.filter((item) => item.id !== id));
      toast.success("Password deleted successfully!", {
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #e2e8f0",
          padding: "16px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        },
      });
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setform({
      website: "",
      username: "",
      password: "",
    });
  };

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const maskPassword = (password) => {
    return "•".repeat(password.length);
  };

  const getWebsiteIcon = (website) => {
    return <FaGlobe className=" text-lg" />;
  };

  const truncateWebsite = (website) => {
    const words = website.split(" ");
    if (words.length > 12) {
      return words.slice(0, 12).join(" ") + "...";
    }
    return website;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800">
              Pass<span className="text-blue-600">Nest</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your secure password manager - Simple, Clean, Reliable
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <FaLock className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {editingId !== null ? "Update Password" : "Add New Password"}
            </h2>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              addPassword();
            }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Website Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    type="text"
                    name="website"
                    placeholder="Enter website URL"
                    value={form.website}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-12 pr-12 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <FaEye size={18} />
                    ) : (
                      <FaEyeSlash size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {editingId !== null ? (
                  <MdEdit size={20} />
                ) : (
                  <FaPlus size={18} />
                )}
                {editingId !== null ? "Update Password" : "Add Password"}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Passwords List Section */}

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <FaShieldAlt className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Saved Passwords
              </h2>
            </div>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              {dataArray.length}{" "}
              {dataArray.length === 1 ? "Password" : "Passwords"}
            </span>
          </div>

          {dataArray.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-gray-400 text-3xl" />
              </div>
              <p className="text-gray-600 text-xl font-medium mb-2">
                No passwords saved yet
              </p>
              <p className="text-gray-500">
                Add your first password using the form above
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      Website
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      Username
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      Password
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataArray.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            {getWebsiteIcon(item.website)}
                          </div>
                          <span className="text-gray-800 font-medium truncate">
                            {truncateWebsite(item.website)}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{item.username}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-700 font-mono text-sm">
                            {visiblePasswords[item.id]
                              ? item.password
                              : maskPassword(item.password)}
                          </span>
                          <button
                            onClick={() => togglePasswordVisibility(item.id)}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          >
                            {visiblePasswords[item.id] ? (
                              <FaEye size={16} />
                            ) : (
                              <FaEyeSlash size={16} />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-2 text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer"
                            title="Edit Password"
                          >
                            <RiEdit2Fill size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 cursor-pointer"
                            title="Delete Password"
                          >
                            <MdDelete size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
