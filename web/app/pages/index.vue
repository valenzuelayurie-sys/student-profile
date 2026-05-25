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

              <v-btn>
                Test button
              </v-btn>

            </v-card>
          </v-container>
        </v-main>
    </v-app>
  </template>


<script setup>
  const config=useRuntimeConfig()

  const {data , pending, error} = await useFetch(
      '${config.public.strapiUrl}/api/articles'
  )
</script>