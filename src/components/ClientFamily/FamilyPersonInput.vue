<template>
  <td class="idsk-table__cell">
    <input placeholder="meno" class="govuk-input" v-model="item.GivenName" />
  </td>

  <td class="idsk-table__cell">
    <input placeholder="priezvisko" class="govuk-input" v-model="item.FamilyName" />
  </td>

  <td class="idsk-table__cell" style="display: flex; justify-content: center; ">
    <input placeholder="meno" class="govuk-input" type="date" v-model="item.born_date" />

    <div @click="$emit('clickOnDelete', index)" class="form_delete_button"
      style="padding: 10px; background-color: silver; margin: 0px 0px 0px 5px; font-size: large; cursor: pointer; :hover: ba">
      -
    </div>
  </td>
</template>

<script>
export default {
  props: ["item", "index"],
  emits: ["clickOnDelete"],
};
</script>
