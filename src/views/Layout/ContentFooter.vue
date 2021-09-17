<template>
  <footer class="footer px-4">
    <b-row align-v="center" class="justify-content-lg-between">
      <b-col xl="6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{year}} <a href="#" class="font-weight-bold ml-1">ShadeHost.eu</a>
            </div>
          </b-col>
          <b-col xl="6" class="col-xl-6">
            <b-nav  class="nav-footer justify-content-center justify-content-xl-end">
              <b-nav-item href="https://www.creative-tim.com" target="_blank" >
                
              </b-nav-item>
              <b-nav-item href="#" target="_blank">
                AGB
              </b-nav-item>
              <b-nav-item href="#"  target="_blank">
                Impressum
              </b-nav-item>
              <b-nav-item href="#" target="_blank">
                Datenschutzerklärung
              </b-nav-item>
              <b-nav-item href="#" target="_blank">
                Widerrufsbelehrung
              </b-nav-item>
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
