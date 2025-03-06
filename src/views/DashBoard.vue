<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-600 shadow-md p-5">
      <h2 class="text-2xl font-bold mb-4">Leave Management</h2>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.name" class="mb-2">
            <router-link :to="item.path" class="block px-4 py-2 rounded hover:bg-blue-100">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <button class="px-4 py-2 bg-blue-500 text-white rounded">
          Logout
        </button>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-gray-400 shadow rounded-md">
          <h3 class="text-2xl font-semibold text-white">Total Leaves</h3>
          <p class="text-2xl font-bold text-blue-600">{{ leaveStats.total }}</p>
        </div>
        <div class="p-4 bg-gray-400 shadow rounded-md">
          <h3 class="text-2xl font-semibold text-white">Approved Leaves</h3>
          <p class="text-2xl font-bold text-green-600">
            {{ leaveStats.approved }}
          </p>
        </div>
        <div class="p-4 bg-gray-400 shadow rounded-md">
          <h3 class="text-2xl font-semibold text-white">Pending Leaves</h3>
          <p class="text-2xl font-bold text-yellow-700">
            {{ leaveStats.pending }}
          </p>
        </div>
      </section>

      <section class="mt-6">
        <h2 class="text-xl font-semibold mb-4">Recent Leave Requests</h2>
        <table class="w-full bg-slate-500 shadow-md rounded-md">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4">Employee</th>
              <th class="py-2 px-4">Type</th>
              <th class="py-2 px-4">Status</th>
              <th class="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leave in leaveRequest" :key="leave.id">
              <td class="py-2 px-4">{{ leave.employee }}</td>
              <td class="py-2 px-4">{{ leave.type }}</td>
              <td class="py-2 px-4">
                <span
                  class="px-2 py-1 rounded text-white"
                  :class="statusClass(leave.status)"
                >
                  {{ leave.status }}
                </span>
              </td>
              <td class="py-2 px-4">
                <button
                  v-if="leave.status === 'Pending'"
                  @click="approveLeave(leave.id)"
                  class="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Approve
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'LeaveRequest', path: '/request' },
        { name: 'LeaveHistory', path: '/history' },
      ],
      leaveStats: {
        total: 15,
        approved: 10,
        pending: 5,
      },
      leaveRequest: [
        { id: 1, employee: 'John Doe', type: 'Sick Leave', status: 'Pending' },
        { id: 2, employee: 'Jane Smith', type: 'Annual Leave', status: 'Approved' },
        { id: 3, employee: 'Alice Johnson', type: 'Casual Leave', status: 'Rejected' },
      ],
    };
  },
  methods: {
    statusClass(status) {
      return {
        'bg-yellow-500': status === 'Pending',
        'bg-green-500': status === 'Approved',
        'bg-red-500': status === 'Rejected',
      };
    },
    approveLeave(id) {
      this.leaveRequest = this.leaveRequest.map((leave) =>
        leave.id === id ? { ...leave, status: 'Approved' } : leave
      );
      this.leaveStats.approved += 1;
      this.leaveStats.pending -= 1;
    },
  },
};
</script>
    