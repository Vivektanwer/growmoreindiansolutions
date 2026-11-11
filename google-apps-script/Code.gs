// ============================================================
// GROW MORE INDIAN SOLUTIONS - Lead form backend (Google Apps Script)
// What this does when someone submits the website form:
//   1. Saves the lead in a Google Sheet
//   2. Sends the lead details to the owner's email
//   3. Sends a "Thank You" email to the person who filled the form
// ============================================================

// ----- SETTINGS (change these if needed) -----
var OWNER_EMAIL = "vivektanwer648@gmail.com";   // leads will be sent here
var COMPANY_NAME = "Grow More Indian Solutions";
var COMPANY_PHONE = "9540893256, 9818869969";
var COMPANY_EMAIL = "indiangrowmore@gmail.com";
var SHEET_NAME = "Leads";                        // tab name inside the Google Sheet

// This function runs when the website sends the form data
function doPost(e) {
  try {
    // 1. Read the data sent by the website
    var data = JSON.parse(e.postData.contents);

    // Spam trap: real visitors leave the hidden "website" field empty
    if (data.website) {
      return reply({ result: "ignored" });
    }

    // Clean the values (also stops people from sending HTML code)
    var name = clean(data.name);
    var phone = clean(data.phone);
    var email = clean(data.email);
    var company = clean(data.company);
    var requirement = clean(data.requirement);
    var message = clean(data.message);

    // Basic check
    if (!name || !phone || !email) {
      return reply({ result: "error", message: "Missing required fields" });
    }

    // 2. Save in Google Sheet
    saveToSheet([new Date(), name, phone, email, company, requirement, message]);

    // 3. Email to the owner
    sendOwnerEmail(name, phone, email, company, requirement, message);

    // 4. Thank You email to the customer
    sendThankYouEmail(name, email);

    return reply({ result: "success" });
  } catch (error) {
    return reply({ result: "error", message: String(error) });
  }
}

// Saves one row in the sheet (creates the sheet and headings if needed)
function saveToSheet(row) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  // Add heading row the first time
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Name", "Phone", "Email", "Company", "Requirement", "Message"]);
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#fecc2f");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow(row);
}

// Email that comes to you with the lead details
function sendOwnerEmail(name, phone, email, company, requirement, message) {
  var html =
    "<h2>New Lead from Website</h2>" +
    "<p><b>Name:</b> " + name + "</p>" +
    "<p><b>Phone:</b> " + phone + "</p>" +
    "<p><b>Email:</b> " + email + "</p>" +
    "<p><b>Company:</b> " + (company || "-") + "</p>" +
    "<p><b>Requirement:</b> " + requirement + "</p>" +
    "<p><b>Message:</b> " + (message || "-") + "</p>";

  MailApp.sendEmail({
    to: OWNER_EMAIL,
    subject: "New Lead: " + name + " (" + requirement + ")",
    htmlBody: html,
    replyTo: email,
    name: COMPANY_NAME + " Website"
  });
}

// "Thank You" email to the customer
function sendThankYouEmail(name, email) {
  var html =
    '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden">' +
      '<div style="background:#005f31;color:#ffffff;padding:24px;text-align:center">' +
        '<h2 style="margin:0">' + COMPANY_NAME + '</h2>' +
      '</div>' +
      '<div style="padding:24px;color:#14261a;line-height:1.6">' +
        '<h3>Thank you, ' + name + '!</h3>' +
        '<p>We have received your request. Our team will contact you very soon with details and rates.</p>' +
        '<p>For urgent needs, please call us on <b>' + COMPANY_PHONE + '</b>.</p>' +
        '<p>Regards,<br><b>' + COMPANY_NAME + '</b><br>' + COMPANY_EMAIL + '</p>' +
      '</div>' +
      '<div style="background:#fecc2f;height:8px"></div>' +
    '</div>';

  MailApp.sendEmail({
    to: email,
    subject: "Thank you for contacting " + COMPANY_NAME,
    htmlBody: html,
    replyTo: COMPANY_EMAIL,
    name: COMPANY_NAME
  });
}

// Removes HTML symbols and extra spaces from text
function clean(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .substring(0, 1000);
}

// Sends a small JSON answer back to the website
function reply(object) {
  return ContentService
    .createTextOutput(JSON.stringify(object))
    .setMimeType(ContentService.MimeType.JSON);
}
