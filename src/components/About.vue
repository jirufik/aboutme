<template>
    <v-card class="my-3" hover>
        <v-img
                class="white--text"
                height="170px"
                src="img/vedropolis.png"
        >
            <v-container fill-height fluid>
                <v-layout>
                    <v-flex xs12 d-flex>
                        <span class="headline">{{ getTxt('txtAbout') }}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-text>
            <p>{{ getTxt('txtMain') }}</p>
            <p>{{ getTxt('txtSecond') }}</p>
            <p>{{ getTxt('txtThird') }}</p>
            <p>
                {{ `${getTxt('txtResume')}: ` }}
                <a href="https://moikrug.ru/rufus57" target="_blank">moikrug</a>
                <a href="https://petrozavodsk.hh.ru/resume/cbace853ff007dc8370039ed1f736563726574" target="_blank">hh</a>
            </p>
            <v-chip v-for="tag in tags"
                    :key="tag"
                    outline
                    small
            >
                {{ tag }}
            </v-chip>
        </v-card-text>
        <v-card-actions>
            <v-btn icon
                   class="primary--text"
                   href="mailto:rufus57@yandex.ru"
                   target="_blank"
            >
                <v-icon medium>mail_outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    flat
                    class="primary--text"
                    href="https://github.com/jirufik"
                    target="_blank"
            >
                GitHub
            </v-btn>
            <v-btn
                    flat
                    class="primary--text"
                    href="https://www.npmjs.com/~jirufik"
                    target="_blank"
            >
                NPM
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                txtAboutRu: 'Обо мне',
                txtAboutEn: 'About',
                txtMainRu: `Разработчик, web, backend, frontend, автоматизация бизнес процессов,
                автоматизация производственных процессов, интеграция.
                `,
                txtMainEn: `Developer, web, backend, frontend, automation of business processes,
                automation of production processes, integration.`,
                txtSecondRu: `В свободное от работы время: саморазвиваюсь, пытаюсь быть в курсе
                последних новостей IT, творю проекты. Любимые среды разработки JetBrains WebStorm и
                MS Visual Studio Code. Люблю путешествовать на мотоцикле.`,
                txtSecondEn: `In my free time: I develop myself, I try to keep up with the latest IT
                news, I create projects. Favorite development environment JetBrains WebStorm and
                MS Visual Studio Code. I love to travel on a motorcycle.`,
                txtThirdRu: `Готов к предложениям удаленной работы в интересных проектах и
                в сплоченном коллективе.`,
                txtThirdEn: `Ready to work remotely in interesting projects and in a cohesive team.`,
                txtResumeRu: 'Резюме',
                txtResumeEn: 'Resume',
                tags: ['NodeJS', 'JavaScript', '1C', 'SQL', 'NoSQL', 'API', 'Web', 'Backend',
                    'Frontend', 'Vue', 'Vuex', 'Vue-router', 'Vuetify', 'Phaser', 'Websocket',
                    'Koa', 'Express', 'Webpack', 'HTML', 'CSS', 'MS SQL Server', 'MongoDB', 'Git', 'Inkscape',
                    'Nginx', 'Arduino', 'ESP', 'Linux', 'Windows']
            }
        },
        methods: {
            getTxt(name = 'txtMain') {
                if (this.$store.getters.isEnLang) {
                    return this[`${name}En`];
                }
                return this[`${name}Ru`];
            }
        }
    }
</script>

<style scoped>

</style>