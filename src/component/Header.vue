<template>
  <header>
    <div class="logo">
      <a href="#">
        <img src="" alt="Logo du site" />
      </a>
    </div>

    <nav>
      <ul>
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#creations">Créations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style>
header {
  background-color: red;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

nav ul {
  display: flex;
  padding: 0;
  list-style: none;
}

nav li {
  margin: 0 50px;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    display: block;
    text-align: center;
  }

  nav li {
    margin: 20px 0;
  }
}
</style>
