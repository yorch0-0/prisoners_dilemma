import { createStore } from "vuex";

export default createStore({
  state: {
    settings: {
      lang: "es",
      wernerParameter: 0,
      strategy: {
        playerA: "0",
        playerB: "0",
      },
    },
    results: {
      years_playerA: null,
      years_playerB: null,
    },

    lang: {
      en: {
        navbar: {
          title: "Quantum Prisoner's Dilemma",
          home: "Home",
          about: "About",
          change: "EN",
        },
        controls: {
          wernerParameter: "Werner's Parameter",
          buttonsTitle: "Pick your strategy",
          playerATitle: "Player A",
          playerBTitle: "Player B",
          buttons: {
            cooperate: "Cooperate",
            deflect: "Betray",
            quantum: "Quantum",
          },
          rounds: "How many rounds would you like to play?",
          run: "Run",
        },
        characters: {
          title: "YOUR STRATEGY",
          playerATitle: "PLAYER A",
          playerBTitle: "PLAYER B",
          strategy: {
            cooperate: "Cooperate",
            deflect: "Betray",
            quantum: "Quantum",
          },
        },
        results: {
          title: "Results",
          playerATitle: "Player A",
          playerBTitle: "Player B",
        },
        acknowledgements: {
          universities: "Associated Universities:",
          titleOne: "What is it?",
          titleTwo: "What is it for?",
          thanksTo: "Special thanks to",
        },
        body: {
          p1: `
            What is it?
          `,
          p2: `The prisoner's dilemma is a problem in which there are two prisoners who have committed a crime together.`,
          p3: `Suppose the prisoners are separated and each is told that their sentence will be reduced to 3 years if and only if both
          <span class="text-rose-400 font-semibold">betray</span>
          each other.`,
          p4: `
          Otherwise, if both
          <span class="text-rose-400 font-semibold">keep quiet</span>,
          they will have a sentence of only 1 year in prison.`,
          p5: `
          The last case is that if the prisoners <span class='font-medium'><i>give different answers</i></span>, the sentence for the one who did not betray will be 5 years and the
          other will go <span class="bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-400">free</span>.`,
          p6: `The results are listed in the following matrix:`,
          p7: `Analyzing it, what would be the best option? For both prisoners, the best option is to
          <span class="text-rose-400 italic">betray</span> since both will be in a 
          <span class="font-semibold italic">advantageous condition</span> than the other possible ones,
          in which they will not risk being imprisoned for 5 years.`,
          p8: `However, thanks to
          <span class="text-[#00f7ff] italic"> quantum theory</span>, the
          probabilities of obtaining each of these sentences
          <span class="text-3xl font-bold italic">change</span>.`,
          p81: `<p>Note that you arrive at a matrix where the years in prison are
                MINORS than those conventionally seen,
                <strong>How?</strong> Here is the purpose of this website!
                Go deeper into this new world and discover how to obtain the
                better results!</p>`,
          prisoner: "Prisoners",
          yearOne: "1 year",
          yearThree: "3 years",
          yearFive: "5 years",
          optionOne: "Betray",
          optionTwo: "Keep Quiet",
          optionThree: "Quantum",
          free: "Free",
        },
      },

      es: {
        navbar: {
          title: "Dilema Cuántico de los Prisioneros",
          home: "Inicio",
          about: "Acerca de",
          change: "ES",
        },
        controls: {
          wernerParameter: "Parámetro W",
          buttonsTitle: "Selecciona tu estrategia",
          playerATitle: "Jugador A",
          playerBTitle: "Jugador B",
          buttons: {
            cooperate: "Cooperar",
            deflect: "Delatar",
            quantum: "Cuántico",
          },
          rounds: "¿Cuántas rondas deseas jugar?",
          run: "Correr",
        },
        characters: {
          title: "TU ESTRATEGIA",
          playerATitle: "JUGADOR A",
          playerBTitle: "JUGADOR B",
          strategy: {
            cooperate: "Coopera",
            deflect: "Delata",
            quantum: "Cuantico",
          },
        },
        results: {
          title: "Resultados",
          playerATitle: "Jugador A",
          playerBTitle: "Jugador B",
        },
        acknowledgements: {
          universities: "Universidades Asociadas:",
          titleOne: "¿Qué es?",
          titleTwo: "¿Para qué sirve?",
          thanksTo: "Agradecimientos a",
        },
        body: {
          p1: `
          ¿Qué es?
          `,
          p2: `El dilema del prisionero, es un problema en el que hay dos
              prisioneros que han cometido un crimen juntos.`,
          p3: `Suponga que los prisioneros son separados y se les dice a
                    cada uno que su pena será reducida a 3 años si y solo si,
                    los dos
                    <span class="text-rose-400 font-semibold">delatan</span>
                    al otro.`,
          p4: `
                    En caso contrario, si los dos
                    <span class="text-rose-400 font-semibold">callan</span>,
                    tendrán una pena de tan solo 1 año de prisión.`,
          p5: `
                    El último caso es que si los prisioneros <span class='font-medium'><i>tienen respuestas
                    distintas</i></span>, la pena del que no delató será de 5 años y el
                    otro saldrá <span class="bg-clip-text font-bold text-transparent bg-gradient-to-r py-2 from-sky-500 to-sky-400">libre</span>.`,
          p6: `Los resultados obtenidos se colocan en la siguiente matriz:`,
          p7: `Si analizamos la matriz, ¿Qué sería lo mejor?. Para los dos
              prisioneros, lo mejor es que
              <span class="text-rose-400 italic">delataran</span> ya que ambos 
              quedarían en una condición
              <span class="font-semibold italic">de ventaja</span> que las demás posibles,
              en la que no correran el riesgo de ser encarcelados por 5 años.`,
          p8: `Sin embargo, gracias a la
              <span class="text-[#00f7ff] italic"> teoría cuántica</span> las
              probabilidades de obtener cada una de estas condenas
              <span class="text-3xl font-bold italic">cambian</span>.`,
          p81: `<p>Notar que se llega a una matriz dónde los años de carcel son
                MENORES a los que se veían convencionalmente,
                <strong>¿Cómo?</strong> He aquí el propósito de esta página web!
                Adéntrate más en este nuevo mundo y descubre cómo obtener los
                mejores resultados!</p>`,
          prisoner: "Prisioneros",
          yearOne: "1 año",
          yearThree: "3 años",
          yearFive: "5 años",
          optionOne: "Delata",
          optionTwo: "Calla",
          optionThree: "Cuántico",
          free: "Libre",
        },
      },
    },
  },
  getters: {
    getLang(state) {
      return state.settings.lang === "en" ? state.lang.en : state.lang.es;
    },
  },
  mutations: {
    setEntanglementLevel(state, payload) {
      state.settings.entanglementLevel = payload;
    },
    setStrategyPlayerA(state, payload) {
      state.settings.strategy.playerA = payload;
    },
    setStrategyPlayerB(state, payload) {
      state.settings.strategy.playerB = payload;
    },
    setResults(state, payload) {
      state.results.years_playerA = payload.years_playerA;
      state.results.years_playerB = payload.years_playerB;
    },
    changeLanguage: function (state) {
      state.settings.lang === "en"
        ? (state.settings.lang = "es")
        : (state.settings.lang = "en");
    },
  },
  actions: {
    async setEntanglementLevel({ commit }, payload) {
      return commit("setEntanglementLevel", payload);
    },
    async setStrategy({ commit }, payload) {
      payload.player === "A"
        ? commit("setStrategyPlayerA", payload.strategy)
        : commit("setStrategyPlayerB", payload.strategy);
    },
    async run({ commit }, payload) {
      const reqBody = {
        strategy_pA: payload.strategy.playerA,
        strategy_pB: payload.strategy.playerB,
        w: payload.w,
      };
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/years2pay`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      });
      const result = await response.json();
      console.log(result);
      commit("setResults", result);
    },
    async startServ({ commit }, payload) {
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/startServ`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      console.log(result);
      commit("setResults", result);
    },
  },
  modules: {},
});
