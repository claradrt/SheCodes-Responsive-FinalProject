Vue.createApp({
  data() {
    return {
      projects: [
        {
          name: "Beer party website",
          description: `This webapp destined to people who don't know much about beers
            consists of presenting a list of beers gathered from the
            <a
              href="https://punkapi.com/documentation/v2"
              target="_blank"
              class="highlight"
              title="Punk api documentation"
              >Punk Api</a
            >
            and present their corresponding caracteristics.`,
          tags: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS", "API"],
          link: {
            href: "https://vigilant-shannon-f82b4f.netlify.app/home",
            title: "Open beer party project",
          },
          img: {
            src: "images/beer-party.png",
            alt: "Picture of bear party project",
          },
        },
        {
          name: "Vocabulary quiz app",
          description: `This is a personal project and so far the biggest React application
            I have worked on. This application is destined to language learners
            who are trying to learn some new vocabulary. This app enables them
            to list the vocabulary words they are trying to remember, and to
            then get quizzed on those words. <br />
            I used
            <a
              href="https://mui.com/"
              target="_blank"
              class="highlight"
              title="MUI website"
              >MUI</a
            >
            as a React UI library.`,
          tags: ["React", "Bootstrap", "HTML", "CSS", "Javascript"],
          link: {
            href: "https://dreamy-hopper-e5f17f.netlify.app/",
            title: "Open Vocabulary quizz project",
          },
          img: {
            src: "images/vocabulary-quiz-app.png",
            alt: "Picture of vocabulary quizz project",
          },
        },
        {
          name: "Dictionary app",
          description: `As part of the
            <a
              href="https://www.shecodes.io/workshops"
              target="_blank"
              class="highlight"
              title="SheCodes workshops"
              >SheCodes React workshop</a
            >, I created a dictionary app based in React and Bootstrap. It uses
            information from 2 open-source APIs:
            <a
              href="https://dictionaryapi.dev/"
              target="_blank"
              class="highlight"
              title="Free Dictionary Api"
              >Free Dictionary Api</a
            >
            for the definitions and
            <a
              href="https://www.pexels.com/api/documentation/"
              target="_blank"
              class="highlight"
              title="Pexels Api"
              >Pexels Api</a
            >
            for the illustrations.`,
          tags: ["React", "Bootstrap", "HTML", "CSS", "Javascript", "API"],
          link: {
            href: "https://musing-mirzakhani-5a41de.netlify.app/",
            title: "Open Dictionary project",
          },
          img: {
            src: "images/dictionary-react.png",
            alt: "Picture of dictionary project",
          },
        },
        {
          name: "Weather app",
          description: `As part of the
            <a
              href="https://www.shecodes.io/workshops"
              target="_blank"
              class="highlight"
              title="SheCodes workshop"
              >SheCodes Plus workshop</a
            >, I created a weather application based in HTML, CSS and
            Javascript. It uses weather information gathered from
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              class="highlight"
              title="Open Weather Map"
              >Open Weather Map</a
            >
            APIs.`,
          tags: ["Bootstrap", "HTML", "CSS", "Javascript", "API"],
          link: {
            href: "https://sharp-dijkstra-8b8a86.netlify.app/",
            title: "Open weather app project",
          },
          img: {
            src: "images/weather-app.png",
            alt: "Picture of weather app project",
          },
        },
        {
          name: "Memory game",
          description: `Since I discovered programming, I've always enjoyed making fun
            content, especially games. Creating a Memory Game was a challenge I
            set for myself to practice my HTML, CSS, Bootstrap and Javascript
            skills.`,
          tags: ["Bootstrap", "HTML", "CSS", "Javascript"],
          link: {
            href: "https://epic-ritchie-b606eb.netlify.app/",
            title: "Open memory game",
          },
          img: {
            src: "images/memory-game.png",
            alt: "Picture of memory game project",
          },
        },
        {
          name: "Favorite books",
          description: `This page is my first official coding project and was an assignment
            part of the
            <a
              href="https://www.shecodes.io/workshops"
              target="_blank"
              class="highlight"
              title="SheCodes workshop"
              >SheCodes Basics workshop</a
            >, which was about creating a page about a topic we are passionate
            about. It is based in HTML, CSS, Bootstrap and Javascript.`,
          tags: ["Bootstrap", "HTML", "CSS", "Javascript"],
          link: {
            href: "https://epic-brahmagupta-f93dcc.netlify.app/",
            title: "Open favorite books page",
          },
          img: {
            src: "images/favorite-books.png",
            alt: "Picture of favorite books project",
          },
        },
      ],
    };
  },
}).mount("#work");
