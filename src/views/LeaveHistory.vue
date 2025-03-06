<template>
  <div class=" items-center justify-center min-h-screen bg-stone-600">
    <h2 class="text-2xl font-semibold text-gray-700 mb-4 items-center">Leave History</h2>

    <div v-if="loading" class="text-gray-500">Loading leave history...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else>
      <table class="w-full border-collapse border border-gray-300 ">
        <thead>
          <tr class="bg-gray-400">
            <th class="border border-gray-300 px-4 py-2">Type</th>
            <th class="border border-gray-300 px-4 py-2">Start Date</th>
            <th class="border border-gray-300 px-4 py-2">End Date</th>
            <th class="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="leave in leaveHistory" :key="leave.id" class="text-center">
            <td class="border border-gray-300 px-4 py-2">{{ leave.type }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ leave.startDate }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ leave.endDate }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <span
                :class="{
                  'text-green-600 font-semibold': leave.status === 'Approved',
                  'text-red-600 font-semibold': leave.status === 'Rejected',
                  'text-yellow-600 font-semibold': leave.status === 'Pending'
                }"
              >
                {{ leave.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="leaveHistory.length === 0" class="text-gray-500 text-center mt-4">No leave records found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const leaveHistory = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchLeaveHistory = async () => {
      try {
        // Simulating an API call with dummy data
        await new Promise((resolve) => setTimeout(resolve, 1000));

        leaveHistory.value = [
          { id: 1, type: "Sick Leave", startDate: "2025-02-10", endDate: "2025-02-12", status: "Approved" },
          { id: 2, type: "Casual Leave", startDate: "2025-03-01", endDate: "2025-03-02", status: "Pending" },
          { id: 3, type: "Annual Leave", startDate: "2024-12-15", endDate: "2024-12-20", status: "Rejected" },
          {id: 3, type: "Maternity Leave", startDate: "2024-12-19", endDate: "2025-2-20", status: "Approved"}
        ];
      } catch (err) {
        error.value = "Failed to load leave history.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchLeaveHistory);

    return { leaveHistory, loading, error };
  },
};
</script>
