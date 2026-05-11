  <template>
    <v-app> 
      <v-main>
        <v-container>

            <v-row>
              <v-col
              cols="12"
              >
                  <v-text-field
                  label=" STUDENT NO "
                  variant="solo-inverted"
                  placeholder="24-00611">
                </v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="4">
                  <v-text-field
                  label=" LAST NAME "
                  variant="solo-inverted"
                  placeholder="VALENZUELA">
                </v-text-field>
              </v-col>
            
              <v-col
              cols="12"
              md="4">
                  <v-text-field
                  label=" FIRST NAME "
                  variant="solo-inverted"
                  placeholder="YURIE">
                </v-text-field>
              </v-col>
          
              <v-col 
              cols="12"
              md="4">
                <v-text-field
                  label=" MIDDLE NAME "
                  variant="solo-inverted"
                  placeholder="BAYA">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="6">
                <v-combobox
                  label=" GENDER "
                  variant="outlined"
                  :items="['MALE','FEMALE','PREFERED NOT SAY']"
                  clearable>
                </v-combobox>
                </v-col>
                
                    <v-col 
              cols="12"
              md="6">
                 <v-text-field
                  label=" AGE "
                  variant="outlined"
                   placeholder="18+">
                </v-text-field>
              </v-col>
            </v-row>
            
            <v-btn
                prepend-icon="mdi mdi-tag-edit-outline"
                variant="outlined"
                color="green"
              >EDIT
            </v-btn>

              <v-btn
                prepend-icon="mdi mdi-update"
                variant="outlined"
                color="blue"
              >UPDATE
            </v-btn>
            
              <v-btn
                prepend-icon="mdi mdi-content-save-all-outline"
                variant="outlined"
                color="orange"
              >SAVE
            </v-btn>

              <v-btn
                prepend-icon="mdi mdi-delete-alert-outline"
                variant="outlined"
                color="red"
              >DELETE

            </v-btn>
        </v-container>
      </v-main>
    </v-app>
  </template>

  