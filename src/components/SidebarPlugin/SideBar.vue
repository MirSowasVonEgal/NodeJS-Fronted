<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">

            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
                
            </navbar-toggle-button>
            <center><router-link to="/" custom v-slot="{ navigate }">
                <a href="/"><img style="width: 100px; height: 100px;" @click="navigate" @keypress.enter="navigate" role="link" src="/img/brand/green.png"></a>
            </router-link></center>

            <slot name="mobile-right">
                <ul class="nav align-items-center d-md-none">
                    <base-dropdown menu-on-right
                                class="nav-item"
                                tag="li"
                                title-tag="a"
                                title-classes="nav-link pr-0">
                    <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
                      <b-media no-body class="align-items-center">
                              <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="https://secure.gravatar.com/avatar/39d5218c0db52fc8b11529916cdf298d?size=80">
                              </span>
                        <b-media-body class="ml-2 d-none d-lg-block">
                          <span class="mb-0 text-sm  font-weight-bold">{Nutzername}</span>
                        </b-media-body>
                      </b-media>
                    </a>

                    <template>

                      <b-dropdown-header class="noti-title">
                        <h6 class="text-overflow m-0">Willkommen!</h6>
                      </b-dropdown-header>
                      <b-dropdown-item href="#!">
                        <i class="ni ni-single-02"></i>
                        <span>Mein Profil</span>
                      </b-dropdown-item>
                      <b-dropdown-item href="#!">
                        <i class="ni ni-lock-circle-open"></i>
                        <span>Passwort ändern</span>
                      </b-dropdown-item>
                      <b-dropdown-item href="#!">
                        <i class="ni ni-money-coins"></i>
                        <span>Guthaben aufladen</span>
                      </b-dropdown-item>
                      <b-dropdown-item href="#!">
                        <i class="ni ni-support-16"></i>
                        <span>Deine Tickets</span>
                      </b-dropdown-item>
                      <div class="dropdown-divider"></div>
                      <b-dropdown-item href="#!">
                        <i class="ni ni-user-run"></i>
                        <span>Ausloggen</span>
                      </b-dropdown-item>

                    </template>
                  </base-dropdown>
                </ul>
            </slot>
            <slot></slot>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <slot name="links">
                      <sidebar-item
                        :link="{
                          name: 'Dashboard',
                          path: '/dashboard',
                          icon: 'ni ni-tv-2 text-primary',
                        }"
                      >
                      </sidebar-item>
                    </slot>
                </ul>
                <hr class="my-3">
                <h6 class="navbar-heading text-muted">Produkte</h6>
                   <ul class="navbar-nav mb-md-1">
                    <sidebar-item
                        :link="{
                          name: 'Meine Produkte',
                          path: '/products',
                          icon: 'ni ni-app text-green',
                        }"
                      >
                      </sidebar-item>
                    <sidebar-item
                        :link="{
                          name: 'RootServer',
                          path: '/rootserver',
                          icon: 'fa fa-server text-blue',
                        }"
                      >
                      </sidebar-item>
                    <sidebar-item
                        :link="{
                          name: 'vServer',
                          path: '/vserver',
                          icon: 'fas fa-hdd text-warning',
                        }"
                      >
                      </sidebar-item>
                </ul>
                
                <hr class="my-2">
                <h6 class="navbar-heading text-muted">Account</h6>
                   <ul class="navbar-nav mb-md-3">
                    <sidebar-item
                        :link="{
                          name: 'Mein Profil',
                          path: '/profile',
                          icon: 'ni ni-single-02 text-info',
                        }"
                      >
                      </sidebar-item>
                    <sidebar-item
                        :link="{
                          name: 'Ticket',
                          path: '/tickets',
                          icon: 'ni ni-support-16 text-yellow',
                        }"
                      >
                      </sidebar-item>
                      <sidebar-item
                        :link="{
                          name: 'Guthaben aufladen',
                          path: '/charge',
                          icon: 'ni ni-money-coins text-danger',
                        }"
                      >
                      </sidebar-item>
                    <sidebar-item
                        :link="{
                          name: 'Transaktionen',
                          path: '/transactions',
                          icon: 'fas fa-book text-purple',
                        }"
                      >
                      </sidebar-item>
                </ul>
                
            </div>
            </div>
    </nav>
</template>
<script>
  import NavbarToggleButton from '@/components/NavbarToggleButton'

  export default {
    name: 'sidebar',
    components: {
      NavbarToggleButton
    },
    props: {
      logo: {
        type: String,
        default: '/img/brand/green.png',
        description: 'Sidebar app logo'
      },
      autoClose: {
        type: Boolean,
        default: true,
        description: 'Whether sidebar should autoclose on mobile when clicking an item'
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      };
    },
    methods: {
      closeSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      showSidebar() {
        this.$sidebar.displaySidebar(true)
      }
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false;
      }
    }
  };
</script>
