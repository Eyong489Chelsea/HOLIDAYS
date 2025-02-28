<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-600">
    <div class="bg-white p-6 rounde-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
        <form @submit.prevent="handleForgotPassword" class="mt-4">
            <div>
                <label class="block text-gray-700">Enter your email</label>
                <input v-model="email" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-300"/>
            </div>
            <button type="submit" class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Reset Password
            </button>
            <router-link to="/" class="text-blue-500 hover:underline">Back to Sign In</router-link>
        </form>
        </div>
        </div>
</template>

<script>
import { ref } from "vue";
const email= ref("");
const handleForgotPassword = () => {
    if (email.value) {
        alert("A password reset link has been sent to ${email.value}");
    }else{
        alert("Please enter your email")
    }
};

</script>
