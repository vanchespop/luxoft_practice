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
          <v-tab to="/temperature">Температура</v-tab>
          <v-tab to="/humidity">Влажность</v-tab>
          <v-tab to="/speed">Скорость Ветра</v-tab>
        </v-tabs>
        <router-view :key="$route.fullPath"></router-view>
        <v-data-table
                v-model="selectedRows"
                :headers="headers"
                :items="globalData"
                item-key="date"
                :sort-by="['date']"
                :page.sync="page"
                single-select
        >
          <template v-slot:item="{ item, isSelected, select, headers }">
            <tr
                    :class='{"blue accent-4 white--text": isSelected}'
                    @click="toggle(isSelected, select, item.date)"
            >
              <td
                      class="d-flex align-center justify-space-between d-sm-table-cell sm-border"
                      :key='index'
                      v-for="(element, index) in headers"
              >
                <span class="font-weight-bold hidden-sm-and-up">{{element.text}}</span>
                <span class="d-block">{{item[element.value]}}</span>
              </td>
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
    beforeMount() {
      const hashDate = this.$router.history.current.hash.slice(1);
      const page = this.globalData.findIndex(e => e.date === hashDate);

      if (~page) {
        this.page = Math.floor(page / 10 + 1);
      }
      this.selectedRows = this.globalData.filter(e => e.date === hashDate);
    },
    data: () => ({
      page: 1,
      selectedRows: [],
      tab: null,
      headers: [
        {
          text: 'Дата',
          align: 'left',
          value: 'date'
        },
        { text: 'Температура', value: 'temperature' },
        { text: 'Влажность', value: 'humidity'},
        { text: 'Скорость ветра', value: 'speed'},
      ],
      globalData: data,
    }),
    methods: {
      toggle(isSelected, select, date) {
        if (!isSelected) {
          history.replaceState("", document.title, '#' + date);
        } else {
          history.replaceState("", document.title, ' ');
        }
        select(!isSelected)
      }
    }
  }
</script>
<style scoped>
  @media (max-width: 600px) {
    .sm-border:not(:last-child) {
      border-bottom: none !important;
    }
  }
</style>
