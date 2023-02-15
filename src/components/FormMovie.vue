<template>
    <div>
        <v-container fluid pa-5>
            <v-card-actions class="justify-center" align="center" justify="center" style="height: 80vh" dense>
                <v-flex xs12 sm6 offset-sm0>
                    <v-card width="900" heigth="700" @submit.prevent="">
                        <v-form >
                            <v-img
                                azy-src="https://picsum.photos/id/11/10/6"
                                max-height="150"
                                max-width="250"
                                src="../assets/logouta.png"
                            ></v-img>
                            <v-label margin="50" class="label-login">Number:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="11"
                                >
                                <v-text-field
                                v-model="movie.numberid"
                                name="numberid"
                                typeof="text"
                                placeholder="Ingrese Numero de pelicula"
                                ></v-text-field>
                                </v-col>

                            <v-label margin="50" class="label-login">Nombre pelicula:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="11"
                                >
                                <v-text-field
                                v-model="movie.namemovie"
                                name="namemovie"
                                typeof="text"
                                placeholder="Ingrese Nombre de Pelicula"
                                ></v-text-field>
                                </v-col>
                                <v-label class="label-login">Descripcion:</v-label>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="11"
                                    >
                            <v-text-field
                            v-model="movie.description"
                            name="namemovie"
                            typeof="text"
                            placeholder="Ingrese una breve descripcion"
                            ></v-text-field>
                            </v-col>
                            <v-label class="label-login">Duracion:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="11"
                                >
                                <v-text-field
                                v-model="movie.duration"
                            name="duration"
                            typeof="text"
                            placeholder="Ingrese Duracion"
                            ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="11"
                                >
                        </v-col>
                            <v-btn class="btn-regresar" color="error" to="/home">Regresar</v-btn>
                            <v-btn depressed color="primary" type="submit" class="btn-ingresar" @click="addMovie">Registrar</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-card-actions>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data (){
        return{

            movie:{
                numberid:'',
                namemovie:'',
                description:'',
                duration: ''
            }
        }
    },
    methods:{

        addMovie(){
            let newMovie ={
                numberid:this.movie.numberid,
                namemovie:this.movie.namemovie,
                description:this.movie.description,
                duration: this.movie.duration
            }
            console.log(newMovie)
            axios.post('http://localhost:8000/api/v1/movie', newMovie)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}

</script>