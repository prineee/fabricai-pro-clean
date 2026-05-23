import DashboardLayout from "../../layouts/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl">
          Total Users
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Revenue
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Active Plans
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          AI Usage
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;