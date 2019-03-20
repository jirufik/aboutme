<template>
    <div>
        <div v-for="post in posts" :key="post.txtHeadEn">
            <v-card class="my-3" hover>
                <v-img
                        class="white--text"
                        height="170px"
                        :src="post.img"
                >
                    <v-container fill-height fluid>
                        <v-layout>
                            <v-flex xs12 d-flex>
                                <span class="headline">{{ getTxt(post, 'txtHead') }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-text>
                    <p>{{ getTxt(post, 'txtDescription') }}</p>
                    <v-chip v-for="tag in post.tags"
                            :key="tag"
                            outline
                            small
                    >
                        {{ tag }}
                    </v-chip>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon
                           class="primary--text"
                           :href="post.github"
                           target="_blank"
                    >
                        <v-icon>code</v-icon>
                    </v-btn>
                    <v-btn icon
                           class="primary--text"
                           :href="post.link"
                           target="_blank"
                    >
                        <v-icon>visibility</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projects",
        methods: {
            getTxt(post, name) {
                if (!name) {
                    return '';
                }
                if (this.$store.getters.isEnLang) {
                    return post[`${name}En`];
                }
                return post[`${name}Ru`];
            }
        },
        data() {
            return {
                title: 'Your Logo',
                posts: [
                    {
                        txtHeadRu: `jrflog`,
                        txtHeadEn: `jrflog`,
                        txtDescriptionRu: `jrflog это async/await пакет логирования. Логи можно выводить в stdout,
                        хранить в файле, в MongoDB, или в PostgreSQL.`,
                        txtDescriptionEn: `jrflog is an async / await logging package. Logs can be output to stdout,
                        stored in file, MongoDB, or PostgreSQL.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'Backend', 'Logs', 'MongoDB', 'PostgreSQL', 'File',
                            'Stdout', 'Stream', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrflog',
                        github: 'https://github.com/jirufik/jrflog',
                        img: 'img/npm.png'
                    },
                    {
                        txtHeadRu: `jrfjwt`,
                        txtHeadEn: `jrfjwt`,
                        txtDescriptionRu: `jrfjwt это async/await пакет для работы с JWT. Функционал использует одну из
                        СУБД PostgreSQL или MongoDB. Работа с токенами ведется в разрезе Пользователь, Устройство.`,
                        txtDescriptionEn: `jrfjwt is an async/await package for working with JWT. The functional uses
                        one of PostgreSQL or MongoDB DBMS. Work with tokens is conducted in the context of User,
                        Device.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'Backend', 'JWT', 'MongoDB', 'PostgreSQL', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrfjwt',
                        github: 'https://github.com/jirufik/jrfjwt',
                        img: 'img/npm.png'
                    },
                    {
                        txtHeadRu: `aboutme`,
                        txtHeadEn: `aboutme`,
                        txtDescriptionRu: `Текущий раздел rufus.pro/jirufik обо мне и моих
                        open source проектах.`,
                        txtDescriptionEn: `The current rufus.pro/jirufik section about me and
                        my open source projects.`,
                        tags: ['JavaScript', 'NodeJS', 'Koa', 'Frontend', 'Vue', 'Vuetify',
                            'Vuex', 'Vue-router', 'Webpack', 'MIT'],
                        link: 'https://rufus.pro/jirufik/',
                        github: 'https://github.com/jirufik/aboutme',
                        img: 'img/jirufik.png'
                    },
                    {
                        txtHeadRu: `worktime`,
                        txtHeadEn: `worktime`,
                        txtDescriptionRu: `Web приложение которое ведет временной и
                        стоимостной учет задач. С возможностью применения техники
                        "Помидор".`,
                        txtDescriptionEn: `Web application that keeps time and cost
                        accounting of tasks. With the possibility of using technology
                        "Pomodoro".`,
                        tags: ['JavaScript', 'NodeJS', 'API', 'Websocket', 'Koa', 'Backend',
                            'Frontend', 'jrfws', 'jrfdb', 'MongoDB', 'Vue', 'Vuetify',
                            'jrftimer', 'jrfstopwatch', 'MIT'],
                        link: 'https://rufus.pro/worktime/',
                        github: 'https://github.com/jirufik/worktime',
                        img: 'img/worktime.png'
                    },
                    {
                        txtHeadRu: `jrfscheduler`,
                        txtHeadEn: `jrfscheduler`,
                        txtDescriptionRu: `Планировщик заданий с гибким функционалом.`,
                        txtDescriptionEn: `Task Scheduler with flexible functionality.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'Backend', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrfscheduler',
                        github: 'https://github.com/jirufik/jrfscheduler',
                        img: 'img/npm.png'
                    },
                    {
                        txtHeadRu: `jrftimer`,
                        txtHeadEn: `jrftimer`,
                        txtDescriptionRu: `Таймер с возможностью отложенного старта.
                        Установка выполняемых функций при старте и окончании.`,
                        txtDescriptionEn: `Timer with the possibility of delayed start.
                        Installation of callback functions performed at the start and end.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'Backend', 'Frontend', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrftimer',
                        github: 'https://github.com/jirufik/jrftimer',
                        img: 'img/npm.png'
                    },
                    {
                        txtHeadRu: `jrfstopwatch`,
                        txtHeadEn: `jrfstopwatch`,
                        txtDescriptionRu: `Секундомер с подробной информацией об измерениях.`,
                        txtDescriptionEn: `Stopwatch with detailed measurement information.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'Backend', 'Frontend', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrfstopwatch',
                        github: 'https://github.com/jirufik/jrfstopwatch',
                        img: 'img/npm.png'
                    },
                    {
                        txtHeadRu: `simplechat`,
                        txtHeadEn: `simplechat`,
                        txtDescriptionRu: `Простой чат. Пример использования пакетов jrfdb
                        (model) и jrfws (API).`,
                        txtDescriptionEn: `Simple chat. An example of using the packages
                        jrfdb (model) and jrfws (API).`,
                        tags: ['JavaScript', 'NodeJS', 'API', 'Websocket', 'Koa', 'Backend',
                            'Frontend', 'jrfws', 'jrfdb', 'MongoDB', 'Vue', 'Vuetify', 'MIT'],
                        link: '',
                        github: 'https://github.com/jirufik/simplechat',
                        img: 'img/simplechat.png'
                    },
                    {
                        txtHeadRu: `jrfws`,
                        txtHeadEn: `jrfws`,
                        txtDescriptionRu: `Пакет для создания API реального времени, на
                        основе websockets. Является оберткой над легким и быстрым ws.
                        Может работать самостоятельно или в связке с koa.`,
                        txtDescriptionEn: `Package for creating real-time api, based on
                        websockets. Is a wrap over easy and fast ws. It can work
                        independently or in conjunction with koa.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'API', 'Websocket', 'Koa',
                            'Server', 'Backend', 'Client', 'Frontend', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrfws',
                        github: 'https://github.com/jirufik/jrfws',
                        img: 'img/jrfws.png'
                    },
                    {
                        txtHeadRu: `jrfdb`,
                        txtHeadEn: `jrfdb`,
                        txtDescriptionRu: `ODM для MongoDB.`,
                        txtDescriptionEn: `ODM for MongoDB.`,
                        tags: ['JavaScript', 'NodeJS', 'NPM', 'MongoDB', 'Backend', 'ODM', 'NoSQL', 'MIT'],
                        link: 'https://www.npmjs.com/package/jrfdb',
                        github: 'https://github.com/jirufik/jrfdb',
                        img: 'img/jrfdb.png'
                    },
                    {
                        txtHeadRu: `magicball`,
                        txtHeadEn: `magicball`,
                        txtDescriptionRu: `Magic 8 ball шар судьбы, шар вопросов и ответов,
                        шар предсказаний — игрушка, шуточный способ предсказывать будущее
                        или принять решение.`,
                        txtDescriptionEn: `Magic 8 ball fate ball, the ball of questions
                        and answers, the ball of predictions - a toy, comic way to predict
                        the future or make a decision.`,
                        tags: ['JavaScript', 'Phaser', 'Inkscape', 'Express', 'Frontend', 'NodeJS', 'MIT'],
                        link: 'https://rufus.pro/magicball/',
                        github: 'https://github.com/jirufik/magicball',
                        img: 'img/magicball.png'
                    },
                    {
                        txtHeadRu: `caferacer`,
                        txtHeadEn: `caferacer`,
                        txtDescriptionRu: `Настольная игра о кафэрейсерах. Для нескольких игроков.
                        Соперниками могут быть ваши друзья или автопилот. Суть игры, добраться до
                        финиша быстрее всех, не перегрев двигатель.`,
                        txtDescriptionEn: `Board game about caferacers. For multiple players.
                        Rivals can be your friends or autopilot. The essence of the game, get
                        to the finish line the fastest, do not overheat the engine.`,
                        tags: ['JavaScript', 'Phaser', 'Inkscape', 'Express', 'Frontend', 'NodeJS', 'MIT'],
                        link: 'https://rufus.pro/caferacer/',
                        github: 'https://github.com/jirufik/caferacer',
                        img: 'img/caferacer.png'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>