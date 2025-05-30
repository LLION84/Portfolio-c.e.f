<template>
  <div class="not-found">
    <img src="/public/Image Projets/img404.png" alt="404 image" />
    <h1>404</h1>
    <p>Page non trouvée</p>
    <router-link :to="{ name: 'Home' }">Accueil</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 300px;
}

.not-found img {
  max-width: 300px;
  margin-bottom: 20px;
}

.not-found h1 {
  font-size: 5rem;
  margin: 0;
}

.not-found p {
  font-size: 1.5rem;
  margin: 10px 0;
}

.not-found a {
  color: #007bff;
  text-decoration: underline;
}
@media (max-width: 768px) {
  .not-found {
    padding-top: 250px;
    margin-top: 0;
  }
}
</style>
