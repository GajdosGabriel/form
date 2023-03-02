<template>
  <div style="margin-top: 50px;">
    <div class="flex text-lg items-start">
      <div class="govuk-heading-m">
        G) Čestné vyhlásenie o pravdivosti a úplnosti údajov
      </div>
    </div>

    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="signature_place">
        Miesto </label
      ><span
        id="input-with-error-message-error"
        class="govuk-error-message"
      ></span
      ><input
        class="govuk-input govuk-input--width-10"
        id="signature_place"
        type="text"
        label="Miesto"
        placeholder="Obec"
        name="signature_place"
        required
      />
    </div>

    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="signature_date">
        Dňa </label
      ><span
        id="input-with-error-message-error"
        class="govuk-error-message"
      ></span
      ><input
        class="govuk-input govuk-input--width-10"
        id="signature_date"
        type="date"
        label="Dňa"
        name="signature_date"
      />
    </div>
  </div>
</template>
