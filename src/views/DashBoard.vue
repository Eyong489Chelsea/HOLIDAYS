<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <h1 class="text-2xl font-bold mb-6 text-gray-700">
              Leave Management Dashboard
        </h1>
        <!--Leave summary cards-->
        <div class="grid grid-cols-3 gap-6 mb-6">
            <h2 class="text-lg">Pending</h2>
            <p class="text-3xl font-bold">{{ leaveSummary.Pending }}</p>
        </div>
        <div class="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg">Approved</h2>
            <p class="texte-3xl font-bold">{{ leaveSummary.approved }}</p>
        </div>
        <div class="bg-red-500 text-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg">Rejected</h2>
            <p class="text-3xl font-bold">{{ leaveSummary.rejected }}</p>
        </div>
    </div>
    <!-- Pending Leave Requests Table -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Pending Leave Requests</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200 text-gray-600">
            <th class="p-3 text-left">Employee</th>
            <th class="p-3 text-left">Leave Type</th>
            <th class="p-3 text-left">Dates</th>
            <th class="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in pendingRequests" :key="request.id" class="border-t">
            <td class="p-3">{{ request.employee }}</td>
            <td class="p-3">{{ request.type }}</td>
            <td class="p-3">{{ request.dates }}</td>
            <td class="p-3">
              <button
                class="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                @click="updateLeaveStatus(request.id, 'approved')"> Approve</button>
              <button
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                @click="updateLeaveStatus(request.id, 'rejected')">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Message if no pending requests -->
      <p v-if="pendingRequests.length === 0" class="text-gray-500 text-center mt-4">
        No pending leave requests.
      </p>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      leaveRequests: [
        { id: 1, employee: "John Doe", type: "Sick Leave", dates: "Feb 20 - Feb 22", status: "pending" },
        { id: 2, employee: "Jane Smith", type: "Vacation", dates: "Mar 5 - Mar 10", status: "pending" },
        { id: 3, employee: "Sam Wilson", type: "Casual Leave", dates: "Apr 2 - Apr 3", status: "approved" },
        { id: 4, employee: "Chris Evans", type: "Sick Leave", dates: "May 1 - May 2", status: "rejected" },
      ],
    };
  },
  computed: {
    leaveSummary() {
      return {
        pending: this.leaveRequests.filter((r) => r.status === "pending").length,
        approved: this.leaveRequests.filter((r) => r.status === "approved").length,
        rejected: this.leaveRequests.filter((r) => r.status === "rejected").length,
      };
    },
    pendingRequests() {
      return this.leaveRequests.filter((r) => r.status === "pending");
    },
  },
  methods: {
    updateLeaveStatus(id, status) {
      const request = this.leaveRequests.find((r) => r.id === id);
      if (request) {
        request.status = status;
      }
    },
  },
};
</script>
    