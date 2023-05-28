import Post from '@/types/Post';

const posts: Post[] = [
  {
    id: 1,
    title: '5 dicas para sua carreira profissional',
    resumeDescription: 'Conheça algumas dicas e avance na sua carreira profissional',
    postImage: 'christina-wocintechchat-com-eF7HN40WbAQ-unsplash',
    completeDescription: 
    '<ol><li>Defina suas metas e planeje seus passos. Saber onde você quer chegar e como vai fazer isso é essencial para manter o foco e a motivação. Trace um plano de ação com prazos e indicadores de progresso e revise-o periodicamente.</li>'+
    '<li>Invista em qualificação e atualização. O mundo está em constante mudança e você precisa acompanhar as novidades e tendências da sua área de atuação. Busque cursos, livros, podcasts, eventos e outras fontes de conhecimento que possam agregar valor ao seu currículo e ao seu desempenho.</li>'+
    '<li>Desenvolva suas habilidades interpessoais. Não basta ser bom no que faz, você também precisa saber se comunicar, trabalhar em equipe, resolver conflitos e lidar com feedbacks. Essas são competências cada vez mais valorizadas pelos empregadores e que podem fazer a diferença na sua carreira.</li>'+
    '<li>Amplie sua rede de contatos. Networking é uma ferramenta poderosa para abrir portas e oportunidades. Procure se relacionar com pessoas que possam te inspirar, te apoiar ou te indicar para vagas e projetos. Participe de grupos, comunidades, fóruns e redes sociais da sua área e mostre seu trabalho e suas ideias.</li>'+
    '<li>Cuide da sua saúde física e mental. De nada adianta ter sucesso profissional se você não estiver bem consigo mesmo. Reserve um tempo para cuidar do seu corpo, da sua mente e das suas emoções. Pratique exercícios, alimente-se bem, durma bem, medite, relaxe e divirta-se. Lembre-se que o equilíbrio é a chave para uma vida feliz.</li>'
  },
  {
    id: 2,
    title: '5 dicas para desenvolvimento de aplicações frontend',
    resumeDescription: 'Aprenda 5 dicas incríveis para frontend!',
    postImage: 'florian-olivo-Ek9Znm8lQ1U-unsplash',
    completeDescription: '<ol><li>Aprenda a usar frameworks de desenvolvimento front-end populares, como React, Angular ou Vue, para criar interfaces de usuário dinâmicas e interativas</li>' +
      '<li>Conheça as melhores práticas de design de interface e experiência do usuário, para criar sites e aplicativos que sejam fáceis de usar e agradáveis de navegar</li>' +
      '<li>Escalone suas aplicações frontend usando técnicas como lazy loading, CDN e caching, para reduzir o consumo de recursos do servidor e melhorar o desempenho do seu site</li>' +
      '<li>Pratique suas habilidades de frontend criando projetos simples, mas desafiadores, como uma grid de preços, um menu responsivo, um formulário de contato ou um jogo da velha</li>' +
      '<li>Mantenha-se atualizado com as tendências e novidades do mercado de desenvolvimento web front-end, seguindo blogs, podcasts, newsletters e comunidades online</li><ol>'
  },
  {
    id: 3,
    title: '5 dicas para uso do vue.js',
    resumeDescription: 'Aprenda Vue.js com 5 dicas incríveis!',
    postImage: 'nubelson-fernandes-UcYBL5V0xWQ-unsplash',
    completeDescription: '<ol><li>Use o Vue CLI para criar projetos rapidamente</li>' +
    '<li>Aproveite os recursos do Vue Devtools para depurar e inspecionar componentes</li>' +
    '<li>Utilize componentes reutilizáveis e slots para organizar o código</li>' +
    '<li>Aplique transições e animações para melhorar a experiência do usuário</li>' +
    '<li>Adote o Vuex para gerenciar o estado global da aplicação</li><ol>'
  },
  {
    id: 4,
    title: '5 dicas para uso do react.js',
    resumeDescription: 'Aprenda React.js com 5 dicas incríveis!',
    postImage: 'lautaro-andreani-UYsBCu9RP3Y-unsplash',
    completeDescription: '<ol><li>Use o create-react-app para criar projetos rapidamente</li>' +
    '<li>Aproveite os recursos do React Devtools para depurar e inspecionar componentes</li>' +
    '<li>Utilize componentes reutilizáveis e props para organizar o código</li>' +
    '<li>Aplique transições e animações para melhorar a experiência do usuário</li>' +
    '<li>Adote o Redux para gerenciar o estado global da aplicação</li><ol>'
  },
];

export default posts;