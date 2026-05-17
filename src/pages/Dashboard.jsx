import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard");

      setStats(response.data);
    } catch (error) {
      console.log(error);

      setStats({
        users: 0,
        revenue: 0,
        orders: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-white p-10">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-4">Users</h2>

          <p className="text-5xl font-bold">
            {stats.users}
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-4">Revenue</h2>

          <p className="text-5xl font-bold">
            ₹{stats.revenue}
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-2xl mb-4">Orders</h2>

          <p className="text-5xl font-bold">
            {stats.orders}
          </p>
        </div>
      </div>
    </div>
  );
}