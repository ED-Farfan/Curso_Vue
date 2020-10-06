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
                        <v-flex
                          class="mt-1"
                          xs12
                          lign="center"
                          justify="center"
                        >
                          <v-text-field
                            type="text"
                            label="Nombre"
                            append-icon="mdi-bookmark"
                            v-model="nombre"
                            required
                            color="blue darken-2"
                            :rules="nameRules"
                          ></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs12>
                          <v-text-field
                            type="text"
                            label="Detalles"
                            append-icon="mdi-pencil"
                            v-model="detalle"
                            outlined
                            color="blue darken-2"
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs6>
                          <v-text-field
                            type="date"
                            label="Fecha de Inicio"
                            v-model="F_inicio"
                            outlined
                            color="blue darken-2"
                            clearable
                            :rules="nameRules"
                          ></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs6>
                          <v-text-field
                            type="date"
                            label="Fecha de Fin"
                            v-model="F_fin"
                            outlined
                            color="blue darken-2"
                            clearable
                            :rules="nameRules"
                          ></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs6>
                          <v-text-field
                            type="color"
                            label="Color"
                            v-model="color_s"
                            outlined
                            :rules="nameRules"
                            color="blue darken-2"
                          ></v-text-field>
                        </v-flex>
                        <v-flex class="mt-1" xs2>
                          <span> Color: </span>
                        </v-flex>
                        <v-flex class="mt-1" xs4>
                          <v-color-picker
                            disabled
                            dot-size="25"
                            hide-canvas
                            swatches-max-height="200"
                            v-model="color_s"
                            mode="hexa"
                          ></v-color-picker>
                        </v-flex>
                        <v-flex
                          class="mt-1 align-self-center"
                          xs12
                          justify-center
                          v-if="completo"
                        >
                          <div class="text-center">
                            <v-btn
                              class="center"
                              color="success"
                              dark
                              text
                              rounded
                              @click="setEvent()"
                            >
                              Agregar Evento<v-icon right
                                >mdi-calendar-check</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-flex>
                        <v-flex class="mt-1" xs12 v-else>
                          <span class="red--text" v-if="!verificarNombre"
                            >* Falta el nombre</span
                          ><br v-if="!verificarNombre" />
                          <span class="red--text" v-if="!verificarFechaI"
                            >* Falta fecha de Inicio</span
                          ><br v-if="!verificarFechaI" />
                          <span class="red--text" v-if="!verificarFechaF"
                            >* Falta fecha de fin
                          </span>
                          <span
                            class="red--text"
                            v-if="verificarFechaI && verificarFechaF"
                            ><span v-if="!verificarFechaMayor"
                              >* Fecha de inicio no puede ser mayor a fecha de
                              fin</span
                            ><br v-if="!verificarFechaMayor"
                          /></span>
                          <br v-if="!verificarFechaF" />
                          <span class="red--text" v-if="!verificarColor"
                            >* Falta seleccionar color</span
                          ><br />
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
            
            <v-overlay :absolute="true" :value="overlay" color="black">
              <v-card>
                <v-card-title primary-title class="grey darken-3">
                  <div class="text-center">
                    <span overline> Cargando Calendario</span>
                  </div>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="text-center mt-2">
                      <v-progress-circular indeterminate color="cyan">
                        <v-icon color="green accent-2">mdi-reload</v-icon>
                      </v-progress-circular>
                    </div>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-overlay>
            <v-overlay :value="overlay2" color="lime">
              <v-card>
                <v-card-title primary-title class="black">
                  <div class="text-center">
                    <br>
                    <span overline >  <v-icon color="white">mdi-check</v-icon>
                     Se agrego corrrectamente</span>
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="text-center mt-5">
                    <v-btn
        class="black--text"
        color="light-green accent-3"
        @click="overlay2 = false"
        text
        rounded
      >
        Continuar
      </v-btn>
                  </div>
                </v-card-text>                
              </v-card>
            </v-overlay>
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
    color_s: "#ffffff",
    nameRules: [(v) => !!v || "Es requerido"],
    overlay: false,
    overlay2:false
  }),
  mounted() {
    this.$refs.calendar.checkChange();
    this.getEvent();
  },
  methods: {
    async setEvent() {
      try {
        if (
          this.verificarNombre &&
          this.verificarFechaI &&
          this.verificarFechaF &&
          this.verificarFechaMayor &&
          this.verificarColor
        ) {
          console.log("Entro");
          await db.collection("eventos").add({
            name: this.nombre,
            details: this.detalle,
            start: this.F_inicio,
            end: this.F_fin,
            color: this.color_s,
          });
          this.cancelar()
          this.getEvent();
          this.overlay2 = true
          
        }
      } catch (error) {
        console.log("EROROROROROROR");
        console.log(error);
      }
    },
    async getEvent() {
      try {
        this.overlay=true
        const snapshot = await db.collection("eventos").get();
        const events = [];
        snapshot.forEach((doc) => {
          let eventData = doc.data();
          eventData.id = doc.id;
          events.push(eventData);          
        });        
        this.events = events;
        this.overlay=false
        
      } catch (error) {
        console.log("EROROROROROROR");
        console.log(error);
      }
    },
    cancelar(){
      this.nombre= null,
    this.detalle= null,
    this.color= "#1976D2",
    this.dialog= false,
    this.F_inicio= null,
    this.F_fin= null,
    this.color_s= "#ffffff",
    this.dialog = false
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
    verificarNombre() {
      if (this.nombre === null) {
        return false;
      } else {
        return true;
      }
    },
    verificarFechaI() {
      if (this.F_inicio === null) {
        return false;
      } else {
        return true;
      }
    },
    verificarFechaF() {
      if (this.F_fin === null) {
        return false;
      } else {
        return true;
      }
    },
    verificarColor() {
      if (this.color_s == "#FFFFFF") {
        return false;
      } else {
        return true;
      }
    },
    verificarFechaMayor() {
      if (this.verificarFechaI && this.verificarFechaF) {
        if (this.F_inicio < this.F_fin) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    completo() {
      if (
        this.verificarNombre &&
        this.verificarFechaI &&
        this.verificarFechaF &&
        this.verificarFechaMayor &&
        this.verificarColor
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>