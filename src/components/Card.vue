<template>
  <div>
    <div class="viewport">

      <md-list class="md-double-line">
        <md-subheader v-bind:name="name">Next hours {{name}}</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>(650) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>(650) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Next 5 days</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">light_mode</md-icon>
          <div class="md-list-item-text">
            <span>Fri Nov 1</span>
            <span>Clear</span>
          </div>
         <md-display-1>
          22 11
          </md-display-1>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">light_mode</md-icon>
          <div class="md-list-item-text">
            <span>Fri Nov 1</span>
            <span>Clear</span>
          </div>
         <md-display-1>
          22 11
          </md-display-1>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">light_mode</md-icon>
          <div class="md-list-item-text">
            <span>Fri Nov 1</span>
            <span>Clear</span>
          </div>
         <md-display-1>
          22 11
          </md-display-1>
        </md-list-item>
        <md-list-item>
          <md-icon class="md-primary">light_mode</md-icon>
          <div class="md-list-item-text">
            <span>Fri Nov 1 </span>
            <span>Clear</span>
          </div>
         <md-display-1>
          22 11
          </md-display-1>
        </md-list-item>
       
        


      </md-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card'
    // props: ['name'],  
  }


</script>


<style scoped>
  .viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }
</style>