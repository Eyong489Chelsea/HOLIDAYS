<template>
   <section class="border p-4 w-[600px]  bg-white rounded-lg">
    <h1 class="text-black fond-weigh text-[22px] text-center pb-5">Welcome to the Holiday Site</h1>
    <form @submit.prevent="handleSubmit" class="mt-6 flex flex-col items-center gap-y-4">
                  
                  <input type="email" id="email" v-model=email required placeholder="email" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 block text-gray-600"/>
                  
                  <div class="relative w-full">
                    <div class="absolute right-[20px] top-[10px]" @click="shouldDisplayPassWord">
                        <EyeIcon v-if="isShow"/>
                        <EyeOffIcon v-else/>
                    </div>
                    <input :type="isShow ? 'text' :'password' " id="password" v-model="password" placeholder="password" required class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 block text-gray-600"/>
                  </div>
            
              <button type="submit" class="w-[250px] px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none">
                   Login
              </button>
          </form>
          <div class="flex gap-x-[20%] flex-nowrap justify-center pt-12">
                  <a @click.stop="goToForgotPage()" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                  <p class="mt-4 text-center text-gray-600">Don't have an account? 
              <a @click.stop="goToRegister()" class="text-blue-600 hover:underline">Sign up</a>
          </p>
          </div>
  
   </section>
    
</template> 
    <script setup lang="ts">
        import { ref } from 'vue'
        import  EyeIcon  from './components/icons/EyeIcon.vue'
        import  EyeOffIcon  from './components/icons/EyeOffIcon.vue'
    import { useRouter } from 'vue-router';
          const email=ref('');
          const password=ref('');
          const router = useRouter();
          const isShow=ref(false);
          const handleSubmit = ()=>{
                    if (email.value && password.value) {
                        console.log("Email:", email.value);
                        console.log("Password:", password.value);
                        alert("Login successful (placeholder message)");
                    } else {
                        alert("Please enter email and password");
                    }

          }

          const shouldDisplayPassWord = ()=>{
            isShow.value = !isShow.value
          }
          const goToRegister =()=>router.push("/register")
          const goToForgotPage =()=>router.push("/forgot")
    </script>

