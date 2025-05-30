<template>
  <header ref="headerRef">
    <div class="logo">
      <a href="#">
        <img
          src="/public/Image Projets/logoportrfolio.png"
          alt="Logo du site"
          width="5%"
        />
      </a>
    </div>

    <nav>
      <ul>
        <li>
          <a
            href="#presentation"
            :class="{ active: activeSection === 'presentation' }"
            >Présentation</a
          >
        </li>
        <li>
          <a href="#projets" :class="{ active: activeSection === 'projets' }"
            >Projets</a
          >
        </li>
        <li>
          <a href="#contact" :class="{ active: activeSection === 'contact' }"
            >Contact</a
          >
        </li>
        <li>
          <router-link :to="{ name: 'NotFound' }">Page introuvable</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const headerRef = ref(null);
let scrollTimeout = null;

const showHeader = () => {
  if (headerRef.value) {
    headerRef.value.style.transform = "translateY(0)";
  }
};

const hideHeader = () => {
  // Cache seulement si on n'est pas tout en haut
  if (headerRef.value && window.scrollY > 0) {
    headerRef.value.style.transform = "translateY(-100%)";
  }
};

const showHeaderOnScroll = () => {
  showHeader();

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    hideHeader();
  }, 1500);
};

onMounted(() => {
  // ✅ Si on est tout en haut au chargement, affiche le header
  if (window.scrollY === 0) {
    showHeader();
  }

  window.addEventListener("scroll", showHeaderOnScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", showHeaderOnScroll);
  clearTimeout(scrollTimeout);
});

const activeSection = ref("");
const updateActiveSection = () => {
  const sections = ["presentation", "projets", "contact"];

  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection(); // pour init
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<style>
header {
  background-color: #fcfdffef;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #43484e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.6s ease;
  z-index: 1000;
  transform: translateY(-100%);
}

nav ul {
  display: flex;
  padding: 0;
  list-style: none;
}

nav li {
  margin: 0 50px;
}

nav ul li a {
  padding: 6px 12px;

  color: #111113;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.8s;
  text-decoration: none;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  nav {
    height: auto;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }

  nav li {
    margin: 10px;
  }
  .logo a img {
    width: 50px;
    height: auto;
  }
}

.logo a img {
  height: auto;
  width: 60px;
  max-width: 100%;
  border: #111113 solid 2px;
  object-fit: contain;
}
header nav ul li a.active {
  border-bottom: 2px solid #111113;
  padding-bottom: 6px;
}
</style>
