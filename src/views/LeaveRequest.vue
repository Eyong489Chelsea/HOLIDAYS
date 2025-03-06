<template>
  <div class=" flex items-center justify-center min-h-screen bg-gray-500">
    <h1 class=" flex flex-col items-center text-2xl font-semibold mb-2">Create Holiday</h1>
   <form @submit.prevent="submitForm">
      <!-- Holiday Type -->
      <label class="block mb-2 text-gray-700 shadow-white">Type</label>
      <select v-model="holidayType" class="w-full border p-2 rounded-lg">
        <option disabled value="">Choose your leave  type...</option>
        <option value="vacation">Vacation</option>
        <option value="sick_leave">Sick Leave</option>
        <option value="personal">Personal</option>
      </select>

      <!-- Dates -->
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label class="block text-gray-700">Starting Date</label>
          <input type="date" v-model="startDate" class="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label class="block text-gray-700">Ending Date</label>
          <input type="date" v-model="endDate" class="w-full border p-2 rounded-lg" />
        </div>
      </div>

      <!-- Number of Days -->
      <div class="mt-4">
        <label class="block text-gray-700">Number of Days</label>
        <input type="number" v-model="numDays" class="w-full border p-2 rounded-lg" disabled />
      </div>

     

      <!-- Description -->
      <div class="mt-4">
        <label class="block text-gray-700">Description</label>
        <textarea v-model="description" class="w-full border p-2 rounded-lg" placeholder="Veuillez saisir votre description..."></textarea>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-700">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      holidayType: "",
      startDate: "",
      endDate: "",
      numDays: 0,
      returnDate: "",
      description: "",
    };
  },
  watch: {
    startDate: "calculateDays",
    endDate: "calculateDays",
  },
  methods: {
    calculateDays() {
      if (this.startDate && this.endDate) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        this.numDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      }
    },
    submitForm() {
      alert("Form submitted with: " + JSON.stringify(this.$data, null, 2));
    },
  },
};
</script>