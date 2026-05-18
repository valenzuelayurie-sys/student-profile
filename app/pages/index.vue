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
              md="4">
                <v-combobox
                  label=" COURSE "
                  variant="outlined"
                  :items="['BSCS','BSIT']"
                  clearable>
                </v-combobox>
              </v-col>
                
              <v-col 
              cols="12"
              md="4">
                <v-combobox
                  label=" YEAR "
                  variant="outlined"
                  :items="['1st year','2nd year','3rd year','4th year']"
                  clearable>
                </v-combobox>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-combobox
                  label=" SECTION "
                  variant="outlined"
                  :items="['A','B','C']"
                  clearable>
                </v-combobox>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-text-field
                  label=" ADDRESS "
                  variant="solo-inverted"
                  placeholder="BARANGAY SAN AGUSTIN">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-text-field
                  label=" CONTACT No, "
                  variant="solo-inverted"
                  placeholder="0921241547">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-combobox
                  label=" GENDER "
                  variant="outlined"
                  :items="['MALE','FENALE','LGBTQ+A']"
                  clearable>
                </v-combobox>
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

  