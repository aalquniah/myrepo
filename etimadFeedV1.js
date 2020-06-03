(function () {
var myConnector = tableau.makeConnector();
myConnector.getSchema = function (schemaCallback) {
var cols = [{
id: "tenderId",
dataType: tableau.dataTypeEnum.float
},{
id: "referenceNumber",
alias: "Reference Number",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderName",
alias: "Tender Name",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderNumber",
alias: "Tender Number",
dataType: tableau.dataTypeEnum.string
},{
id: "agencyCode",
alias: "Agency Code",
dataType: tableau.dataTypeEnum.string
},{
id: "branchId",
alias: "Branch ID",
dataType: tableau.dataTypeEnum.float
},{
id: "branchName",
alias: "Branch Name",
dataType: tableau.dataTypeEnum.string
},{
id: "agencyName",
alias: "Agency Name",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderIdString",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderStatusId",
dataType: tableau.dataTypeEnum.float
},{
id: "tenderStatusIdString",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderStatusName",
dataType: tableau.dataTypeEnum.string
},{
id: "tenderTypeId",
dataType: tableau.dataTypeEnum.float
},{
id: "tenderTypeName",
dataType: tableau.dataTypeEnum.string
},{
id: "technicalOrganizationId",
dataType: tableau.dataTypeEnum.float
},{
id: "conditionalBookletPrice",
alias: "Conditional Booklet Price",
dataType: tableau.dataTypeEnum.float
},{
id: "createdAt",
dataType: tableau.dataTypeEnum.string
},{
id: "lastEnqueriesDate",
alias: "Last Enqueries Date",
dataType: tableau.dataTypeEnum.string
},{
id: "lastOfferPresentationDate",
alias: "Last Offer Presentation Date",
dataType: tableau.dataTypeEnum.string
},{
id: "offersOpeningDate",
alias: "Offers Opening Date",
dataType: tableau.dataTypeEnum.string
},{
id: "lastEnqueriesDateHijri",
alias: "Last Enqueries Date Hijri",
dataType: tableau.dataTypeEnum.string
},{
id: "offersOpeningDateHijri",
alias: "Offers Opening Date Hijri",
dataType: tableau.dataTypeEnum.string
},{
id: "lastOfferPresentationDateHijri",
alias: "Last Offer Presentation Date Hijri",
dataType: tableau.dataTypeEnum.string
},{
id: "insideKSA",
alias: "Inside KSA",
dataType: tableau.dataTypeEnum.bool
},{
id: "tenderActivityName",
alias: "Tender Activity Name",
dataType: tableau.dataTypeEnum.string
},{
id: "submitionDate",
alias: "Submition Date",
dataType: tableau.dataTypeEnum.string
},{
id: "financialFees",
alias: "Financial Fees",
dataType: tableau.dataTypeEnum.float
},{
id: "remainingDays",
alias: "Remaining Days",
dataType: tableau.dataTypeEnum.float
},{
id: "remainingHours",
alias: "Remaining Hours",
dataType: tableau.dataTypeEnum.float
},{
id: "remainingMins",
alias: "Remaining Minutes",
dataType: tableau.dataTypeEnum.float
},{
id: "currentDate",
alias: "Current Date",
dataType: tableau.dataTypeEnum.string
},{
id: "currentDateTime",
alias: "Current DateTime",
dataType: tableau.dataTypeEnum.string
}];
var tableSchema = {
id: "etimad",
alias: "Etimad Tenders Feed",
columns: cols
};
schemaCallback([tableSchema]);
};
myConnector.getData = function(table, doneCallback) {
$.getJSON("https://tenders.etimad.sa/Tender/AllSupplierTendersForVisitorAsync?pageSize=1000", function(resp) {
var feat = resp.data,
tableData = [];
// Iterate over the JSON object
for (var i = 0, len = 10; i < len; i++) {
tableData.push({
"tenderId": feat[i].tenderId,
"referenceNumber": feat[i].referenceNumber,
"tenderName": feat[i].tenderName,
"tenderNumber": feat[i].tenderNumber,
"agencyCode": feat[i].agencyCode,
"branchId": feat[i].branchId,
"branchName": feat[i].branchName,
"agencyName": feat[i].agencyName,
"tenderIdString": feat[i].tenderIdString,
"tenderStatusId": feat[i].tenderStatusId,
"tenderStatusIdString": feat[i].tenderStatusIdString,
"tenderStatusName": feat[i].tenderStatusName,
"tenderTypeId": feat[i].tenderTypeId,
"tenderTypeName": feat[i].tenderTypeName,
"technicalOrganizationId": feat[i].technicalOrganizationId,
"condetionalBookletPrice": feat[i].condetionalBookletPrice,
"createdAt": feat[i].createdAt,
"lastEnqueriesDate": feat[i].lastEnqueriesDate,
"lastOfferPresentationDate": feat[i].lastOfferPresentationDate,
"offersOpeningDate": feat[i].offersOpeningDate,
"lastEnqueriesDateHijri": feat[i].lastEnqueriesDateHijri,
"offersOpeningDateHijri": feat[i].offersOpeningDateHijri,
"lastOfferPresentationDateHijri": feat[i].lastOfferPresentationDateHijri,
"insideKSA": feat[i].insideKSA,
"tenderActivityName": feat[i].tenderActivityName,
"submitionDate": feat[i].submitionDate,
"financialFees": feat[i].financialFees,
"remainingDays": feat[i].remainingDays,
"remainingHours": feat[i].remainingHours,
"remainingMins": feat[i].remainingMins,
"currentDate": feat[i].currentDate,
"currentDateTime": feat[i].currentDateTime
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function() {
$("#submitButton").click(function() {
tableau.connectionName = "etimad";
tableau.submit();
});
});
})();