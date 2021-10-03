<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col xl="6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{year}} <a href="" class="font-weight-bold ml-1">ShadeHost.eu</a>
            </div>
          </b-col>
          <b-col xl="6" class="col-xl-6">
            <b-nav  class="nav-footer justify-content-center justify-content-xl-end">
              <sidebar-item
                :link="{
                name: 'AGB',
                path: '/agb',
                }"/>
              <sidebar-item
                :link="{
                name: 'Impressum',
                path: '/impressum',
                }"/>
              <sidebar-item
                :link="{
                name: 'Datenschutzerklärung',
                path: '/datenschutz',
                }"/>
              <sidebar-item
                :link="{
                name: 'Widerrufsbelehrung',
                path: '/wiederruf',
                }"/>
            </b-nav>
          </b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
