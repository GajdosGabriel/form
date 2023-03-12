<script>
import { reactive, ref } from "vue";
import ClientFamilyInput from "./ClientFamilyInput.vue";
import dataTip from "../DataTip.vue";

import useClient from "../../composables/Client"
export default {
  components: { ClientFamilyInput, dataTip },
  setup() {

    const { getFamilyList }  = useClient();

    const items = reactive(getFamilyList);
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
  <div class="card govuk-body bg-white">
    <!-- <div class="card-header">Nezaopatrené deti -->
    <!-- <data-tip :description="'Maloleté deti do 18 rokov, prípadne staršie deti študujúce na SŠ alebo VŠ'" /> -->
    <!-- </div> -->

    <div class="grid grid-cols-3 gap-3 text-sm font-semibold">
      <div class="col-span-1 px-4 p-1 bg-gray-200">Meno dieťaťa</div>
      <div class="col-span-1 px-4 p-1 bg-gray-200">Priezvisko dieťaťa</div>
      <div class="col-span-1 px-4 p-1 bg-gray-200">dátum narodenia</div>
    </div>

    <div
      class="grid grid-cols-3 gap-3 my-2"
      v-for="(income, index) in items"
      :key="index"
    >
      <client-family-input
        :item="income"
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