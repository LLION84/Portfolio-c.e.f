<template>
  <div class="container" id="contact">
    <div class="content_form">
      <section id="contact" class="contact-section">
        <h2>Contact</h2>
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="name">Nom / Prénom</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="subject">Objet</label>
            <input type="text" id="subject" v-model="form.subject" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>

          <button type="submit">Envoyer</button>
          <p
            v-if="statusMessage"
            :style="{
              color: statusColor,
              marginTop: '1rem',
              textAlign: 'center',
            }"
          >
            {{ statusMessage }}
          </p>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      form: {
        name: "",
        subject: "",
        message: "",
      },
      statusMessage: "",
      statusColor: "",
    };
  },
  methods: {
    sendEmail() {
      const serviceID = "service_jlpnhej";
      const templateID = "template_sop9x8i";
      const userID = "awRQk-37qQq35y9ID";

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then(() => {
          this.statusMessage = "Email envoyé avec succès !";
          this.statusColor = "green";
          this.form.name = "";
          this.form.subject = "";
          this.form.message = "";
        })
        .catch((error) => {
          console.error("Erreur complète :", error);
          this.statusMessage = "Une erreur est survenue lors de l'envoi.";
          this.statusColor = "red";
        });
    },
  },
};
</script>

<style scoped>
/* ✅ Conteneur principal */
.container {
  border-top: 3px solid #43484e;
  border-bottom: 3px solid #43484e;
  min-height: 80vh;
  background-color: #edeef0; /* fond sombre */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content_form {
  background-color: #2c2f33;
  border-radius: 5px;
  padding: 2rem 3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 500px;
}

.contact-section {
  color: #edeef0;
}

h2 {
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  background-color: #edeef0;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button {
  background-color: #007bff;
  color: #edeef0;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}
</style>
