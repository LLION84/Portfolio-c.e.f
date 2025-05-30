<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="social-icons">
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <!-- Icône GitHub en SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 
              9.8 8.205 11.387 0.6 0.113 0.82-0.258 
              0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 
              0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.09-0.745 
              0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 
              1.84 1.236 1.07 1.835 2.809 1.305 3.495 
              0.998 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.3-5.467-1.332-5.467-5.931 
              0-1.31 0.467-2.381 1.235-3.221-0.123-0.303-0.535-1.523 
              0.117-3.176 0 0 1.008-0.322 3.301 
              1.23 0.957-0.266 1.983-0.399 3.003-0.404 
              1.02 0.005 2.047 0.138 3.006 0.404 
              2.291-1.552 3.297-1.23 3.297-1.23 
              0.653 1.653 0.241 2.873 0.118 3.176 
              0.77 0.84 1.233 1.911 1.233 3.221 
              0 4.61-2.807 5.628-5.479 5.921 
              0.43 0.372 0.823 1.102 0.823 2.222 
              0 1.606-0.014 2.896-0.014 3.286 
              0 0.319 0.216 0.694 0.825 0.576 
              4.765-1.589 8.2-6.084 8.2-11.386 
              0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <!-- Icône LinkedIn en SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 
              3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 
              8h3.6v2.2h.05c.5-.95 1.7-2.2 3.5-2.2 
              3.75 0 4.45 2.45 4.45 5.6V24h-4v-8.4c0-2 
              0-4.6-2.8-4.6s-3.2 2.2-3.2 4.4V24h-4V8z"
            />
          </svg>
        </a>
      </div>

      <div class="footer-text">Dernière mise à jour : {{ lastUpdated }}</div>
    </div>
  </footer>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>

<style>
.site-footer {
  background-color: #272a2d;
  color: #b0b4ba;
  padding: 20px;
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  margin-top: 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.social-icons a {
  color: #b0b4ba;
  margin: 0 10px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #6cace4;
}

.social-icons svg {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

.footer-text {
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .social-icons svg {
    width: 22px;
    height: 22px;
  }

  .footer-text {
    font-size: 0.8rem;
  }
}
</style>
