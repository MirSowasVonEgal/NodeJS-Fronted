<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Registeren</h1>
              <p class="text-lead text-white">Du hast noch keinen Account? <br>Erstelle dir jetzt deinen unverbindlichen Account!</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4"><small>Registieren mit</small></div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Oder mit Zugangsdaten einloggen</small>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Nutzername"
                              name="Nutzername"
                              :rules="{required: true, min: 4, max: 16}"
                              v-model="username">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="E-Mail"
                              name="E-Mail"
                              :rules="{required: true, email: true}"
                              v-model="email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="Passwort"
                              type="password"
                              name="Passwort"
                              :rules="{required: true, min: 8}"
                              v-model="password">
                  </base-input>
                  <div class="text-muted font-italic"><small>Passwort stärke: <span
                    :class="'text-' + password_strength_color + ' font-weight-700'">{{ password_strength }}</span></small></div>
                  <b-row class=" my-4">
                    <b-col cols="12">
                      <base-input :rules="{ required: { allowFalse: false } }" name="AGB und Datenschutzerklärung" Policy>
                        <b-form-checkbox v-model="agree">
                          <span class="text-muted">Ich habe die <a href="#">AGB</a> und <a href="#">Datenschutzerklärung</a> gelesen und akzeptiere diese.</span>
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4">Create account</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
          username: '',
          email: '',
          password: 'Test',
          agree: false,
          password_strength: 'Zu kurz!',
          password_strength_color: 'danger'
      }
    },
    watch: {
      password: function(value) {
        if(value.length >= 16) {
          this.password_strength = 'Sehr sicher!'
          this.password_strength_color = 'success'
        } else if(value.length >= 8) {
          this.password_strength = 'Ist okay!'
          this.password_strength_color = 'warning'

        } else {
          this.password_strength = 'Zu kurz!'
          this.password_strength_color = 'danger'
        }
      }
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register users
      }
    }

  };
</script>
<style></style>
