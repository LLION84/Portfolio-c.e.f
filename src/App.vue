<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>
<script setup>
import Header from "./component/Header.vue";
</script>

<style>
body {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
p {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 2s forwards;
  animation-delay: var(--delay);
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 1em;
}

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-content,
.modal-content_cv,
.modal-content_form {
  animation: fadeIn 0.5s ease-out;
}
</style>
