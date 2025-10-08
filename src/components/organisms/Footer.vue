<template>
  <section class="w-full bg-green text-white py-10 px-4">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Texto + botones -->
      <div class="text-center md:text-left flex-1">
        <p class="text-sm mb-2">Stay tuned with the latest news and updates.</p>
        <h2 class="text-xl font-bold mb-4">Download the Temple app now</h2>
        <div class="flex justify-center md:justify-start gap-4">
          <a href="#" class="transition hover:opacity-80">
            <img
              src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
              alt="App Store"
              class="w-36"
            />
          </a>
          <a href="#" class="transition hover:opacity-80">
            <img
              src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
              alt="Google Play"
              class="w-36"
            />
          </a>
        </div>
      </div>

      <!-- Formulario -->
      <div class="flex-1 w-full max-w-md">
        <form class="space-y-3" novalidate>
          <input
            id="subscription_email"
            name="subscription_email"
            type="email"
            placeholder="Write your email here"
            class="w-full h-12 px-4 rounded border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
            autocomplete="off"
            spellcheck="false"
            aria-invalid="false"
          />
          <button
            type="submit"
            class="w-full h-12 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed yet
</script>

<style scoped>
/* Puedes agregar animaciones suaves si lo deseas */
</style>
