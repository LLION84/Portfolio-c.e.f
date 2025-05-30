<template>
  <div>
    <Header />
    <main>
      <section class="about-me" id="presentation">
        <div class="content_about-me">
          <h1>Présentation</h1>
          <p>
            Blaise Zinou, développeur web JUNIOR basé à Avignon. Après une
            reconversion dans le développement suite à un bac en systèmes
            numériques, j’ai construit des projets concrets pour affiner mes
            compétences. Voici mon portfolio : une vitrine de mon travail,
            pensée pour vous permettre d’évaluer ce que je vaux sur le terrain.
          </p>
          <button class="ButtonOpenModal" @click="showModal = true">
            Skills
          </button>
        </div>

        <div v-if="showModal" class="modal" @click.self="showModal = false">
          <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>

            <h2>Compétences Codage</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Node.js</li>
            </ul>

            <h2>Compétences Développement Web</h2>
            <ul>
              <li>Figma</li>
              <li>GIMP</li>
              <li>Google Docs</li>
              <li>Git / GitHub</li>
              <li>VSCode</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="gallery-item" id="projets">
        <section class="gallery-item-cv">
          <h1>Cv Numerique</h1>
          <p>
            Les avantages d’un CV numérique sont nombreux, mais dans notre
            métier, ils se révèlent particulièrement pertinents. Il permet, dès
            le premier regard, de montrer ses compétences en code tout en
            offrant une expérience fluide et pratique à l’utilisateur, qui peut
            accéder facilement à toutes les informations (adresse, numéro, mail,
            etc.) depuis son ordinateur. C’est une approche plus contemporaine,
            en rupture avec l’ancienne méthode où il fallait se déplacer pour
            déposer un CV papier, souvent mis de côté ou jeté.
          </p>
          <button @click="showModal_cv = true">Découvrez le CV</button>

          <img
            src="/public/Image Projets/CVimage.png"
            alt="Image_CV"
            class="image-cv"
          />

          <div
            v-if="showModal_cv"
            class="modal_cv"
            @click.self="showModal_cv = false"
          >
            <div class="modal-content_cv">
              <span class="close" @click="showModal_cv = false">&times;</span>

              <h1>Mon CV Numerique en ligne</h1>
              <p>Coder en Mai 2025</p>
              <h1>technologies utilisées</h1>
              <ul>
                <li>Git / Git Hub</li>
                <li>Css</li>
                <li>Html</li>
              </ul>
              <p>
                <strong>
                  Visitez le projet sur GitHub pour plus d'informations sur la
                  construction du code HTML et CSS.</strong
                >
              </p>
              <a href="/public/Projet/CV/cvhtml.html" target="_blank"
                >Visiter le CV !</a
              >
              <a href="https://github.com/LLION84/CV-num-rique" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="vertical-align: middle; margin-right: 8px"
                >
                  <path
                    d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.303 
                    3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                    1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 
                    3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.931 
                    0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 
                    0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404 
                    11.5 11.5 0 0 1 3.003.404c2.291-1.552 3.297-1.23 
                    3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 
                    1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.48 
                    5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 
                    3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 
                    24 12.296c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Repository GitHub</a
              >
            </div>
          </div>
        </section>

        <section class="formulaire_item">
          <h1>Formulaire interactif</h1>
          <p>
            Découvrez un formulaire de commentaires simple et dynamique.
            Lorsqu’un utilisateur soumet son nom, prénom et message, son
            commentaire s’affiche automatiquement au-dessus du formulaire. Une
            manière intuitive et moderne de recueillir des retours.À l'origine,
            le formulaire ne permettait pas de soumettre les informations
            saisies. J’ai corrigé cela, ajouté du style et utilisé JavaScript
            pour résoudre le problème.
          </p>
          <button @click="showModal_form = true">
            Découvrez le Formulaire
          </button>
          <img
            src="/public/Image Projets/IMGformjs.png"
            alt="Aperçu du formulaire interactif"
            class="img-form"
          />
          <div
            v-if="showModal_form"
            class="modal_form"
            @click.self="showModal_form = false"
          >
            <div class="modal-content_form">
              <span class="close" @click="showModal_form = false">&times;</span>

              <h1>Formulaire interactif</h1>
              <p>Coder en 2024</p>
              <h1>technologies utilisées</h1>
              <ul>
                <li>Git / Git Hub</li>
                <li>Css</li>
                <li>Html</li>
                <li>JavaScript</li>
              </ul>
              <p>
                <strong>
                  Visitez le projet sur GitHub pour plus d'informations sur la
                  construction du code HTML et CSS.</strong
                >
              </p>
              <a href="/public/Projet/Dyn.Espc.com/espccom.html" target="_blank"
                >Visiter le formulaire !</a
              >
              <a
                href="https://github.com/LLION84/Devoir-c.e.f-ESPACECOMMENTAIRE"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="vertical-align: middle; margin-right: 8px"
                >
                  <path
                    d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.303 
                    3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                    1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 
                    3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.931 
                    0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 
                    0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404 
                    11.5 11.5 0 0 1 3.003.404c2.291-1.552 3.297-1.23 
                    3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 
                    1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.48 
                    5.921.43.371.814 1.102.814 2.222 0 1.606-.015 2.898-.015 
                    3.293 0 .319.216.694.825.576C20.565 22.092 24 17.592 
                    24 12.296c0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Repository GitHub</a
              >
            </div>
          </div>
        </section>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";

const showModal = ref(false);
const showModal_cv = ref(false);

const showModal_form = ref(false);
</script>

<style scoped>
.image-cv:hover,
.img-form:hover {
  transform: scale(1.1);
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3); /* Ombre en bas à droite */
}
main {
  margin-top: 110px;
}
.about-me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #b0b4ba;
  padding-bottom: 100px;
  padding: 70px;
}

.content_about-me {
  padding: 20px;
}

.ButtonOpenModal {
  padding: 14px 28px;
  font-size: 20px;
  background-color: #111113;
  color: #b0b4ba;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 30px;
}

.ButtonOpenModal:hover {
  background-color: #696e77;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  padding: 20px;
  border-radius: 3px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  background-color: #777b84;
}
.modal-content ul {
  padding: 0;
  margin: 0 auto;
}

.modal-content ul li {
  list-style: none;
  padding: 3px;
  margin: 3px auto;
  background-color: #212225;
  color: #b0b4ba;
  width: 50%;
  text-align: center;
  border-radius: 3px;
}
.modal-content h2 {
  margin: 20px auto;
  font-size: 24px;
  text-align: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}

.gallery-item {
  display: flex;
  flex-direction: column;
}
.gallery-item-cv {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 20px;
  background-color: #edeef0;
  padding-bottom: 100px;
  padding: 70px;
  border-top: 1px solid #43484e;
}

.gallery-item-cv button {
  padding: 14px 28px;
  font-size: 20px;
  background-color: #111113;
  color: #b0b4ba;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 30px;
}
.gallery-item-cv button:hover {
  background-color: #696e77;
}
.image-cv {
  width: 100%;
  max-width: 450px;
  height: auto;
  transition: transform 0.5s ease;
  margin-top: 20px;
  object-fit: cover;
}
.image-cv:hover {
  transform: scale(1.1);
}

.modal_cv {
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content_cv {
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  background-color: #777b84;
}

.modal-content_cv ul li {
  list-style: none;
  padding: 3px 10px;
  margin: 3px 0;
  background-color: #212225;
  color: #b0b4ba;
  width: 20%;
  border-radius: 3px;
}

.modal-content_cv a {
  background-color: #2e3135;
  border: 3px solid #363a3f;
  text-decoration: none;
  color: #b0b4ba;
  padding: 10px 20px;
  display: inline-block;
  margin: 10px 5px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 180px;
  text-align: center;
}

.modal-content_cv a::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(90, 176, 247, 0.2),
    transparent
  );
  transition: all 0.5s ease;
}

.modal-content_cv a:hover::before {
  left: 100%;
}

.modal-content_cv a:hover {
  box-shadow: 0 0 10px #5ab0f7, 0 0 20px #5ab0f7;
  border-color: #5ab0f7;
  color: #ffffff;
}

.formulaire_item {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 20px;
  background-color: #b0b4ba;
  padding-bottom: 100px;
  padding: 70px;
  border-top: 1px solid #43484e;
}

.formulaire_item button {
  padding: 14px 28px;
  font-size: 20px;
  background-color: #111113;
  color: #b0b4ba;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 30px;
}
.formulaire_item button:hover {
  background-color: #696e77;
}
.img-form {
  width: 100%;
  max-width: 500px;
  height: auto;
  transition: transform 0.5s ease;
  margin-top: 20px;
  object-fit: cover;
}
.img-form:hover {
  transform: scale(1.1);
}

.modal_form {
  display: flex;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content_form {
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  background-color: #777b84;
}
.modal-content_form ul li {
  list-style: none;
  padding: 3px 10px;
  margin: 3px 0;
  background-color: #212225;
  color: #b0b4ba;
  width: 20%;
  border-radius: 3px;
}

.modal-content_form a {
  background-color: #2e3135;
  border: 3px solid #363a3f;
  text-decoration: none;
  color: #b0b4ba;
  padding: 10px 20px;
  display: inline-block;
  margin: 10px 5px;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 180px;
  text-align: center;
}

.modal-content_form a::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(90, 176, 247, 0.2),
    transparent
  );
  transition: all 0.5s ease;
}

.modal-content_form a:hover::before {
  left: 100%;
}

.modal-content_form a:hover {
  box-shadow: 0 0 10px #5ab0f7, 0 0 20px #5ab0f7;
  border-color: #5ab0f7;
  color: #ffffff;
}

.my_contact_form {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
}

.contact_form-group {
  margin-bottom: 1.5rem;
}

.my_contact_form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.my_contact_form input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.my_contact_form button {
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.my_contact_form button:hover {
  background-color: #0056b3;
}
@media (max-width: 768px) {
  main {
    margin-top: 170px;
  }
}
</style>
