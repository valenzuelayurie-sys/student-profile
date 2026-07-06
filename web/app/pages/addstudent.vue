studinfos<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="12"
                    >
                        <v-text-field
                        label="Student No."
                        prepend-inner-icon="mdi-numeric"
                        variant="outlined"
                        v-model="student.studno"
                        ></v-text-field>
                    </v-col>

                    <v-col
                       cols="12"
                       md="4"   
                    >
                        <v-text-field
                        label="Last Name "
                        prepend-inner-icon="mdi-account-box-outline"
                        variant="outlined"
                        v-model="student.lname"
                        ></v-text-field>
                    </v-col>

                    <v-col
                       cols="12"
                       md="4"   
                    >
                        <v-text-field
                        label="First Name "
                        prepend-inner-icon="mdi-account-box-outline"
                        variant="outlined"
                        v-model="student.fname"
                        ></v-text-field>
                    </v-col>

                    <v-col
                       cols="12"
                       md="4"   
                    >
                        <v-text-field
                        label="Middle Name "
                        prepend-inner-icon="mdi-account-box-outline"
                        variant="outlined"
                        v-model="student.mname"
                        ></v-text-field>
                    </v-col>

                    <v-col
                       cols="12"
                       md="4" 
                    >
                        <v-combobox
                        label="Course"
                         prepend-inner-icon="mdi-account-details-outline"
                        :items="['BSCS', 'DCT']"
                        variant="outlined"
                         v-model="student.course"
                        ></v-combobox>
                    </v-col>

                     <v-col
                       cols="12"
                       md="4" 
                    >
                        <v-combobox
                        label="Year"
                         prepend-inner-icon="mdi-account-details-outline"
                        :items="['1st year', '2nd year', '3rd year', '4th year']"
                        variant="outlined"
                        v-model="student.year"
                        ></v-combobox>
                    </v-col>

                     <v-col
                       cols="12"
                       md="4" 
                    >
                        <v-combobox
                        label="Section"
                         prepend-inner-icon="mdi-account-details-outline"
                        :items="['A', 'B' , 'C' , 'D']"
                        variant="outlined"
                        v-model="student.section"
                        ></v-combobox>
                    </v-col>

                     <v-col
                       cols="12"
                       md="4"   
                    >
                        <v-text-field
                        label="Address "
                        prepend-inner-icon="mdi-card-account-details-outline"
                        variant="outlined"
                        v-model="student.address"
                        ></v-text-field>
                    </v-col>

                     <v-col
                       cols="12"
                       md="4"   
                    >
                        <v-text-field
                        label="Contact No "
                        prepend-inner-icon=" mdi-card-account-phone-outline"
                        variant="outlined"
                        v-model="student.contact"
                        ></v-text-field>
                    </v-col>

                     <v-col
                       cols="12"
                       md="4" 
                    >
                        <v-combobox
                        label="Gender"
                         prepend-inner-icon="mdi-gender-transgender"
                        :items="['Male', 'Female' , 'LGBTQ']"
                        variant="outlined"
                        v-model="student.gender"
                        ></v-combobox>
                    </v-col>
                    
                </v-row>

                        <v-btn
                        color="green"
                        size="small"
                        variant="outlined"
                        @click="saveStudent"
                        >
                            Save
                        </v-btn>

                         <v-btn
                        color="blue"
                        size="small"
                        variant="outlined"
                        >
                            Edit
                        </v-btn>

                        <v-btn
                        color="orange"
                        size="small"
                        variant="outlined"
                        >
                            Update
                        </v-btn>

                         <v-btn
                        color="red"
                        size="small"
                        variant="outlined"
                        @click="deleteStudent"
                        >
                            Delete
                        </v-btn>

                         <v-card
                            title="Student Profile"
                            flat
                        >
                              <v-text-field
                                v-model="hanapstudent"
                                label="Search"
                                prepend-inner-icon="mdi-magnify"
                                variant="outlined"
                                hide-details
                                single-line
                            ></v-text-field>

                            <v-data-table
                                :headers="[
                                    { title: 'Student No.', key: 'studno' },
                                    { title: 'Last Name', key: 'lname' },
                                    { title: 'First Name', key: 'fname' },
                                    { title: 'Middle Name', key: 'mname' },
                                    { title: 'Course', key: 'course' },
                                    { title: 'Year', key: 'year' },
                                    { title: 'Section', key: 'section' },
                                    { title: 'Address', key: 'address' },
                                    { title: 'Contact No.', key: 'contact' },
                                    { title: 'Gender', key: 'gender'}
                                ]"
                                :items="students.map(item => item)"
                                :search="hanapstudent"
                                @click:row="(event, row) => selectStudent(row.item)"
                            />
                        </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()

   const student = ref({
    studno: '',
    lname: '',
    fname: '',
    mname: '',
    course: '',
    year: '',
    section: '',
    address: '',
    contact: '',
    gender  : '',
   })

   const students = ref([])

   //search function
   const hanapstudent = ref('')

   // Function to save student information to Strapi
   const saveStudent = async () => {
    try {
        const response = await $fetch(
            `${config.public.strapiUrl}/api/stud-infos`,
            {
                method: 'POST',
                body: {
                    data: student.value
                }
            }
        )
            console.log(response)

            alert('Student information saved successfully!')

            clearForm()

            getStudents()
    } catch (error) {
    console.error('Error saving student information:', error)
    alert('Failed to save student information. Please try again.')
   }
   } 

   //function to get student information from Strapi
   const getStudents = async () => {
    try {
         const response = await $fetch(
            `${config.public.strapiUrl}/api/stud-infos`,
            )
            students.value = response.data
    } catch (error) {
        console.error('Error fetching student information:', error)
        alert('Failed to fetch student information. Please try again.')
    }
   }

   //clear form after saving
    const clearForm = () => {
     student.value = {
           studno: '',
    lname: '',
    fname: '',
    mname: '',
    course: '',
    year: '',
    section: '',
    address: '',
    contact: '',
    gender  : '',
     }
    }

    //select ID from strapi table
    const selectedDocumentId = ref(null)

    //select data from datatable to text field
    const selectStudent = (item) => {
    selectedDocumentId.value = item.documentId

    student.value = {
        studno: item.studno,
        lname: item.lname,
        fname: item.fname,
        mname: item.mname,
        course: item.course,
        year: item.year,
        section: item.section,
        address: item.address,
        contact: item.contact,
        gender: item.gender,
    }
    }

    //delete function
    const deleteStudent = async () => {
    if (!selectedDocumentId.value) {
        alert('Please select a student first.')
        return
    }

    try {
        await $fetch(`${config.public.strapiUrl}/api/stud-infos/${selectedDocumentId.value}`, {
        method: 'DELETE'
        })

        alert('Student deleted successfully!')
        clearForm()
        selectedDocumentId.value = null
        getStudents()
    } catch (error) {
        console.error(error)
        alert('Failed to delete student.')
    }
    }

    onMounted(() => {
        getStudents()
    })
</script>

