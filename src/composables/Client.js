import { reactive, readonly, computed } from "vue";

const defaultState = {
  form: {},
  validatedErrors: [],
  slide8: {},
};

const state = reactive(defaultState);

const getters = {
  getForm: computed(() => state.form),
  getvalidatedErrors: computed(() => state.validatedErrors),
  incomesActual: computed(() => {
    let sumar = 0;
    if (Number.isInteger(state.slide8.five)) {
      sumar += state.slide8.five;
    }
    if (Number.isInteger(state.slide8.six)) {
      sumar += state.slide8.six;
    }
    if (Number.isInteger(state.slide8.seven)) {
      sumar += state.slide8.seven;
    }
    if (Number.isInteger(state.slide8.eight)) {
      sumar += state.slide8.eight;
    }

    return Number(sumar);
  }),

  extensActual: computed(() => {
    let sumar = 0;
    if (state.slide6.partner == 1 || state.slide6.partner == 2) {
      sumar += Number(234.42 + 163.53);
    } else {
      sumar += Number(234.42);
    }

    if (state.slide7.children) {
      sumar += Number(107.03 * state.slide7.children);
    }
    return Math.round(1.6 * sumar);
  }),
};

const actions = {
  getValidate: () => {
    if (!state.form.FamilyName) {
      state.validatedErrors.push(["Validate error"]);
    }
  },

  setProgresbar: (number) => {
    state.progresbar = number;
  },
  setForm: (inputs) => {
    xml(state.form);
    state.form = inputs;
  },
};

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});

function xml(form) {
  var doc = document.implementation.createDocument("", "", null);

  var ApplicationCivil = doc.createElement("ApplicationCivil");
  ApplicationCivil.setAttribute(
    "xmlns:xsi",
    "http://www.w3.org/2001/XMLSchema-instance"
  );
  ApplicationCivil.setAttribute(
    "xmlns",
    "https://data.gov.sk/id/egov/eform/30798841.ApplicationCivil.sk/1.0"
  );

  var ApplicationNumber = doc.createElement("ApplicationNumber");
  var ApplicationNumberText = doc.createTextNode("ICI-230126-0001-br3a");
  ApplicationNumber.appendChild(ApplicationNumberText);
  ApplicationCivil.appendChild(ApplicationNumber);

  var Applicant = doc.createElement("Applicant");
  ApplicationCivil.appendChild(Applicant);

  var ID = doc.createElement("ID");
  Applicant.appendChild(ID);

  var IdentifierType = doc.createElement("IdentifierType");
  ID.appendChild(IdentifierType);

  var Codelist = doc.createElement("Codelist");
  IdentifierType.appendChild(Codelist);

  var CodelistCode = doc.createElement("CodelistCode");
  var CodelistCodeText = doc.createTextNode("4001");
  CodelistCode.appendChild(CodelistCodeText);
  Codelist.appendChild(CodelistCode);

  var CodelistItem = doc.createElement("CodelistItem");
  Codelist.appendChild(CodelistItem);

  var ItemCode = doc.createElement("ItemCode");
  var ItemCodeText = doc.createTextNode("9");
  ItemCode.appendChild(ItemCodeText);
  CodelistItem.appendChild(ItemCode);

  var ItemName = doc.createElement("ItemName");
  var ItemNameText = doc.createTextNode("Rodné číslo");
  ItemName.setAttribute("Language", "sk");
  ItemName.appendChild(ItemNameText);
  CodelistItem.appendChild(ItemName);

  var IdentifierValue = doc.createElement("IdentifierValue");
  var IdentifierValueText = doc.createTextNode(form.IdentifierValue);
  IdentifierValue.appendChild(IdentifierValueText);
  ID.appendChild(IdentifierValue);

  var GivenName = doc.createElement("GivenName");
  var GivenNameText = doc.createTextNode(form.GiveName);
  GivenName.appendChild(GivenNameText);
  Applicant.appendChild(GivenName);

  var FamilyName = doc.createElement("FamilyName");
  var FamilyNameText = doc.createTextNode(form.FamilyName);
  FamilyName.appendChild(FamilyNameText);
  Applicant.appendChild(FamilyName);

  var GivenFamilyName = doc.createElement("GivenFamilyName");
  var GivenFamilyNameText = doc.createTextNode(form.GivenFamilyName);
  GivenFamilyName.appendChild(GivenFamilyNameText);
  Applicant.appendChild(GivenFamilyName);

  var Sex = doc.createElement("Sex");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(form.Sex);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode(form.Sex === "ZENA" ? "Žena" : "Muž");
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  Sex.appendChild(Code);
  Sex.appendChild(Text);
  Applicant.appendChild(Sex);

  var Nationality = doc.createElement("Nationality");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(form.Nationality);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode('SVK');
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  Nationality.appendChild(Code);
  Nationality.appendChild(Text);
  Applicant.appendChild(Nationality);

  var MaritalStatus = doc.createElement("MaritalStatus");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(form.MaritalStatus);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode(
    (form.MaritalStatus == 1) ? 'Slobodný/á' : 
    (form.MaritalStatus == 2) ? 'Vydatá/ženaty': 
    (form.MaritalStatus == 3) ? 'Ovdovená/ý': 
    (form.MaritalStatus == 4) ? 'Rozvedená/ý': 'Odlúčená/ý'
  );
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  MaritalStatus.appendChild(Code);
  MaritalStatus.appendChild(Text);
  Applicant.appendChild(MaritalStatus);

  var TelephoneAddress = doc.createElement("TelephoneAddress");
  var Number = doc.createElement("Number");
  var FormattedNumber = doc.createElement("FormattedNumber");
  var FormattedNumberText = doc.createTextNode('+421' + form.PhoneNumber);
  FormattedNumber.appendChild(FormattedNumberText);
  Number.appendChild(FormattedNumber);
  TelephoneAddress.appendChild(Number);
  Applicant.appendChild(TelephoneAddress);

  var ElectronicAddress = doc.createElement("ElectronicAddress");
  var InternetAddress = doc.createElement("InternetAddress");
  var InternetAddressText = doc.createTextNode(form.Email);
  InternetAddress.appendChild(InternetAddressText);
  ElectronicAddress.appendChild(InternetAddress);
  Applicant.appendChild(ElectronicAddress);

  var PermanentResidence = doc.createElement("PermanentResidence");
  var StreetName = doc.createElement("StreetName");
  var StreetNameText = doc.createTextNode(form.StreetName);
  var PropertyRegistrationNumber = doc.createElement("PropertyRegistrationNumber");
  var PropertyRegistrationNumberText = doc.createTextNode(form.PropertyRegistrationNumber);
  var BuildingNumber = doc.createElement("BuildingNumber");
  var BuildingNumberText = doc.createTextNode(form.BuildingNumber);
  var Municipality = doc.createElement("Municipality");
  var MunicipalityText = doc.createTextNode(form.Municipal);
  var PostalCode = doc.createElement("PostalCode");
  var PostalCodeText = doc.createTextNode(form.Municipal);

  PostalCode.appendChild(PostalCodeText);
  PermanentResidence.appendChild(PostalCode);
  PermanentResidence.appendChild(MunicipalityText);
  PermanentResidence.appendChild(Municipality);
  BuildingNumber.appendChild(BuildingNumberText);
  PermanentResidence.appendChild(BuildingNumber);
  PropertyRegistrationNumber.appendChild(PropertyRegistrationNumberText);
  PermanentResidence.appendChild(PropertyRegistrationNumber);
  StreetName.appendChild(StreetNameText);
  PermanentResidence.appendChild(StreetName);
  Applicant.appendChild(PermanentResidence);





  



  doc.appendChild(ApplicationCivil);

  var serializer = new XMLSerializer();
  var xmlString = serializer.serializeToString(doc);
  alert(xmlString);
}
