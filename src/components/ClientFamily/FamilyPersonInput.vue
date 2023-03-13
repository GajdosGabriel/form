<template>
  <td class="idsk-table__cell">
    <input placeholder="meno" class="govuk-input" :name="'families[' + index + '][GiveName]'" :value="item.GiveName" />
  </td>

  <td class="idsk-table__cell">
    <input placeholder="priezvisko" class="govuk-input" :name="'families[' + index + '][FamilyName]'"
      :value="item.FamilyName" />
  </td>

  <td class="idsk-table__cell" style="display: flex; justify-content: center; ">
    <input placeholder="meno" class="govuk-input" type="date" :name="'families[' + index + '][born_date]'"
      :value="item.born_date" />
    <div @click="$emit('clickOnDelete', index)" class="form_delete_button"
      style="padding: 10px; background-color: silver; margin: 0px 0px 0px 5px; font-size: large; cursor: pointer;">
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
