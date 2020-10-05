<template>
  <div>
    <v-container class="">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat>
              <v-btn
                small
                outlined
                color="blue"
                class="mr-3"
                @click="dialog = true"
                >Agregar</v-btn
              >

              <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
              >
                Today
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small> mdi-chevron-left </v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small> mdi-chevron-right </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right> mdi-menu-down </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:date="viewDay"
            ></v-calendar>
            <v-dialog
              v-model="dialog"
              persistent
              :overlay="false"
              max-width="500px"
              transition="dialog-transition"
            >
              <v-card class="" elevation="">
                <v-card-title primary-title class="cyan justify-center">
                  <span class="headline text-center">Nuevo Evento</span>
                </v-card-title>
                <v-card-text>
                  <div class="text--primary">
                    <v-form>
                      <v-layout row wrap justify-center>
                        <v-flex class=" mt-1" xs12 lign="center"      justify="center">
                          <v-text-field type="text" label="Nombre" append-icon="mdi-bookmark"  v-model="nombre" required color="red" :rules="nameRules"></v-text-field>                          
                           </v-flex>
                        <v-flex class="mt-1" xs12>
                          <v-text-field type="text" label="Detalles" append-icon="mdi-pencil"  v-model="detalle" outlined color="danger" :rules="nameRules" clearable></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs6>
                          <v-text-field type="date" label="Fecha de Inicio"  v-model="F_inicio" outlined color="red" clearable :rules="nameRules"></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs6>
                          <v-text-field type="date" label="Fecha de Fin"   v-model="F_fin" outlined color="danger" clearable :rules="nameRules"></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs12>
                          <v-text-field type="color" label="Color"   v-model="color_s" outlined color="danger" clearable :rules="nameRules"></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs12 justify-center>
                          <v-btn class="center" color="success" dark text>
                                Agregar Evento<v-icon  right>mdi-calendar-check</v-icon>
                               </v-btn>
                          {{verificarNombre}}
                          {{verificarFechaI}}
                         
                        </v-flex>
                      </v-layout>
                    </v-form>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color=""> </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { db } from "../main";
export default {
  name: "Calendario",
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
    nombre: null,
    detalle: null,
    color: "#1976D2",
    dialog: false,
    F_inicio: null,
    F_fin: null,
    color_s:"#ffffff",
    nameRules: [
        v => !!v || 'Es requerido',        
      ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
    this.getEvent();
  },
  methods: {
    async getEvent() {
      try {
        const snapshot = await db.collection("eventos").get();
        const events = [];
        snapshot.forEach((doc) => {
          console.log(doc.Nombre);
        });
      } catch (error) {
        console.log("EROROROROROROR");
        console.log(error);
      }
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  computed: {
    verificarNombre(){
      if(this.nombre === null){
        return false
      }
      else{
        return true
      }
    },
    verificarFechaI(){
      if(this.F_inicio === null){
        return this.F_inicio
      }
      else{
        return this.F_inicio
      }
    }

  },
};
</script>