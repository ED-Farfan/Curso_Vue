<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-if="!ModoEditor"
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Guardar Task',
          icon: 'save',
          label: 'Guardar',
          handler: saveWork,
        },
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save'],
      ]"
    />
    <q-editor v-else
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Actualizar elemento',
          icon: 'cached',
          label: 'Actualizar',
          handler: Actualizar,
        },
        upload: {
          tip: 'Cancelar Actualizacion',
          icon: 'highlight_off',
          label: 'Cancelar',
          handler: cancelar_Modificacion
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save'],
      ]"
    />

    <q-card
      class="row"
      flat
      bordered
      v-for="(tarea, index) in tareas"
      :key="index"
    >
      <q-card-section
        class="col"
        v-html="tarea.texto"
        :class="tarea.estado ? 'tachar' : ''"
      />
      <q-btn
        color="green"
        icon="check"
        flat
        label="Completar"
        @click="tarea.estado = !tarea.estado"
      />
      <q-btn
        color="red"
        icon="delete_forever"
        flat
        label="Eliminar"
        @click="eliminar(index,tarea.id)"
        
      />
      <q-btn
        color="blue"
        icon="library_books"
        flat
        label="Modificar"
        @click="modificar(index,tarea.id)"
        
      />
    </q-card>
    <div class="flex flex-center" v-if="tareas.length == 0">
      <h6>Sin Notas</h6>
    </div>    
    
  </div>
</template>

<script>
import { db } from "boot/firebase";
export default {
  name: "PageIndex",
  data() {
    return {
      editor: "",
      tareas: [],
      ModoEditor: false,
      id: null,
      index:null,
    };
  },
  created() {
    this.listarTareas();
  },
  methods: {
    async listarTareas() {
      try {
        this.tareas=[]
        const resDB = await db.collection("tareas").get();
        if (resDB.length != 0) {
          resDB.forEach((res) => {
            console.log(res.data());
            this.tareas.push({
              id: res.id,
              texto: res.data().texto,
              estado: res.data().estado,
            })
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async saveWork() {
      try {
        if (this.editor != "") {
          const resDB = await db.collection('tareas').add({
            texto: this.editor,
            estado: false            
          })        
        this.$q.notify({
          message: "Se guardo el task",
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
        });
        this.editor = "";
        this.listarTareas()
      } else {
        this.$q.dialog({
          title: "¡Campo Vacío!",
          message: "No se puede guardar tarea vacia",
        });
      }
      } catch (error) {
        console.log(error);
      }
      
    },
    async eliminarBD(id){
      try {
        await db.collection('tareas').doc(id).delete()
        
      } catch (error) {
        console.log(error);
      }
    },
    eliminar(index , id) {
      this.$q
        .dialog({
          title: "¡Eliminar!",
          message: "¿Seguro que desea eliminar esta tarea?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.eliminarBD(id)
          this.tareas.splice(index, 1);
        });
    },
    modificar(index,id){
      this.index = index
      this.id = id
      this.ModoEditor = true
      this.editor = this.tareas[index].texto
    },
    cancelar_Modificacion(){
      this.editor = "";
      this.index = null
      this.id = null
      this.ModoEditor = false      
    },
    async Actualizar(){
      try {
        const resDB = await db.collection('tareas').doc(this.id).update({
          texto: this.editor
        })
        this.tareas[this.index].texto = this.editor
        this.$q.notify({
          message: "Se Actualizo Correctamente La Tarea",
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
        });
      } catch (error) {
        console.log(error);
      }finally{
        this.cancelar_Modificacion()
      }
    }
  },
};
</script>
<style >
.tachar {
  text-decoration: line-through;
}
</style>