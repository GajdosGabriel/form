<script>
import { reactive, ref, onMounted } from "vue";
import FamilyChildreninput from "./FamilyPersonInput.vue";
import dataTip from "../DataTip.vue";

import useClient from "../../composables/Client";
export default {
  components: { FamilyChildreninput, dataTip },
  setup() {
    const { state, getChildren } = useClient();

    const items = reactive([]);
    onMounted(() => {
      onAdd();
    });
    const onAdd = () => {
      items.push({});
    };
    const onDelete = (i) => {
      items.splice(i, 1);
    };
    return {
      items,
      onAdd,
      onDelete,
      getChildren
    };
  },
};
</script>

<template>
  <div>
    <table class="idsk-table" style="width: 100%; background-color: white;">
      <thead class="idsk-table__head">
        <tr class="idsk-table__row">
          <th scope="col" class="idsk-table__header">
            <span class="th-span"> Meno dieťaťa </span>
          </th>
          <th scope="col" class="idsk-table__header">
            <span class="th-span"> Priezvisko dieťaťa </span>
          </th>
          <th scope="col" class="idsk-table__header">
            <span class="th-span"> Dátum narodenia </span>
          </th>
        </tr>
    </thead>
    <tbody class="idsk-table__body" style="">
      <tr class="idsk-table__row" v-for="(item, index) in items" :key="index">
        <family-childreninput :item="item" :index="index" @clickOnDelete="onDelete" />
        </tr>
      </tbody>


    </table>

  <table class="idsk-table" style="width: 100%; background-color: white;" v-if="items.length == 0">
    <tr @click="onAdd" class="card-button"
        style="width: 100%;text-align: center; background-color: white; margin: 8px;">
        <div style=" padding: 10px; cursor: pointer; font-weight: bold;  border-style: solid; border-color:  silver ; border-width: 3px; ">
          Žiadny príslušníci
        </div>
      </tr>
    </table>

    <table class="idsk-table" style="width: 100%; background-color: white;">
      <tr @click="onAdd" class="card-button"
        style="width: 100%;text-align: center; background-color: silver; margin: 8px; ">
        <div style=" padding: 10px; cursor: pointer; font-weight: bold; ">
          + Pridať položku
        </div>
      </tr>
    </table>



    <!-- <div
          class="grid grid-cols-3 gap-3 my-2"
          v-for="(item, index) in getFamilyPerson"
          :key="index"
        > -->


    <!-- /> -->
    <!-- </div> -->

    <!-- <div class="wizard-input-row" v-if="items.length == 0">
          Žiadny príslušníci
        </div> -->


  </div>
</template>
