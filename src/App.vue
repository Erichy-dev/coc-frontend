<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen min-h-screen">
    <header class="fixed top-1 font-serif">
      <div>
        <nav class="grid grid-cols-12 gap-2 ">
          <p class="col-start-2 col-span-5 font-black">CHRISTIAN OUTREACH CENTER &nbsp&nbsp THE BLESSED PLACE</p>
          <RouterLink to="/">HOME</RouterLink>                          
          <RouterLink to="/ministries">MINISTRIES</RouterLink>                          
          <RouterLink to="/sermons">SERMONS</RouterLink>                          
          <RouterLink to="/events">EVENTS</RouterLink>                          
          <RouterLink to="/resources">RESOURCES</RouterLink>
          <RouterLink class="bg-blue-500 px-8 rounded-lg" to="/give">GIVE</RouterLink>                         
        </nav>
      </div>
      <hr>
    </header>
    <div class="flex-1 mx-auto p-8">
    <!-- The body goes here -->
      <RouterView />
    </div>
    
    <div class="w-full border-t border-grey pin-b">
      <Footer/>
    </div>
  </div>
</template>

<style>
h1{
  font-weight: 900;
}
</style>
