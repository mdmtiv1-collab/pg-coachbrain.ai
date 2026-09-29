// Dados dos 150 Exercícios de Basquetebol CoachBrain (25 por categoria em Português de Portugal)
const categories = [
  {
    id: "arremesso",
    title: "Exercícios de Lançamento",
    emoji: "🏀",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Mecânica Básica e Alinhamento do Lançamento", "Lançamento de Uma Mão de Curta Distância", "Lançamento na Zona Morta (Corner)",
        "Mikan Drill de Lançamento", "Lançamento após Rotação de Pivô", "Catch & Shoot Estático de Média Distância",
        "Lançamento da Linha de Lance Livre", "Fadeaway de Curta Distância", "Lançamento após Crossover",
        "Step-back de Três Pontos", "Lançamento a Sair do Bloqueio (Pick & Roll)", "Lançamento Rápido após Passe",
        "Lançamento em Velocidade na Transição", "Catch & Shoot de Três Pontos", "Lançamento Desequilibrado sob Pressão",
        "Lançamento em Flutuador (Floater)", "Lançamento na Tabela com Ângulo", "Lançamento de Três Pontos após Drible Lateral",
        "Lançamento com Defensor Ativo", "Lançamento sob Fadiga (Fim de Treino)", "Lançamento de Gancho Curto",
        "Lançamento após Finta de Lançamento (Pump Fake)", "Pull-up Jump Shot de Média Distância", "Lançamento sob Tabela de Costas",
        "Simulação de Lançamento no Último Segundo"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `arr_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${8 + (i % 3) * 3} min`,
        desc: `Este exercício foca-se no aperfeiçoamento da tua mecânica de lançamento de basquetebol, alinhamento do braço guia, rotação da bola e impulso das pernas para garantir estabilidade e precisão.`,
        steps: [
          "Mantém a base dos pés na largura dos ombros, apontados ligeiramente para o cesto.",
          "Segura a bola criando uma janela visual, mantendo o cotovelo alinhado a 90 graus.",
          "Usa a flexão das pernas para gerar o impulso vertical necessário.",
          "Solta a bola no ponto mais alto do salto, terminando com a extensão completa do braço e a flexão do pulso.",
          "Monitoriza a rotação da bola para garantir estabilidade na trajetória."
        ]
      };
    })
  },
  {
    id: "resistencia",
    title: "Resistência e Condição Física",
    emoji: "🏃‍♂️",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Suicídios de Campo Inteiro", "Sprint e Backpedal Contínuo", "Mikan Drill para Cardio",
        "Deslocamento Defensivo de Linha a Linha", "Saltos Laterais de Obstáculos", "Sprint de Contra-Ataque com Lançamento em Passada",
        "Flexão de Braço Explosiva com Bola", "Prancha Dinâmica com Passe de Bola", "Agachamento Isométrico com Drible",
        "Salto para Caixa com Simulação de Ressalto", "Deslocamento em Ziguezague com Carga", "Treino de Impulsão Vertical Contínuo",
        "Lançamento de Medicine Ball na Área Restritiva", "Subida Lateral de Campo em Velocidade", "Passada Dinâmica com Drible Baixo",
        "Burpee com Salto e Extensão de Lançamento", "Corrida de Recuperação Defensiva", "Deslocamento de Ressaltador",
        "Circuito de Abdominais com Drible em 8", "Salto sobre Cone com Rotação", "Simulação de Prolongamento Exaustivo",
        "Sprint com Resistência de Elástico", "Treino de Flexibilidade Dinâmica no Pavilhão", "Salto com Bloqueio de Tabela",
        "Corrida com Mudança de Direção Contínua"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `res_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${10 + (i % 2) * 5} min`,
        desc: `Desenvolve a capacidade cardiorrespiratória e a força muscular necessárias para manter a máxima intensidade física durante os quatro períodos do jogo de basquetebol.`,
        steps: [
          "Inicia na posição base de basquetebol.",
          "Executa as arrancadas atingindo a velocidade máxima rapidamente.",
          "Mantém o centro de gravidade baixo ao travar ou mudar de direção.",
          "Foca-te na respiração rítmica para retardar a fadiga.",
          "Completa todas as repetições mantendo a técnica correta de drible e postura."
        ]
      };
    })
  },
  {
    id: "passe",
    title: "Exercícios de Passe",
    emoji: "🏀",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Passe de Peito Básico", "Passe Picado de Precisão", "Passe de Ombro (Baseball Pass)",
        "Passe por Cima da Cabeça", "Passe de Uma Mão após Drible", "Passe Sem Olhar (No-Look Pass)",
        "Passe de Costas Explosivo", "Passe de Bolso (Pocket Pass) para o Poste", "Passe Rápido de Hand-off",
        "Passe em Gancho em Movimento", "Passe sob Pressão Defensiva", "Receção Dinâmica em Velocidade",
        "Passe Longo de Contra-Ataque", "Treino de Passe na Parede com Duas Bolas", "Passe com Efeito Lateral",
        "Passe Rápido em Círculo (Team Drill)", "Passe Picado sob o Defensor", "Passe de Voleibol (Tap Pass)",
        "Passe de Entrada na Área Restritiva", "Passe Lateral Desequilibrado", "Passe Rápido de Transição",
        "Passe Pós-Penetração (Kickout Pass)", "Passe com Dificuldade de Visão Periférica", "Passe de Lóbulo sobre a Defesa",
        "Passe Rápido de Toque Único"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `pas_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${8 + (i % 3) * 2} min`,
        desc: `Aperfeiçoa a precisão, força e tomada de decisão dos teus passes para encontrar colegas de equipa desmarcados e manter a posse de bola longe da defesa.`,
        steps: [
          "Dá um passo em direção ao alvo para gerar energia e direção.",
          "Estende os braços completamente em direção ao teu colega de equipa.",
          "Finaliza com os polegares a apontar para baixo para garantir a rotação correta.",
          "Foca-te no peito ou nas mãos do recetor como alvo principal.",
          "Antecipa o movimento do defensor antes de soltar a bola."
        ]
      };
    })
  },
  {
    id: "drible",
    title: "Drible e Controlo de Bola",
    emoji: "👟",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Drible de Controlo Baixo", "Drible de Proteção com Braço Oposto", "Crossover Estático",
        "Drible entre as Pernas Estático", "Drible por Trás das Costas Básico", "In-and-Out Dribble",
        "Crossover em Movimento", "Drible em Ziguezague entre Cones", "Drible com Duas Bolas Simultâneas",
        "Drible com Duas Bolas Alternadas", "Drible de Bolso (Pocket Dribble)", "Drible com Bola de Ténis (Coordenação)",
        "Hesitation Move (Hesitação)", "Drible com Mudança de Ritmo", "Drible de Recuo contra Pressão",
        "Spin Move (Giro)", "Drible em 8 entre as Pernas", "Drible Baixo Estilo Aranha",
        "Drible Cruzado com Penetração", "Drible de Proteção a Avançar de Costas", "Drible de Velocidade de Campo Inteiro",
        "Crossover Duplo Explosivo", "Drible Combinado (Cross, Between, Behind)", "Drible Deslizado Lateral",
        "Controlo de Bola cego sem Olhar"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `dri_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${10 + (i % 3) * 2} min`,
        desc: `Ganha controlo absoluto da bola de basquetebol com exercícios focados na força das mãos, coordenação motora e habilidade de mudar de direção sem perder o ritmo.`,
        steps: [
          "Mantém a postura baixa (posição de tripla ameaça ampliada).",
          "Dribla a bola com a ponta dos dedos e não com a palma da mão.",
          "Mantém os olhos no campo e nunca na bola.",
          "Usa o braço livre e o corpo para proteger a bola.",
          "Varia a altura do drible para confundir a marcação defensiva."
        ]
      };
    })
  },
  {
    id: "velocidade",
    title: "Velocidade e Agilidade",
    emoji: "⚡",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Escada de Agilidade - Toques Rápido", "Arrancada e Paragem Explosiva (Closeout)", "Mudança de Direção com Cones",
        "Deslocamento Lateral com Toque no Solo", "Drop Step de Reação Rápida", "Sprint em Curva na Linha de 3 Pontos",
        "Salto e Arrancada no Campo de Defesa", "Deslocamento em X", "Reação ao Apito - Corrida de Contra-Ataque",
        "Treino de Pés Rápidos na Área Restritiva", "Passada Cruzada Lateral (Cross-step)", "Corrida de Recuperação Traseira",
        "Agilidade de Pés com Duas Bolas de Drible", "Agachamento e Salto Explosivo Lateral", "Finta de Corpo sem Bola",
        "Sprint com Paragem num Tempo", "Sprint com Paragem em Dois Tempos", "Deslocamento Defensivo Diagonal",
        "Corrida com Bloqueio de Linha de Passe", "Treino de Reação com Bola de Reação", "Agilidade com Resistência Elástica",
        "Agilidade entre Cones em T", "Deslocamento Cruzado Rápido com Giro", "Treino de Pés em Escada com Drible",
        "Deslocamento com Salto Vertical para Desarme"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `vel_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${8 + (i % 2) * 4} min`,
        desc: `Aumenta a velocidade dos teus pés e a agilidade de reação para mudar de direção em frações de segundo, tanto no ataque como na defesa.`,
        steps: [
          "Mantém o peso do corpo sobre a planta dos pés (calcanhares ligeiramente elevados).",
          "Executa movimentos de pés com máxima frequência e passadas curtas.",
          "Mantém a bacia e o tronco estáveis e inclinados para a frente.",
          "Ao mudar de direção, empurra o solo com força com a perna externa.",
          "Mantém a postura equilibrada para poder lançar ou passar imediatamente."
        ]
      };
    })
  },
  {
    id: "defesa",
    title: "Sistemas Defensivos",
    emoji: "🛡️",
    exercises: Array.from({ length: 25 }, (_, i) => {
      const titles = [
        "Postura Defensiva BÁSICA (Stance)", "Deslocamento de Ajuda Defensiva (Help Side)", "Marcação Sob Pressão Campo Inteiro",
        "Contestação de Lançamento Correta (Closeout)", "Navegação por Cima do Bloqueio (Over Screen)", "Navegação por Baixo do Bloqueio (Under Screen)",
        "Defesa de Poste Baixo (Post Defense)", "Antecipação na Linha de Passe (Deny)", "Bloqueio de Ressalto Defensivo (Box Out)",
        "Recuperação após Finta de Drible", "Rotação Defensiva em Equipa", "Posicionamento de Lado (Ice on Pick & Roll)",
        "Defesa de Contra-Ataque (1 contra 2)", "Foco e Pressão no Portador da Bola", "Passagem de Bloqueio Cego",
        "Postura de Mãos Ativas para Roubo de Bola", "Provocação de Falta Ofensiva (Charge)", "Comunicação Defensiva (Drill Falado)",
        "Marcação da Linha de Três Pontos", "Defesa contra Jogador sem Bola", "Recuperação após Ajuda (Recover)",
        "Defesa à Zona 2-3 Posicionamento", "Defesa à Zona 3-2 Posicionamento", "Defesa Homem a Homem Pressão Total",
        "Transição Defensiva em Desvantagem"
      ];
      const difficulties = ["Iniciante", "Intermédio", "Avançado"];
      const diff = difficulties[i % 3];
      return {
        id: `def_${i + 1}`,
        title: `${i + 1}. ${titles[i]}`,
        difficulty: diff,
        duration: `${10 + (i % 3) * 2} min`,
        desc: `Aprende os segredos da defesa de basquetebol, desde a postura individual correta para anular o drible do adversário até aos posicionamentos táticos de ajuda e rotação coletiva.`,
        steps: [
          "Mantém a postura bem baixa, joelhos e ancas flexionados.",
          "Abre bem os braços para ocupar espaço e fechar linhas de passe.",
          "Movimenta os pés lateralmente sem cruzar as pernas.",
          "Contesta todos os lançamentos estendendo o braço sem saltar desnecessariamente.",
          "Comunica com os teus colegas avisando sobre bloqueios e posições de ajuda."
        ]
      };
    })
  }
];

// App State
let currentCategoryId = "arremesso";
let currentExerciseId = "arr_1";
let completedExercises = JSON.parse(localStorage.getItem('completedExercises')) || [];

// YouTube Video Mapping for Basketball Categories
const categoryVideos = {
  arremesso: "U4y5Q_81Tps",
  resistencia: "hTz5vRpx65w",
  passe: "0S95J8k6vT4",
  drible: "31R4xY1967s",
  velocidade: "x8M_67V8nks",
  defesa: "1Uv_l3pP_9c"
};

const youtubeVideos = {
  arremesso: "U4y5Q_81Tps",
  resistencia: "hTz5vRpx65w",
  passe: "0S95J8k6vT4",
  drible: "31R4xY1967s",
  velocidade: "x8M_67V8nks",
  defesa: "1Uv_l3pP_9c"
};

// DOM Elements
const sidebarNav = document.getElementById('sidebar-nav');
const exerciseList = document.getElementById('exercise-list');
const videoTitle = document.getElementById('video-title');
const videoDifficulty = document.getElementById('video-difficulty');
const videoDuration = document.getElementById('video-duration');
const videoDesc = document.getElementById('video-desc');
const instructionList = document.getElementById('instruction-list');
const completeBtn = document.getElementById('complete-btn');
const progressText = document.getElementById('progress-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const videoPlaceholder = document.getElementById('video-placeholder');
const videoIframe = document.getElementById('video-iframe');

// Initialization
function init() {
  renderCategories();
  renderExercises(currentCategoryId);
  loadExercise(currentCategoryId, currentExerciseId);
  updateProgress();
}

// Render Sidebar Categories
function renderCategories() {
  if (!sidebarNav) return;
  sidebarNav.innerHTML = '';
  categories.forEach(cat => {
    const completedInCat = cat.exercises.filter(ex => completedExercises.includes(ex.id)).length;
    const btn = document.createElement('button');
    btn.className = `category-btn ${cat.id === currentCategoryId ? 'active' : ''}`;
    btn.onclick = () => selectCategory(cat.id);
    btn.innerHTML = `
      <span>${cat.emoji} ${cat.title}</span>
      <span class="category-count" id="count-${cat.id}">${completedInCat}/${cat.exercises.length}</span>
    `;
    sidebarNav.appendChild(btn);
  });
}

// Render Exercise List
function renderExercises(categoryId) {
  if (!exerciseList) return;
  exerciseList.innerHTML = '';
  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  category.exercises.forEach(ex => {
    const isCompleted = completedExercises.includes(ex.id);
    const card = document.createElement('div');
    card.className = `exercise-card ${ex.id === currentExerciseId ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    card.onclick = () => selectExercise(ex.id);
    card.innerHTML = `
      <div class="card-status-icon">✓</div>
      <div class="card-info">
        <h4 class="card-title">${ex.title}</h4>
        <span class="card-meta">${ex.difficulty} • ${ex.duration}</span>
      </div>
    `;
    exerciseList.appendChild(card);
  });
}

// Load Exercise Details
function loadExercise(categoryId, exerciseId) {
  const category = categories.find(c => c.id === categoryId);
  const exercise = category?.exercises.find(ex => ex.id === exerciseId);
  if (!exercise) return;

  currentExerciseId = exerciseId;

  if (videoTitle) videoTitle.textContent = exercise.title;
  if (videoDifficulty) videoDifficulty.textContent = exercise.difficulty;
  if (videoDuration) videoDuration.textContent = exercise.duration;
  if (videoDesc) videoDesc.textContent = exercise.desc;

  if (videoPlaceholder) videoPlaceholder.style.display = 'flex';
  if (videoIframe) {
    videoIframe.style.display = 'none';
    videoIframe.src = '';
  }

  const youtubeVideoId = youtubeVideos[categoryId] || "U4y5Q_81Tps";
  const extLink = document.getElementById('external-video-link');
  if (extLink) {
    extLink.href = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
  }

  if (videoPlaceholder) {
    videoPlaceholder.style.background = `linear-gradient(135deg, #090d16 0%, #111827 100%)`;
  }

  if (instructionList) {
    instructionList.innerHTML = '';
    exercise.steps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      instructionList.appendChild(li);
    });
  }

  document.querySelectorAll('.exercise-card').forEach(card => {
    card.classList.remove('active');
  });
  if (exerciseList) {
    const activeCard = Array.from(exerciseList.children).find((_, idx) => category.exercises[idx]?.id === exerciseId);
    if (activeCard) {
      activeCard.classList.add('active');
    }
  }

  const isCompleted = completedExercises.includes(exerciseId);
  if (completeBtn) {
    if (isCompleted) {
      completeBtn.classList.add('completed');
      completeBtn.innerHTML = `<span>✓ Treino Concluído</span>`;
    } else {
      completeBtn.classList.remove('completed');
      completeBtn.innerHTML = `<span>Marcar como Concluído</span>`;
    }
  }
}

function selectCategory(categoryId) {
  currentCategoryId = categoryId;
  const category = categories.find(c => c.id === categoryId);
  const firstExerciseId = category.exercises[0].id;
  
  renderCategories();
  renderExercises(categoryId);
  selectExercise(firstExerciseId);
}

function selectExercise(exerciseId) {
  currentExerciseId = exerciseId;
  loadExercise(currentCategoryId, exerciseId);
}

function toggleComplete() {
  const index = completedExercises.indexOf(currentExerciseId);
  if (index > -1) {
    completedExercises.splice(index, 1);
  } else {
    completedExercises.push(currentExerciseId);
  }

  localStorage.setItem('completedExercises', JSON.stringify(completedExercises));

  updateProgress();
  renderCategories();
  renderExercises(currentCategoryId);
  loadExercise(currentCategoryId, currentExerciseId);
}

function updateProgress() {
  if (!progressText && !progressBarFill) return;
  const total = categories.reduce((acc, cat) => acc + cat.exercises.length, 0);
  const completed = completedExercises.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (progressText) {
    progressText.innerHTML = `Progresso dos Treinos: <span>${completed} de ${total}</span> (${percentage}%)`;
  }
  if (progressBarFill) {
    progressBarFill.style.width = `${percentage}%`;
  }
}

function playVideo() {
  const categoryVideoId = categoryVideos[currentCategoryId] || "U4y5Q_81Tps";
  if (videoPlaceholder) videoPlaceholder.style.display = 'none';
  if (videoIframe) {
    videoIframe.style.display = 'block';
    videoIframe.src = `https://www.youtube.com/embed/${categoryVideoId}?autoplay=1`;
  }
}

document.addEventListener('DOMContentLoaded', init);
