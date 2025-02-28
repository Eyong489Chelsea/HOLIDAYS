<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-center text-gray-800"> Sign In</h2>
        <form @submit.prevent="handleSignIn" class="mt-4">
            <div>
                <label class="block text-gray-700">Email</label>
                <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
            <button type="submit" class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign In</button>
            <p class="mt-4 text-sm text-center">
                <router-link to="/forgot-password" class="text-blue-500 hover:underline">
                    Forgot Password?
                </router-link>
            </p>
        </form>
        </div>
        </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email=ref("");
const password=ref("");
const router=useRouter();
const handleSignIn =() => {
    if(email.value=== "test@example.com" &&password.value=== "password"){
        alert("Login successful!");
        router.push("/");
    }else{
        alert("Invalid email or password");
    }
};
</script>
