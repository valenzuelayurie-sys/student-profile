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
                  prepend-inner-icon="mdi mdi-account-circle"
                  variant="solo-inverted"
                  placeholder="24-00611">
                </v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="4">
                  <v-text-field
                  label=" LAST NAME "
                  prepend-inner-icon="mdi mdi-account-box-outline"
                  variant="solo-inverted"
                  placeholder="VALENZUELA">
                </v-text-field>
              </v-col>
            
              <v-col
              cols="12"
              md="4">
                  <v-text-field
                  label=" FIRST NAME "
                  prepend-inner-icon="mdi mdi-account-box-outline"
                  variant="solo-inverted"
                  placeholder="YURIE">
                </v-text-field>
              </v-col>
          
              <v-col 
              cols="12"
              md="4">
                <v-text-field
                  label=" MIDDLE NAME "
                  prepend-inner-icon="mdi mdi-account-box-outline"
                  variant="solo-inverted"
                  placeholder="BAYA">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-combobox
                  label=" COURSE "
                  prepend-inner-icon="mdi mdi-account-details-outline"
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
                  prepend-inner-icon="mdi mdi-account-details-outline"
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
                  prepend-inner-icon="mdi mdi-account-details-outline"
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
                  prepend-inner-icon="mdi mdi-map-marker-account"
                  variant="solo-inverted"
                  placeholder="BARANGAY SAN AGUSTIN">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-text-field
                  label=" CONTACT No, "
                  prepend-inner-icon="mdi mdi-card-account-details"
                  variant="solo-inverted"
                  placeholder="0921241547">
                </v-text-field>
              </v-col>

              <v-col 
              cols="12"
              md="4">
                <v-combobox
                  label=" GENDER "
                  prepend-inner-icon="mdi mdi-gender-transgender"
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

             <v-card
              title="Student Profile"
              flat
            >
              <template v-slot:text>
                <v-text-field
                  v-model="hanapstudent"
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                  hide-details
                  single-line
                ></v-text-field>
              </template>

              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="hanapstudent"
              ></v-data-table>
            </v-card>



        </v-container>
      </v-main>
    </v-app>
  </template>

    <script setup>
    const hanapstudent = ref('')

    const headers = [
      {
        key: 'studno' , tittle: 'student number'
      }
      
    ]
  </script>

  