<template>

<div >
    <v-btn depressed color="error" type="submit" class="btn-ingresar" to="/">Regresar</v-btn>
    <v-btn depressed color="primary" type="submit" class="btn-ingresar" to="/formMovie">Registrar Pelicula</v-btn>
    <v-container class="d-inline" v-for="movie in movieInfo.data" v-bind:key="movie.id">
        <v-row no-gutters >
        <v-col
        cols="2"
        sm="3"
        >
        <v-card class="pa-9" outlined tile>

        <v-img
            height="100"
            src="../assets/logouta.png"
        ></v-img>
        <v-card-title>
            {{movie.namemovie}}
    </v-card-title>

    <v-card-subtitle>
        {{movie.duration}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="error lighten-2"
        text
        @click="deleteMovie(movie._id)"
      >
        Eliminar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >Descripcion
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            {{movie.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
        <div>
            <h4>
                04:29
            </h4>
        </div>
</v-card>
</v-col>
</v-row>
</v-container>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data (){
        return{
            show: false,
            movieInfo: [],
            message:'',
        }},
    methods:{
        deleteMovie(id) {
            console.log(id)
            axios.delete('http://192.168.0.246:8000/api/v1/movie/'+id)
            .then(response=>{
                this.movieInfo.splice(id)
                console.log(response)
            })
}
},
        
        created(){
        axios.get('http://192.168.0.246:8000/api/v1/movie')
        .then((response)=>{
            this.movieInfo = response.data;
                console.log(response);
            })
        .catch((error)=>{
                console.log(error)
        })
    },

}

</script>

<style>
.container{
    display: block
}
    .div-titulo{
        background-color: rgb(244, 244, 245);
        margin: 10px
    }
    .name{
        background-color: rgb(163, 191, 241);
    }
    .btn-eliminar{
        margin-right: 30px
    }
</style>