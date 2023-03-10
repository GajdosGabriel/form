export function xml(state) {
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
  var IdentifierValueText = doc.createTextNode(state.form.IdentifierValue);
  IdentifierValue.appendChild(IdentifierValueText);
  ID.appendChild(IdentifierValue);

  var GivenName = doc.createElement("GivenName");
  var GivenNameText = doc.createTextNode(state.form.GivenName);
  GivenName.appendChild(GivenNameText);
  Applicant.appendChild(GivenName);

  var FamilyName = doc.createElement("FamilyName");
  var FamilyNameText = doc.createTextNode(state.form.FamilyName);
  FamilyName.appendChild(FamilyNameText);
  Applicant.appendChild(FamilyName);

  var GivenFamilyName = doc.createElement("GivenFamilyName");
  var GivenFamilyNameText = doc.createTextNode(state.form.GivenFamilyName);
  GivenFamilyName.appendChild(GivenFamilyNameText);
  Applicant.appendChild(GivenFamilyName);

  var Sex = doc.createElement("Sex");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(state.form.Sex);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode(state.form.Sex === "ZENA" ? "Žena" : "Muž");
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  Sex.appendChild(Code);
  Sex.appendChild(Text);
  Applicant.appendChild(Sex);

  var Nationality = doc.createElement("Nationality");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(state.form.Nationality);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode("SVK");
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  Nationality.appendChild(Code);
  Nationality.appendChild(Text);
  Applicant.appendChild(Nationality);

  var MaritalStatus = doc.createElement("MaritalStatus");
  var Code = doc.createElement("Code");
  var CodeText = doc.createTextNode(state.form.MaritalStatus);
  var Text = doc.createElement("Text");
  var TextText = doc.createTextNode(
    state.form.MaritalStatus == 1
      ? "Slobodný/á"
      : state.form.MaritalStatus == 2
      ? "Vydatá/ženaty"
      : state.form.MaritalStatus == 3
      ? "Ovdovená/ý"
      : state.form.MaritalStatus == 4
      ? "Rozvedená/ý"
      : "Odlúčená/ý"
  );
  Code.appendChild(CodeText);
  Text.appendChild(TextText);
  MaritalStatus.appendChild(Code);
  MaritalStatus.appendChild(Text);
  Applicant.appendChild(MaritalStatus);

  var TelephoneAddress = doc.createElement("TelephoneAddress");
  var Number = doc.createElement("Number");
  var FormattedNumber = doc.createElement("FormattedNumber");
  var FormattedNumberText = doc.createTextNode("+421" + state.form.PhoneNumber);
  FormattedNumber.appendChild(FormattedNumberText);
  Number.appendChild(FormattedNumber);
  TelephoneAddress.appendChild(Number);
  Applicant.appendChild(TelephoneAddress);

  var ElectronicAddress = doc.createElement("ElectronicAddress");
  var InternetAddress = doc.createElement("InternetAddress");
  var InternetAddressText = doc.createTextNode(state.form.Email);
  InternetAddress.appendChild(InternetAddressText);
  ElectronicAddress.appendChild(InternetAddress);
  Applicant.appendChild(ElectronicAddress);

  var PermanentResidence = doc.createElement("PermanentResidence");
  var StreetName = doc.createElement("StreetName");
  var StreetNameText = doc.createTextNode(state.form.StreetName);
  var PropertyRegistrationNumber = doc.createElement(
    "PropertyRegistrationNumber"
  );
  var PropertyRegistrationNumberText = doc.createTextNode(
    state.form.PropertyRegistrationNumber
  );
  var BuildingNumber = doc.createElement("BuildingNumber");
  var BuildingNumberText = doc.createTextNode(state.form.BuildingNumber);
  var Municipality = doc.createElement("Municipality");
  var MunicipalityText = doc.createTextNode(state.form.Municipal);
  var PostalCode = doc.createElement("PostalCode");
  var PostalCodeText = doc.createTextNode(state.form.PostalCode);

  StreetName.appendChild(StreetNameText);
  PermanentResidence.appendChild(StreetName);
  PropertyRegistrationNumber.appendChild(PropertyRegistrationNumberText);
  PermanentResidence.appendChild(PropertyRegistrationNumber);
  BuildingNumber.appendChild(BuildingNumberText);
  PermanentResidence.appendChild(BuildingNumber);
  Municipality.appendChild(MunicipalityText);
  PermanentResidence.appendChild(Municipality);
  PostalCode.appendChild(PostalCodeText);
  PermanentResidence.appendChild(PostalCode);
  Applicant.appendChild(PermanentResidence);

  if (state.form.booleanCorrespondence) {
    var CorrespondenceAddress = doc.createElement("CorrespondenceAddress");
    var CorrespondenceStreetName = doc.createElement("StreetName");
    var CorrespondenceStreetNameText = doc.createTextNode(
      state.form.CorrespondenceStreetName
    );
    var CorrespondenceBuildingNumber = doc.createElement("BuildingNumber");
    var CorrespondenceBuildingNumberText = doc.createTextNode(
      state.form.CorrespondenceBuildingNumber
    );
    var CorrespondencePropertyRegistrationNumber = doc.createElement(
      "PropertyRegistrationNumber"
    );
    var CorrespondencePropertyRegistrationNumberText = doc.createTextNode(
      state.form.CorrespondencePropertyRegistrationNumber
    );
    var CorrespondenceMunicipality = doc.createElement("Municipality");
    var CorrespondenceMunicipalityText = doc.createTextNode(
      state.form.CorrespondenceMunicipality
    );
    var CorrespondencePostalCode = doc.createElement("PostalCode");
    var CorrespondencePostalCodeText = doc.createTextNode(
      state.form.CorrespondencePostalCode
    );

    CorrespondenceStreetName.appendChild(CorrespondenceStreetNameText);
    CorrespondenceAddress.appendChild(CorrespondenceStreetName);
    CorrespondencePropertyRegistrationNumber.appendChild(
      CorrespondencePropertyRegistrationNumberText
    );
    CorrespondenceAddress.appendChild(CorrespondencePropertyRegistrationNumber);
    CorrespondenceBuildingNumber.appendChild(CorrespondenceBuildingNumberText);
    CorrespondenceAddress.appendChild(CorrespondenceBuildingNumber);
    CorrespondenceMunicipality.appendChild(CorrespondenceMunicipalityText);
    CorrespondenceAddress.appendChild(CorrespondenceMunicipality);
    CorrespondencePostalCode.appendChild(CorrespondencePostalCodeText);
    CorrespondenceAddress.appendChild(CorrespondencePostalCode);
    ApplicationCivil.appendChild(CorrespondenceAddress);
  }

  if (state.legalRepresentative.boolean) {
    var LegalRepresentative = doc.createElement("LegalRepresentative");

    var LegalRepresentativeGiveName = doc.createElement(
      "LegalRepresentativeGiveName"
    );
    var LegalRepresentativeGiveNameText = doc.createTextNode(
      state.legalRepresentative.GiveName
    );
    var LegalRepresentativeFamilyName = doc.createElement(
      "LegalRepresentativeFamilyName"
    );
    var LegalRepresentativeFamilyNameText = doc.createTextNode(
      state.legalRepresentative.FamilyName
    );
    var LegalRepresentativeDateOfBirth = doc.createElement(
      "LegalRepresentativeDateOfBirth"
    );
    var LegalRepresentativeDateOfBirthText = doc.createTextNode(
      state.legalRepresentative.DateOfBirth
    );

    var PermanentResidence = doc.createElement("PermanentResidence");
    var LegalRepresentativeStreetName = doc.createElement("StreetName");
    var LegalRepresentativeStreetNameText = doc.createTextNode(
      state.legalRepresentative.StreetName
    );
    var LegalRepresentativeBuildingNumber = doc.createElement("BuildingNumber");
    var LegalRepresentativeBuildingNumberText = doc.createTextNode(
      state.legalRepresentative.BuildingNumber
    );
    var LegalRepresentativePropertyRegistrationNumber = doc.createElement(
      "PropertyRegistrationNumber"
    );
    var LegalRepresentativePropertyRegistrationNumberText = doc.createTextNode(
      state.legalRepresentative.PropertyRegistrationNumber
    );
    var LegalRepresentativeMunicipality = doc.createElement("Municipality");
    var LegalRepresentativeMunicipalityText = doc.createTextNode(
      state.legalRepresentative.Municipality
    );
    var LegalRepresentativePostalCode = doc.createElement("PostalCode");
    var LegalRepresentativePostalCodeText = doc.createTextNode(
      state.legalRepresentative.PostalCode
    );

    LegalRepresentativeGiveName.appendChild(LegalRepresentativeGiveNameText);
    LegalRepresentative.appendChild(LegalRepresentativeGiveName);
    LegalRepresentativeFamilyName.appendChild(
      LegalRepresentativeFamilyNameText
    );
    LegalRepresentative.appendChild(LegalRepresentativeFamilyName);
    LegalRepresentativeDateOfBirth.appendChild(
      LegalRepresentativeDateOfBirthText
    );
    LegalRepresentative.appendChild(LegalRepresentativeDateOfBirth);

    var LegalRepresentativeTelephoneAddress =
      doc.createElement("TelephoneAddress");
    var LegalRepresentativeNumber = doc.createElement("Number");
    var LegalRepresentativeFormattedNumber =
      doc.createElement("FormattedNumber");
    var LegalRepresentativeFormattedNumberText = doc.createTextNode(
      "+421" + state.legalRepresentative.PhoneNumber
    );
    LegalRepresentativeFormattedNumber.appendChild(
      LegalRepresentativeFormattedNumberText
    );
    LegalRepresentativeNumber.appendChild(LegalRepresentativeFormattedNumber);
    LegalRepresentativeTelephoneAddress.appendChild(LegalRepresentativeNumber);
    LegalRepresentative.appendChild(LegalRepresentativeTelephoneAddress);

    var LegalRepresentativeElectronicAddress =
      doc.createElement("ElectronicAddress");
    var LegalRepresentativeInternetAddress =
      doc.createElement("InternetAddress");
    var LegalRepresentativeInternetAddressText = doc.createTextNode(
      state.legalRepresentative.Email
    );
    LegalRepresentativeInternetAddress.appendChild(
      LegalRepresentativeInternetAddressText
    );
    LegalRepresentativeElectronicAddress.appendChild(
      LegalRepresentativeInternetAddress
    );
    LegalRepresentative.appendChild(LegalRepresentativeElectronicAddress);

    LegalRepresentativeStreetName.appendChild(
      LegalRepresentativeStreetNameText
    );
    PermanentResidence.appendChild(LegalRepresentativeStreetName);
    LegalRepresentativePropertyRegistrationNumber.appendChild(
      LegalRepresentativePropertyRegistrationNumberText
    );
    PermanentResidence.appendChild(
      LegalRepresentativePropertyRegistrationNumber
    );
    LegalRepresentativeBuildingNumber.appendChild(
      LegalRepresentativeBuildingNumberText
    );
    PermanentResidence.appendChild(LegalRepresentativeBuildingNumber);
    LegalRepresentativeMunicipality.appendChild(
      LegalRepresentativeMunicipalityText
    );
    PermanentResidence.appendChild(LegalRepresentativeMunicipality);
    LegalRepresentativePostalCode.appendChild(
      LegalRepresentativePostalCodeText
    );
    PermanentResidence.appendChild(LegalRepresentativePostalCode);
    LegalRepresentative.appendChild(PermanentResidence);
    Applicant.appendChild(LegalRepresentative);
  }

  if (state.representative.boolean) {
    var Representative = doc.createElement("Representative");

    var RepresentativeGiveName = doc.createElement("RepresentativeGiveName");
    var RepresentativeGiveNameText = doc.createTextNode(
      state.representative.GiveName
    );
    var RepresentativeFamilyName = doc.createElement(
      "RepresentativeFamilyName"
    );
    var RepresentativeFamilyNameText = doc.createTextNode(
      state.representative.FamilyName
    );
    var RepresentativeDateOfBirth = doc.createElement(
      "RepresentativeDateOfBirth"
    );
    var RepresentativeDateOfBirthText = doc.createTextNode(
      state.representative.DateOfBirth
    );

    var PermanentResidence = doc.createElement("PermanentResidence");
    var RepresentativeStreetName = doc.createElement("StreetName");
    var RepresentativeStreetNameText = doc.createTextNode(
      state.representative.StreetName
    );
    var RepresentativeBuildingNumber = doc.createElement("BuildingNumber");
    var RepresentativeBuildingNumberText = doc.createTextNode(
      state.representative.BuildingNumber
    );
    var RepresentativePropertyRegistrationNumber = doc.createElement(
      "PropertyRegistrationNumber"
    );
    var RepresentativePropertyRegistrationNumberText = doc.createTextNode(
      state.representative.PropertyRegistrationNumber
    );
    var RepresentativeMunicipality = doc.createElement("Municipality");
    var RepresentativeMunicipalityText = doc.createTextNode(
      state.representative.Municipality
    );
    var RepresentativePostalCode = doc.createElement("PostalCode");
    var RepresentativePostalCodeText = doc.createTextNode(
      state.representative.PostalCode
    );

    RepresentativeGiveName.appendChild(RepresentativeGiveNameText);
    Representative.appendChild(RepresentativeGiveName);
    RepresentativeFamilyName.appendChild(RepresentativeFamilyNameText);
    Representative.appendChild(RepresentativeFamilyName);
    RepresentativeDateOfBirth.appendChild(RepresentativeDateOfBirthText);
    Representative.appendChild(RepresentativeDateOfBirth);

    var RepresentativeTelephoneAddress = doc.createElement("TelephoneAddress");
    var RepresentativeNumber = doc.createElement("Number");
    var RepresentativeFormattedNumber = doc.createElement("FormattedNumber");
    var RepresentativeFormattedNumberText = doc.createTextNode(
      "+421" + state.representative.PhoneNumber
    );
    RepresentativeFormattedNumber.appendChild(
      RepresentativeFormattedNumberText
    );
    RepresentativeNumber.appendChild(RepresentativeFormattedNumber);
    RepresentativeTelephoneAddress.appendChild(RepresentativeNumber);
    Representative.appendChild(RepresentativeTelephoneAddress);

    var RepresentativeElectronicAddress =
      doc.createElement("ElectronicAddress");
    var RepresentativeInternetAddress = doc.createElement("InternetAddress");
    var RepresentativeInternetAddressText = doc.createTextNode(
      state.representative.Email
    );
    RepresentativeInternetAddress.appendChild(
      RepresentativeInternetAddressText
    );
    RepresentativeElectronicAddress.appendChild(RepresentativeInternetAddress);
    Representative.appendChild(RepresentativeElectronicAddress);

    RepresentativeStreetName.appendChild(RepresentativeStreetNameText);
    PermanentResidence.appendChild(RepresentativeStreetName);
    RepresentativePropertyRegistrationNumber.appendChild(
      RepresentativePropertyRegistrationNumberText
    );
    PermanentResidence.appendChild(RepresentativePropertyRegistrationNumber);
    RepresentativeBuildingNumber.appendChild(RepresentativeBuildingNumberText);
    PermanentResidence.appendChild(RepresentativeBuildingNumber);
    RepresentativeMunicipality.appendChild(RepresentativeMunicipalityText);
    PermanentResidence.appendChild(RepresentativeMunicipality);
    RepresentativePostalCode.appendChild(RepresentativePostalCodeText);
    PermanentResidence.appendChild(RepresentativePostalCode);
    Representative.appendChild(PermanentResidence);
    ApplicationCivil.appendChild(Representative);
  }

  var LegalCaseCPP = doc.createElement("LegalCaseCPP");
  var LegalCaseCPPText = doc.createTextNode(
    "Prrávna vec vyplnená zamestnancom CPP v internom portáli."
  );
  LegalCaseCPP.appendChild(LegalCaseCPPText);
  ApplicationCivil.appendChild(LegalCaseCPP);

  var LegalCase = doc.createElement("LegalCase");
  var LegalCaseText = doc.createTextNode(state.form.LegalCase);
  LegalCase.appendChild(LegalCaseText);
  ApplicationCivil.appendChild(LegalCase);

  var Counterparty = doc.createElement("Counterparty");
  var CounterpartyText = doc.createTextNode(state.form.Counterparty);
  Counterparty.appendChild(CounterpartyText);
  ApplicationCivil.appendChild(Counterparty);

  if (state.form.ClaimValue) {
    var ClaimValue = doc.createElement("ClaimValue");
    var ClaimValueText = doc.createTextNode(state.form.ClaimValue);
    ClaimValue.appendChild(ClaimValueText);
    ApplicationCivil.appendChild(ClaimValue);
  }

  var CantCalculateClaimValue = doc.createElement("CantCalculateClaimValue");
  if (state.form.ClaimValue) {
    var CantCalculateClaimValueText = doc.createTextNode(state.form.ClaimValue);
  } else {
    var CantCalculateClaimValueText = doc.createTextNode("false");
  }
  CantCalculateClaimValue.appendChild(CantCalculateClaimValueText);
  ApplicationCivil.appendChild(CantCalculateClaimValue);

  // C I.
  if (state.form.LegalAidType1) {
    var LegalAidType = doc.createElement("LegalAidType");
    var LegalAidTypeCode = doc.createElement("Code");
    var LegalAidTypeCodeText = doc.createTextNode("TPP01");
    var LegalAidTypeText = doc.createElement("Text");
    var LegalAidTypeTextText = doc.createTextNode("právne poradenstvo");
    LegalAidTypeCode.appendChild(LegalAidTypeCodeText);
    LegalAidType.appendChild(LegalAidTypeCode);
    LegalAidTypeText.appendChild(LegalAidTypeTextText);
    LegalAidType.appendChild(LegalAidTypeText);
    ApplicationCivil.appendChild(LegalAidType);
  }

  // C II.
  if (state.form.LegalAidType2) {
    var LegalAidType = doc.createElement("LegalAidType");
    var LegalAidTypeCode = doc.createElement("Code");
    var LegalAidTypeCodeText = doc.createTextNode("TPP02");
    var LegalAidTypeText = doc.createElement("Text");
    var LegalAidTypeTextText = doc.createTextNode(
      "mediácia (mimosúdne riešenie sporu dohodou)"
    );
    LegalAidTypeCode.appendChild(LegalAidTypeCodeText);
    LegalAidType.appendChild(LegalAidTypeCode);
    LegalAidTypeText.appendChild(LegalAidTypeTextText);
    LegalAidType.appendChild(LegalAidTypeText);
    ApplicationCivil.appendChild(LegalAidType);
  }

  // C III.
  if (state.form.LegalAidType3) {
    var LegalAidType = doc.createElement("LegalAidType");
    var LegalAidTypeCode = doc.createElement("Code");
    var LegalAidTypeCodeText = doc.createTextNode("TPP03");
    var LegalAidTypeText = doc.createElement("Text");
    var LegalAidTypeTextText = doc.createTextNode(
      "právna pomoc a zastupovanie v súdnom konaní vrátane jeho začatia"
    );
    LegalAidTypeCode.appendChild(LegalAidTypeCodeText);
    LegalAidType.appendChild(LegalAidTypeCode);
    LegalAidTypeText.appendChild(LegalAidTypeTextText);
    LegalAidType.appendChild(LegalAidTypeText);
    ApplicationCivil.appendChild(LegalAidType);
  }

  // C IV.
  if (state.form.LegalAidType4) {
    var LegalAidType = doc.createElement("LegalAidType");
    var LegalAidTypeCode = doc.createElement("Code");
    var LegalAidTypeCodeText = doc.createTextNode("TPP04");
    var LegalAidTypeText = doc.createElement("Text");
    var LegalAidTypeTextText = doc.createTextNode(
      "právna pomoc a zastupovanie v rámci už prebiehajúceho súdneho konania"
    );
    LegalAidTypeCode.appendChild(LegalAidTypeCodeText);
    LegalAidType.appendChild(LegalAidTypeCode);
    LegalAidTypeText.appendChild(LegalAidTypeTextText);
    LegalAidType.appendChild(LegalAidTypeText);
    ApplicationCivil.appendChild(LegalAidType);
    var ApplicationLegalProceedings = doc.createElement(
      "ApplicationLegalProceedings"
    );
    LegalAidType.appendChild(ApplicationLegalProceedings);

    var ApplicationLegalProceedingsCourtName = doc.createElement("CourtName");
    var ApplicationLegalProceedingsCourtNameText = doc.createTextNode(
      state.form.CourtName
    );
    ApplicationLegalProceedingsCourtName.appendChild(
      ApplicationLegalProceedingsCourtNameText
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsCourtName
    );

    var ApplicationLegalProceedingsReferenceNumber =
      doc.createElement("ReferenceNumber");
    var ApplicationLegalProceedingsReferenceNumberText = doc.createTextNode(
      state.form.ReferenceNumber
    );
    ApplicationLegalProceedingsReferenceNumber.appendChild(
      ApplicationLegalProceedingsReferenceNumberText
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsReferenceNumber
    );

    var ApplicationLegalProceedingsHearingDate =
      doc.createElement("HearingDate");
    var ApplicationLegalProceedingsHearingDateText = doc.createTextNode(
      state.form.HearingDate
    );
    ApplicationLegalProceedingsHearingDate.appendChild(
      ApplicationLegalProceedingsHearingDateText
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsHearingDate
    );

    var ApplicationLegalProceedingsComplainantRespondent = doc.createElement(
      "ComplainantRespondent"
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsComplainantRespondent
    );

    var ApplicationLegalProceedingsComplainantRespondentCode =
      doc.createElement("Code");
    if (state.form.ComplainantRespondent) {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode("ODPORCA");
    } else {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode("NAVRHOVATEL");
    }
    ApplicationLegalProceedingsComplainantRespondentCode.appendChild(
      ApplicationLegalProceedingsComplainantRespondentCodeText
    );
    ApplicationLegalProceedingsComplainantRespondent.appendChild(
      ApplicationLegalProceedingsComplainantRespondentCode
    );

    var ApplicationLegalProceedingsComplainantRespondentText =
      doc.createElement("Text");
    if (state.form.ComplainantRespondent) {
      var ApplicationLegalProceedingsComplainantRespondentCodeTextText =
        doc.createTextNode("Odporca");
    } else {
      var ApplicationLegalProceedingsComplainantRespondentCodeTextText =
        doc.createTextNode("Navrhovateľ");
    }
    ApplicationLegalProceedingsComplainantRespondentText.appendChild(
      ApplicationLegalProceedingsComplainantRespondentCodeTextText
    );
    ApplicationLegalProceedingsComplainantRespondent.appendChild(
      ApplicationLegalProceedingsComplainantRespondentText
    );
  }
  // C V.

  if (state.form.LegalAidType5) {
    var LegalAidType = doc.createElement("LegalAidType");
    var LegalAidTypeCode = doc.createElement("Code");
    var LegalAidTypeCodeText = doc.createTextNode("TPP05");
    var LegalAidTypeText = doc.createElement("Text");
    var LegalAidTypeTextText = doc.createTextNode(
      "právna pomoc a zastupovanie v rámci súdneho konania, ktoré sa týka už vystaveného súdneho rozhodnutia"
    );
    LegalAidTypeCode.appendChild(LegalAidTypeCodeText);
    LegalAidType.appendChild(LegalAidTypeCode);
    LegalAidTypeText.appendChild(LegalAidTypeTextText);
    LegalAidType.appendChild(LegalAidTypeText);
    ApplicationCivil.appendChild(LegalAidType);
    var ApplicationLegalProceedings = doc.createElement(
      "ApplicationLegalProceedings"
    );
    LegalAidType.appendChild(ApplicationLegalProceedings);

    var ApplicationLegalProceedingsCourtName = doc.createElement("CourtName");
    var ApplicationLegalProceedingsCourtNameText = doc.createTextNode(
      state.form.CourtName5
    );
    ApplicationLegalProceedingsCourtName.appendChild(
      ApplicationLegalProceedingsCourtNameText
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsCourtName
    );

    var ApplicationLegalProceedingsReferenceNumber =
      doc.createElement("ReferenceNumber");
    var ApplicationLegalProceedingsReferenceNumberText = doc.createTextNode(
      state.form.ReferenceNumber5
    );
    ApplicationLegalProceedingsReferenceNumber.appendChild(
      ApplicationLegalProceedingsReferenceNumberText
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsReferenceNumber
    );

    var ApplicationLegalProceedingsCaseNature = doc.createElement("CaseNature");
    var ApplicationLegalProceedingsCaseNatureCode = doc.createElement("Code");
    var ApplicationLegalProceedingsCaseNatureCodeText = doc.createTextNode(
      state.form.CaseNatureCode
    );
    ApplicationLegalProceedingsCaseNature.appendChild(
      ApplicationLegalProceedingsCaseNatureCodeText
    );
    ApplicationLegalProceedingsCaseNature.appendChild(
      ApplicationLegalProceedingsCaseNatureCode
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsCaseNature
    );

    if (state.form.JudicalDecisionDate) {
      var ApplicationLegalProceedingsJudicalDecisionDate = doc.createElement(
        "JudicalDecisionDate"
      );
      var ApplicationLegalProceedingsReferenceJudicalDecisionDateText =
        doc.createTextNode(state.form.JudicalDecisionDate);
      ApplicationLegalProceedingsJudicalDecisionDate.appendChild(
        ApplicationLegalProceedingsReferenceJudicalDecisionDateText
      );
      ApplicationLegalProceedings.appendChild(
        ApplicationLegalProceedingsJudicalDecisionDate
      );
    }

    var ApplicationLegalProceedingsComplainantRespondent = doc.createElement(
      "ComplainantRespondent"
    );
    ApplicationLegalProceedings.appendChild(
      ApplicationLegalProceedingsComplainantRespondent
    );

    var ApplicationLegalProceedingsComplainantRespondentCode =
      doc.createElement("Code");
    var ApplicationLegalProceedingsComplainantRespondentText =
      doc.createElement("Text");
    if (state.form.ComplainantRespondent === "NAVRHOVATEL") {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode(state.form.ComplainantRespondent);
      var ApplicationLegalProceedingsComplainantRespondentTextText =
        doc.createTextNode("Navrhovateľ");
    }
    if (state.form.ComplainantRespondent === "ODPORCA") {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode(state.form.ComplainantRespondent);
      var ApplicationLegalProceedingsComplainantRespondentTextText =
        doc.createTextNode("Odporca");
    }
    if (state.form.ComplainantRespondent === "OPRAVNENY") {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode(state.form.ComplainantRespondent);
      var ApplicationLegalProceedingsComplainantRespondentTextText =
        doc.createTextNode("Oprávnený");
    }
    if (state.form.ComplainantRespondent === "POVINNY") {
      var ApplicationLegalProceedingsComplainantRespondentCodeText =
        doc.createTextNode(state.form.ComplainantRespondent);
      var ApplicationLegalProceedingsComplainantRespondentTextText =
        doc.createTextNode("Povinný");
    }
    ApplicationLegalProceedingsComplainantRespondentText.appendChild(
      ApplicationLegalProceedingsComplainantRespondentTextText
    );
    ApplicationLegalProceedingsComplainantRespondentCode.appendChild(
      ApplicationLegalProceedingsComplainantRespondentCodeText
    );
    ApplicationLegalProceedingsComplainantRespondent.appendChild(
      ApplicationLegalProceedingsComplainantRespondentCode
    );
    ApplicationLegalProceedingsComplainantRespondent.appendChild(
      ApplicationLegalProceedingsComplainantRespondentText
    );
  }


   // ApplicationFamilySituation
   if (state.family.GivenName) {
    var ApplicationFamilySituation = doc.createElement('ApplicationFamilySituation');
    var TypeOfPerson = doc.createElement('TypeOfPerson');

    if (state.family.Person == 'MANZEL') {
        var FamilyTypeOfPersonCodeCode = doc.createTextNode(state.family.Person);
        var FamilyTypeOfPersonTextText = doc.createTextNode('Manžel/ka');
    }

    if (state.family.Person == 'DRUH') {
        var FamilyTypeOfPersonCodeCode = doc.createTextNode(state.family.Person);
        var FamilyTypeOfPersonTextText = doc.createTextNode('Druh/družka');
    }

    if (state.family.Person == 'ZAK_ZAST') {
        var FamilyTypeOfPersonCodeCode = doc.createTextNode(state.family.Person);
        var FamilyTypeOfPersonTextText = doc.createTextNode('zákonný zástupca');
    }

    if (state.family.Person == 'INA_FO') {
        var FamilyTypeOfPersonCodeCode = doc.createTextNode(state.family.Person);
        var FamilyTypeOfPersonTextText = doc.createTextNode('iná fyzická osoba, ktorá poberá na dieťa príjem');
    }

    var TypeOfPerson = doc.createElement('TypeOfPerson');
    ApplicationFamilySituation.appendChild(TypeOfPerson);

    var Code = doc.createElement('Code');
    var Text = doc.createElement('Text');
    TypeOfPerson.appendChild(Code);
    TypeOfPerson.appendChild(Text);

    Code.appendChild(FamilyTypeOfPersonCodeCode);
    Text.appendChild(FamilyTypeOfPersonTextText);

    var GivenName = doc.createElement('GivenName');
    var FamilyName = doc.createElement('FamilyName');
    var DateOfBirth = doc.createElement('DateOfBirth');

    ApplicationFamilySituation.appendChild(TypeOfPerson);

    ApplicationFamilySituation.appendChild(GivenName);
    ApplicationFamilySituation.appendChild(FamilyName);
    ApplicationFamilySituation.appendChild(DateOfBirth);
    ApplicationCivil.appendChild(ApplicationFamilySituation);

    var GivenNameText = doc.createTextNode(state.family.GivenName);
    var FamilyNameText = doc.createTextNode(state.family.FamilyName);
    var DateOfBirthText = doc.createTextNode(state.family.DateOfBirth);
    GivenName.appendChild(GivenNameText);
    FamilyName.appendChild(FamilyNameText);
    DateOfBirth.appendChild(DateOfBirthText);
}
// ApplicationFamilySituation



  // -------- End of XML ----------

  var AdditionalInfo = doc.createElement("AdditionalInfo");
  var AdditionalInfoText = doc.createTextNode(state.form.AdditionalInfo);
  AdditionalInfo.appendChild(AdditionalInfoText);
  ApplicationCivil.appendChild(AdditionalInfo);

  var CompletionPlace = doc.createElement("CompletionPlace");
  var CompletionPlaceText = doc.createTextNode(state.form.CompletionPlace);
  CompletionPlace.appendChild(CompletionPlaceText);
  ApplicationCivil.appendChild(CompletionPlace);

  var CompletionDate = doc.createElement("CompletionDate");
  var CompletionDateText = doc.createTextNode(state.form.CompletionDate);
  CompletionDate.appendChild(CompletionDateText);
  ApplicationCivil.appendChild(CompletionDate);

  doc.appendChild(ApplicationCivil);

  var serializer = new XMLSerializer();
  var xmlString = serializer.serializeToString(doc);

  navigator.clipboard.writeText(xmlString);
  // alert(xmlString);
  alert("Xml has been copyied. Use Ctrv + V");
}
