<template>
  <div>
      <h1 class="olvidaste">Login</h1>
      <v-card-actions class="justify-center" align="center" justify="center" style="height: 80vh" dense>
          <v-flex xs12 sm6 offset-sm0>
              <v-card width="800" heigth="500">
                  <v-form>
                      <v-img
                          azy-src="https://picsum.photos/id/11/10/6"
                          max-height="150"
                          max-width="250"
                          src="../assets/logouta.png"
                      ></v-img>
                      <v-label class="label-login">Ingrese correo electronico:</v-label>
                      <v-col
                              cols="12"
                              sm="6"
                              md="11"
                              >
                          <v-text-field
                          placeholder="Ingrese correo electronico"
                          type="email"
                          ></v-text-field>
                      </v-col>

                          <v-label class="label-login">Ingrese su contraseña:</v-label>
                          <v-col
                              cols="12"
                              sm="6"
                              md="11"
                              >
                          <v-text-field
                          name="confpassword"
                          placeholder="Ingrese Contraseña"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                          ></v-text-field>
                      </v-col>

                          <v-btn class="btn-regresar" color="success" to="/home">Ingresar</v-btn>

                  </v-form>
              </v-card>
          </v-flex>
      </v-card-actions>
  </div>
</template>

<script>
  export default {
      data () {
      return {
      show1: false,
      password: 'Password',
      rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
          },
      }
  },
      
  }
</script>

<style lang="scss" scoped>
.actualizar{
  margin:20px
}
.olvidaste{
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  padding: 1%;
}
</style>