<template>
    <v-app>
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item
                    prepend-icon="mdi-account-plus"
                    title="Add Student"
                    value="addstud"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-app-bar-titte>Student Management</v-app-bar-titte>
        </v-app-bar>

        <v-main>
            <NuxtPage />
        </v-main>
    </v-app>
</template>

<script>
    import { ref } from 'vue';

    export default {
        data: () => ({ drawer: null}),
    }

    const drawer = ref(null)
</script>