<template>
  <div class="max-w-md mx-auto mt-10 bg-gray-500 p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Apply for Leave</h2>
    
    <form @submit.prevent="submitLeave">
      <!-- Leave Type -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Leave Type</label>
        <select v-model="leave.type" class="mt-1 block w-full border rounded-md p-2">
          <option value="sick">Sick Leave</option>
          <option value="casual">Casual Leave</option>
          <option value="annual">Annual Leave</option>
          <option value="marternity">Maternity Leave</option>
          <option value="marriage">Marriage Leave</option>
          <option value="compensatory">Compensatory Leave</option>
        </select>
      </div>

      <!-- Start Date -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" v-model="leave.startDate" class="mt-1 block w-full border rounded-md p-2">
      </div>

      <!-- End Date -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" v-model="leave.endDate" class="mt-1 block w-full border rounded-md p-2">
      </div>

      <!-- Reason -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Reason</label>
        <textarea v-model="leave.reason" rows="1" class="mt-1 block w-full border rounded-md p-2"></textarea>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Submit Leave Request
      </button>
    </form>

    <div v-if="message" class="mt-4 text-green-600 font-medium">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leave: {
        type: "sick",
        startDate: "",
        endDate: "",
        reason: ""
      },
      message: ""
    };
  },
  methods: {
    async submitLeave() {
      try {
        // Simulate an API request
        const response = await fetch("https://api.example.com/leaves", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.leave)
        });

        if (!response.ok) throw new Error("Failed to submit leave request");

        this.message = "Leave request submitted successfully!";
        this.leave = { type: "sick", startDate: "", endDate: "", reason: "" }; // Reset form
      } catch (error) {
        this.message = "Error submitting leave request.";
      }
    }
  }
};
</script>