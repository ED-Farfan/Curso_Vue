<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Guardar Task',
          icon: 'save',
          label: 'Guardar',
          handler: saveWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

    

    <q-card flat bordered v-for="(tarea, index) in tareas" :key="index">
      <q-card-section v-html="tarea.texto" />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      editor: '',
      tareas:[]
    }
  },
  methods: {
    saveWork () {
      this.tareas.push({
        texto: this.editor,
        estado: false
      })
      this.$q.notify({
        message: 'Se guardo el task',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
      this.editor = ''
    }
  },
}
</script>
