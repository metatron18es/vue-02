<template>
  <login-page v-bind="{login, updateLogin, loginRequest, loginError}" />
</template>

<script lang="ts">
  import Vue from "vue";
  import { loginRequest } from "../../rest-api/api/login";
  import { baseRoutes } from "../../router";
  import LoginPage from "./Page.vue";
  import { createEmptyLogin, Login, creteEmptyLoginError } from "./viewModel";
  import { mapLoginVMToModel } from "./mapper";
  import { validation } from "./validations";

  export default Vue.extend({
    name: "PageLoadContainer",
    components: { LoginPage },
    data() {
      return {
        login: createEmptyLogin(),
        loginError: creteEmptyLoginError(),
      }
    },
    methods: {
      updateLogin(field: string, value: string) {
        this.login = {
          ...this.login,
          [field]: value,
        }

        validation.validateField(field, value).then(result => {
          this.loginError = {
            ...this.loginError,
            [field]: result
          };
        })
      },
      loginRequest() {
        validation.validateForm(this.login).then(result => {
          if(result.succeeded) {
            const loginModel = mapLoginVMToModel(this.login);
            loginRequest(loginModel).
              then(() => {
                this.$router.push(baseRoutes.recipe);
              })
              .catch(error => 
                alert(`Este mensaje debes implementarlo con el componente SnackBar de vuetify ;) => ${error}`)
              );
          } else {
            this.loginError = {
              ...this.loginError,
              ...result.fieldErrors,
            }
          }
        });

        
      }
    }
  });
</script>

<style scoped>

</style>