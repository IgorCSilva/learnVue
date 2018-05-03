<<template lang="pug">
    div#containers
        h3 Panels

        div.w3-panel.w3-teal 
            p Panel 1

        div.w3-panel.w3-pale-green 
            p Panel 2
        
        div.w3-panel.w3-leftbar.w3-sand.w3-xxlarge.w3-serif
            p
                i "Make it as simple as possible, but not simpler."

        div#panel.w3-panel.w3-blue.w3-display-container
            span.w3-button.w3-display-topright(onclick="this.parentElement.style.display='none'") X
            p Click on the X to close this panel.
        
        button.w3-btn.w3-green(onclick="document.getElementById('panel').style.display='block'") Show panel
        
</template>

<<script>
export default {
  name: 'Containers',

  data() {
      return {

      }
  }
}
</script>

<style scoped>

</style>
