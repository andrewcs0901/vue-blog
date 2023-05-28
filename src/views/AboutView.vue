<template>
  <div class="about">
    <h1>Andrew Costa Silva</h1>
    <section>
        <img alt="Author profile photo" class="profile" src="https://avatars.githubusercontent.com/u/16245919?s=400&u=88c1a65648329ce26c57aed763d696368c0e1781&v=4" width="125" height="125" />
        <div class="bio-phrases">
            <p>
              Sou uma pessoa que adora resolver problemas, sei que por meio deles, consigo por em prova os conhecimentos, adquirir novas habilidades e experiências.
            </p>
            <p>
              Além disso, gosto de trabalhar em equipe, principalmente para trocar ideias, compartilhar conhecimentos para que os objetivos individuais e da equipe sejam atingidos.
            </p>
            <p>
              Formado em Engenharia de Software e estudante de Arquitetura de Software Distribuído, possuo mais de 3 anos de experiência em desenvolvimento web.
            </p>
            <p>
              Atualmente trabalho na Take Blip, por lá, atuo com a construção de chatbots, desenvolvimento de plugins para a plataforma Blip e de aplicações front-end em React.
            </p>
        </div>
      </section>
      <section>
            <router-link to="/">Voltar ao início</router-link>
      </section>
  </div>
</template>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  .about h1 {
    margin-bottom: 1rem;
  }
  .profile {
    border-radius: 50%;
    margin: 12px auto;
    display: block;
  }
  .bio-phrases {
    text-align: justify;
  }
  .bio-phrases p {
    margin-bottom: 1rem;
  }
</style>
