<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Leave History</h2>

    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-400 px-4 py-2">Leave Type</th>
          <th class="border border-gray-400 px-4 py-2">Start Date</th>
          <th class="border border-gray-400 px-4 py-2">End Date</th>
          <th class="border border-gray-400 px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="leave in leaveHistory" :key="leave.id" class="text-center">
          <td class="border border-gray-300 px-4 py-2">{{ leave.type }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ leave.start_date }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ leave.end_date }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <span 
              :class="{
                'text-green-600': leave.status === 'Approved',
                'text-red-600': leave.status === 'Rejected',
                'text-yellow-600': leave.status === 'Pending'
              }"
            >
              {{ leave.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="text-center mt-4 text-gray-500">Loading...</div>
    <div v-if="!loading && leaveHistory.length === 0" class="text-center mt-4 text-gray-500">
      No leave records found.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaveHistory: [],
      loading: true
    };
  },
  methods: {
    async fetchLeaveHistory() {
      try {
        const response = await fetch("https://api.example.com/leave-history"); // Replace with actual API
        const data = await response.json();
        this.leaveHistory = data;
      } catch (error) {
        console.error("Error fetching leave history:", error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchLeaveHistory();
  }
};
</script>