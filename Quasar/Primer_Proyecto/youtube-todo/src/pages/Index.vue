<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
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
        @click="eliminar(index)"
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
    };
  },
  created() {
    this.listarTareas();
  },
  methods: {
    async listarTareas() {
      try {
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
        this.tareas.push({
          texto: this.editor,
          estado: false,
        });
        this.$q.notify({
          message: "Se guardo el task",
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
        });
        this.editor = "";
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
    eliminar(index) {
      this.$q
        .dialog({
          title: "¡Eliminar!",
          message: "¿Seguro que desea eliminar esta tarea?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tareas.splice(index, 1);
        });
    },
  },
};
</script>
<style >
.tachar {
  text-decoration: line-through;
}
</style>