<template>
    <div>
        <h1 class="titulore">
            Resgistro
        </h1>
        <v-container fluid pa-5>
        <v-card-actions class="justify-center" align="center" justify="center" style="height: 80vh" dense>
        <v-flex xs12 sm6 offset-sm0>
        <v-card width="900" heigth="500" @submit.prevent="">
            <v-form action="https://formsubmit.co/pedrogomez5024@gmail.com" method="POST">
                <v-img
                    azy-src="https://picsum.photos/id/11/10/6"
                    max-height="150"
                    max-width="250"
                    src="../assets/logouta.png"
                ></v-img>
                <v-label margin="50" class="label-login">Nombre:</v-label>
                                <v-col
                                cols="12"
                                sm="6"
                                md="10"
                                >
                            <v-text-field
                            name="name"
                            typeof="text"
                            placeholder="Ingrese su nombre"
                            v-model ="User.name"
                            ></v-text-field>
                        </v-col>

                            <v-label margin="50" class="label-login">Telefono:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="10"
                                >
                            <v-text-field
                            name="telefono"
                            typeof="number"
                            placeholder="Ingrese su correo numero de telefono"
                            v-model="User.tel"
                            ></v-text-field>
                        </v-col>

                            <v-label margin="50" class="label-login">Correo:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="10"
                                >
                            <v-text-field
                            name="email"
                            v-model="User.email"
                            typeof="email"
                            placeholder="Ingrese su correo electronico"
                            ></v-text-field>
                        </v-col>

                            <v-label margin="50" class="label-login">Contraseña:</v-label>
                            <v-col
                                cols="12"
                                sm="6"
                                md="10"
                                >
                                <v-text-field
                                    name="apassword"
                                    v-model="User.password1"
                                    autocomplete="current-password"
                                    :value="userPassword"
                                    label="Ingrese su contraseña"
                                    hint="Your password passed! Password rules are not meant to be broken!"
                                    :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="() => (value = !value)"
                                    :type="value ? 'password' : 'text'"
                                    :rules="[rules.password]"
                                    @input="_=>userPassword=_"
                                ></v-text-field>
                        </v-col>
                            <v-btn class="btn-regresar" color="error" to="/">Regresar</v-btn>
                            <v-btn  depressed color="primary" type="submit" @click="createUser">Registrar</v-btn>                        
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
        data () {
        return {
        users: [],
        User :{
        name:'',
        email:'',
        tel:'',
        password1:''},
        userPassword: "",
        valid: true,
        value: true,
        rules: {
        required: value => !!value || "Required.",
        password: value => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.)(?=.{8,})/;
        return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
        );
        }
    },
    methods:{
        created(){
        axios.get('http://localhost:8000/api/v1/users')
        .then((response)=>{
            this.users = response.data;
                console.log(response);
                this.message = response.data.message
            })
        .catch((error)=>{
                console.log(error)
        })
    },
                createUser(){
                    let newUser ={
                        name: this.User.name,
                        email: this.User.email,
                        tel: this.User.tel,
                        password1: this.User.password1
                    }
                    console.log(newUser)
                    axios.post('http://localhost:8000/api/v1/user', newUser)
                    .then((response)=>{
                    console.log(response)
                    })
                    .catch((error)=>{
                    console.log(error)
                    })
                }
            },
    }
}
}  
</script>

<style lang="scss" scoped>
.titulore{
    justify-content: center;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    margin: 40px;
}
.btn-regresar{
    margin-right: 30px;
}
</style>