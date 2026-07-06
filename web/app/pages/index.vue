<template>
    <v-app>
        <v-main>
            <v-container>
                <v-card>
                    <v-card-title>
                        NUXT 4 + STRAPI CONNECTION CHECK
                    </v-card-title>

                    <v-card-text>
                        Setup is working: {{ config.public.strapiUrl }}
                    </v-card-text>

                    <v-btn @click="loadStudinfo">
                        Test button
                    </v-btn>

                    <v-alert v-if="loading" type="info">
                        loading data...
                    </v-alert>

                    <v-alert v-if="errorMessage" type="error">
                        {{ errorMessage }}
                    </v-alert>
                </v-card>

                <v-card
                    v-for="student in studinfos"
                    :key="student.id">
                    <pre>{{ student }}</pre>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
   const config = useRuntimeConfig()

   const studinfos = ref<any[]>([])

   const loading = ref(false)

   const errorMessage = ref('')
   

   const loadStudinfo = async () => {
        loading.value = true
        errorMessage.value = ''

        try {
            const response: any = await $fetch(
                `${config.public.strapiUrl}/api/stud-infos`
            )
            studinfos.value = response.data
        } catch (error: any) {
            errorMessage.value = 'Failed to load studinfos: ' + error.message
        } finally {
            loading.value = false
        }
   }
</script>