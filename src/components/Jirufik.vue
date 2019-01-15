<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md4>
                <div class="text-xs-center">
                    <v-avatar size="125px">
                        <img
                                class="img-circle elevation-7 mb-1"
                                src="img/rufus.png"
                        >
                    </v-avatar>
                    <div class="headline">Rufus <span style="font-weight:bold">Jirufik</span></div>
                    <div class="subheading text-xs-center grey--text pt-1 pb-3">
                        {{ getTxt }}
                    </div>
                    <v-layout justify-space-between>
                        <div>
                            <v-btn
                                    flat
                                    small
                                    color="primary"
                                    @click="changeLang"
                            >
                                {{ getNameLang }}
                            </v-btn>
                        </div>
                        <div>
                            <v-btn
                                    flat
                                    small
                                    color="primary"
                                    to="/about"
                            >
                                {{ getTxtAbout }}
                            </v-btn>
                        </div>
                        <div>
                            <v-btn
                                    flat
                                    small
                                    color="primary"
                                    to="projects"
                            >
                                {{ getTxtProjects }}
                            </v-btn>
                        </div>
                    </v-layout>
                </div>
            </v-flex>
            <v-flex xs12 md5 offset-md2>
                <router-view></router-view>
            </v-flex>
            <v-btn color="pink"
                   bottom
                   fixed
                   fab
                   right
                   small
                   @click="scrollUp"
            >
                <v-icon class="white--text">expand_less</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "jirufik",
        data() {
            return {
                txtRu: 'Vedropolis, пожалуй, единственная студия в мире, которая делает ничего',
                txtEn: 'Vedropolis is probably the only studio in the world that does nothing',
                nameLangRu: 'Russian',
                nameLangEn: 'English',
                txtAboutRu: 'Обо мне',
                txtAboutEn: 'About',
                txtProjectsRu: 'Проекты',
                txtProjectsEn: 'Projects'
            }
        },
        computed: {
            getTxt() {
                if (this.$store.getters.isEnLang) {
                    return this.txtEn;
                }
                return this.txtRu;
            },
            getNameLang() {
                if (this.$store.getters.isEnLang) {
                    return this.nameLangRu;
                }
                return this.nameLangEn;
            },
            getTxtAbout() {
                if (this.$store.getters.isEnLang) {
                    return this.txtAboutEn;
                }
                return this.txtAboutRu;
            },
            getTxtProjects() {
                if (this.$store.getters.isEnLang) {
                    return this.txtProjectsEn;
                }
                return this.txtProjectsRu;
            }
        },
        methods: {
            async changeLang() {
                await this.$store.dispatch('changeLang');
            },
            scrollUp() {
                this.$vuetify.goTo(0, {duration: 300});
            }
        }
    }
</script>

<style scoped>

</style>