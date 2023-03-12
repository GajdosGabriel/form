<template>
  <div class="col-span-1 pl-2 my-1">
    <input
      :name="'families[' + index + '][GiveName]'"
      :value="item.GiveName"
      placeholder="meno"
      class="govuk-input"
    />
  </div>
  <div class="col-span-1 pl-2 my-1">
    <input
      :name="'families[' + index + '][FamilyName]'"
      :value="item.FamilyName"
      placeholder="priezvisko"
      class="govuk-input"
    />
  </div>
  <div class="flex col-span-1 my-1">
    <input
      type="date"
      :name="'families[' + index + '][born_date]'"
      :value="item.born_date"
      class="govuk-input"
    />

    <div @click="$emit('clickOnDelete', index)" class="form_delete_button">
      -
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  emits: ["clickOnDelete"],
};
</script>
