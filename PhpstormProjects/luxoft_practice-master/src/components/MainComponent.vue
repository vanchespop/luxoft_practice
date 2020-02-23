<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-col
              cols="12"
              xs="12"
              sm="12"
              md="10"
      >
        <v-tabs
                v-model="tab"
                background-color="blue accent-4"
                center-active
                show-arrows
                dark
        >
          <v-tab to="/">Температура</v-tab>
          <v-tab to="/humidity">Влажность</v-tab>
          <v-tab to="/speed">Скорость Ветра</v-tab>
        </v-tabs>
        <router-view :key="$route.fullPath"></router-view>
        <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="date"
                :sort-by="['date']"
        >
         <template  v-slot:item="{ item, isSelected, select }">
           <tr :class="isSelected ? 'blue accent-4':'' " @click="toggle(isSelected,select)">
             <td>{{item.date}}</td>
             <td>{{item.temperature}}</td>
             <td>{{item.humidity}}</td>
             <td>{{item.speed}}</td>
           </tr>
         </template>

        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import data from "../stabs/items";
  export default {
    name: 'MainComponent',
    data: () => ({
      tab: null,
      headers: [
        {
          text: 'Дата',
          align: 'left',
        },
        { text: 'Температура' },
        { text: 'Влажность'},
        { text: 'Скорость ветра'},
      ],
      desserts: data,
    }),
    methods: {
      toggle(isSelected,select) {
        select(!isSelected)
      }
    }
  }
</script>
<style scoped>
  .sel{
    background-color: #2962ff;
    color: white;
  }
</style>
