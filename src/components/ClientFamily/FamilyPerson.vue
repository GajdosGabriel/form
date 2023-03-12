<script>
import { reactive, ref } from "vue";
import FamilyPersonInput from "./FamilyPersonInput.vue";
import dataTip from "../DataTip.vue";

import useClient from "../../composables/Client";
export default {
  components: { FamilyPersonInput, dataTip },
  setup() {
    const { state, getFamilyPerson } = useClient();

    var items = reactive(state.familyPerson);
    // onMounted(() => {
    //     onAdd();
    // });
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
        <tr class="idsk-table__row">
          <td class="idsk-table__cell">24.December</td>
          <td class="idsk-table__cell">piatok</td>
          <td class="idsk-table__cell">Štedrý deň - deň pracovného pokoja</td>
        </tr>

        <tr class="idsk-table__row">
          <td class="idsk-table__cell">24.December</td>
          <td class="idsk-table__cell">piatok</td>
          <td class="idsk-table__cell">Štedrý deň - deň pracovného pokoja</td>
        </tr>
      </tbody>
    </table>

    <div class="grid grid-cols-3 gap-3 text-sm font-semibold">
      <div class="col-span-1 px-4 p-1 bg-gray-200">Meno dieťaťa</div>
      <div class="col-span-1 px-4 p-1 bg-gray-200">Priezvisko dieťaťa</div>
      <div class="col-span-1 px-4 p-1 bg-gray-200">dátum narodenia</div>
    </div>

    <div
      class="grid grid-cols-3 gap-3 my-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <family-person-input
        :item="item"
        :index="index"
        @clickOnDelete="onDelete"
      />
    </div>

    <div class="wizard-input-row" v-if="items.length == 0">
      Žiadny príslušníci
    </div>

    <div @click="onAdd" class="card-button">+ Pridať položku</div>
  </div>
</template>
