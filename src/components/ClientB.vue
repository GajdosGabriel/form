<template>
  <div style="margin-top: 50px">
    <div class="flex text-lg items-start">
      <div class="govuk-heading-m">
        B) Informácie o spore, ohľadom ktorého žiadate o právnu pomoc
      </div>
    </div>

    <div class="text-sm font-medium text-gray-900 mr-2 block">
      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--s" for="more-detail-1">
          B.1 Uveďte, v akej právnej veci žiadate o právnu pomoc, a opíšte v
          stručnosti Váš prípad </label
        ><textarea
          class="govuk-textarea"
          name="case_description"
          rows="5"
          placeholder="Uvedte v akej právnej veci žiadate o právnu pomoc, a stručne opíšte Váš prípad."
        ></textarea>
      </div>
      <details class="govuk-details" data-module="govuk-details">
        <summary class="govuk-details__summary">
          <span class="govuk-details__summary-text"> Poznámka </span>
        </summary>
        <div class="govuk-details__text">
          Priložte všetky fotokópie súdnych rozhodnutí (platobných rozkazov,
          rozsudkov, uznesení), dôkazov, listín, prípadne inej dokumentácie,
          ktorou preukazujete Vaše tvrdenia!
        </div>
      </details>
    </div>

    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="more-detail-1">
        B.2 Meno a priezvisko, kontaktné údaje protistrany v spore </label
      ><textarea
        class="govuk-textarea"
        id="more-detail-1"
        name="case_contact"
        placeholder="Meno a priezvisko, kontaktné údaje protistrany v spore"
        rows="5"
        required
      ></textarea>
    </div>

    <div class="mt-6 mb-8">
      <p class="govuk-label govuk-label--s">B.3 Hodnota sporu</p>
      <label class="govuk-label form-label">
        Ak viete predmet sporu vyčísliť v peniazoch, uveďte sumu. Napr.: Ak je
        predmetom sporu zaplatenie sumy 700 eur, hodnotou sporu je suma 700 eur.
      </label>
      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--s" for="case_value"></label
        ><span
          id="input-with-error-message-error"
          class="govuk-error-message"
        ></span
        ><input
          class="govuk-input govuk-input--width-10"
          id="case_value"
          type="text"
          placeholder="v peniazoch, suma"
          name="case_value"
        />
      </div>
      <fieldset class="govuk-fieldset">
        <div
          class="govuk-checkboxes govuk-checkboxes--small"
          data-module="govuk-checkboxes"
        >
          <div class="govuk-checkboxes__item">
            <input type="hidden" name="case_value_boolean" value="0" /><input
              class="govuk-checkboxes__input"
              name="case_value_boolean"
              type="checkbox"
              id="case_value_boolean"
              value="1"
            /><label
              class="govuk-label govuk-checkboxes__label"
              for="case_value_boolean"
            >
              Ak neviete vyčísliť hodnotu sporu, zakliknite "Neviem"
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
