module.exports = {
  someSidebar: ["audience",{"type":"category","label":"Configuration","items":[{"type":"category","label":"General","items":["general/versioning"]},"roles","users","pages","entities","sql-console",{"type":"category","label":"Workflows","items":["workflows/overview","workflows/execution-context"]},{"type":"category","label":"Tokens","items":["tokens/overview"]}]},{"type":"category","label":"Actions","items":["faq","actions/running-examples","actions/common-parameters",{"type":"category","label":"Authorize Net","items":["actions/add-a-simple-checkout-to-a-button","actions/create-subscription","actions/make-a-payment-with-credit-card","actions/make-a-payment-with-electronic-check","actions/refund-a-transaction","actions/update-subscription"]},{"type":"category","label":"Bluefin","items":[]},{"type":"category","label":"Code","items":["actions/apply-tokens","actions/execute-javascript-server","actions/execute-javascript-code-and-continue-execution","actions/execute-javascript-code-and-stop-execution","actions/execute-razor","actions/execute-token"]},{"type":"category","label":"Communications","items":["actions/send-sms-via-clickatell-gateway"]},{"type":"category","label":"Context","items":["actions/change-user","actions/inject-data","actions/load-entry-by-id","actions/load-entry-by-user-id","actions/load-user","actions/load-users-from-sql"]},{"type":"category","label":"Credential Store","items":["actions/add-fedex-credential","actions/add-github-credential","actions/add-group","actions/add-hashapi-tierion-credential","actions/add-pushwoosh-credential","actions/add-stripe-credential","actions/add-uipath-credential","actions/delete-credential","actions/dynamics-crm-test-credential","actions/find-group","actions/get-credential","actions/get-user-credential","actions/github-test-credential","actions/test-imap-credentials","actions/test-slack-webhook","actions/uipath-test-credential","actions/update-fedex-credential","actions/update-github-credential","actions/update-hashapi-tierion-credential","actions/update-pushwoosh-credential","actions/update-stripe-credential","actions/update-uipath-credential"]},{"type":"category","label":"Data","items":["actions/clear-cache-item","actions/import-into-database-entity","actions/repost-data","actions/run-sql-query","actions/save-report-in-the-database","actions/server-request","actions/update-form-data-ajax"]},{"type":"category","label":"Datasource","items":["actions/datasource-add","actions/datasource-delete","actions/datasource-detail-view","actions/datasource-edit","actions/datasource-inline-add","actions/datasource-inline-edit","actions/datasource-refresh","actions/datasource-view","actions/get-data-query"]},{"type":"category","label":"Debug","items":["actions/log-debug-info","actions/log-error","actions/log-job-context"]},{"type":"category","label":"Dnn","items":["actions/copy-file","actions/delete-file","actions/delete-folder"]},{"type":"category","label":"DNN Sharp","items":["actions/advanced-search","actions/execute-javascript-code","actions/load-static-files","actions/open-file-manager","actions/refresh-action-grid","actions/reindex-search-boost-content"]},{"type":"category","label":"Documents","items":["actions/convert-from-html-to-word","actions/generate-pdf","actions/get-sheet-names-from-excel-file-xlsx","actions/merge-pdf","actions/overlay-pdf","actions/replace-tokens-in-word-document","actions/save-file-to-disk"]},{"type":"category","label":"Drawing","items":["actions/create-thumbnail"]},{"type":"category","label":"Dynamic Fields","items":["actions/add-tags-input","actions/add-checkbox-true-false","actions/add-date-and-time-deprecated","actions/add-date-time-picker","actions/add-dropdown-with-autocomplete","actions/add-dropdown-with-checkboxes","actions/add-hidden-field-with-custom-value","actions/add-large-text","actions/add-multiple-choice-with-checkboxes","actions/add-multiple-choice-with-dropdown","actions/add-multiple-choice-with-radio-buttons","actions/add-number-input","actions/add-slider","actions/add-statictext","actions/add-textbox","actions/load-dynamic-field-from-json"]},{"type":"category","label":"Dynamics CRM 365","items":["actions/create-entity","actions/delete-entity","actions/find-entity","actions/read-entity","actions/read-multiple-entities","actions/update-entity"]},{"type":"category","label":"Email","items":["actions/neverbounce-email-verification","actions/send-email","actions/setup-neverbounce-email-verification","actions/subscribe-to-campaign-monitor","actions/subscribe-to-constant-contact","actions/subscribe-to-mailchimp","actions/unsubscribe-from-campaign-monitor","actions/unsubscribe-from-constant-contact","actions/update-mailchimp-member"]},{"type":"category","label":"File Management","items":["actions/alter-folder-permissions","actions/convert-from-html-to-word","actions/copy-file","actions/delete-file","actions/delete-folder","actions/get-archive-file-names","actions/get-or-create-folder","actions/move-folder","actions/pack-folder","actions/rename-file","actions/rename-folder","actions/replace-tokens-in-word-document","actions/save-file-to-disk","actions/unpack-an-archive","actions/upload-to-ftp"]},{"type":"category","label":"Flow","items":["actions/execute-actions-asynchronously","actions/execute-actions","actions/repeat","actions/stop-execution"]},{"type":"category","label":"Form State","items":["actions/auto-save-state","actions/clear-state","actions/load-state","actions/save-state"]},{"type":"category","label":"Google API","items":["actions/get-google-authorization-bearer-token"]},{"type":"category","label":"Guide","items":["actions/finish-guide","actions/go-to-step","actions/next-step","actions/previous-step"]},{"type":"category","label":"Image","items":["actions/generate-barcode"]},{"type":"category","label":"Lists Objects","items":["actions/add-list-entry","actions/create-list-from-a-csv-source","actions/create-list-from-csv-file-obsolete","actions/create-list-from-excel-xlsx","actions/create-list-from-json","actions/create-list-from-sql","actions/create-object","actions/execute-actions-for-each-list-entry","actions/extend-list-properties","actions/extend-object-properties","actions/paginate-list","actions/remap-list","actions/remove-list-entries","actions/sort-list"]},{"type":"category","label":"Logging","items":["actions/log-debug-message","actions/log-error","actions/log-event","actions/log-job-context"]},{"type":"category","label":"Marketing","items":["actions/consume-email-queue","actions/send-email-with-subject-a-b-testing","actions/send-tracked-email"]},{"type":"category","label":"Message","items":["actions/display-error-message","actions/display-message","actions/display-toast-message-and-continue-execution","actions/display-toast-message-and-stop-execution","actions/send-dnn-message","actions/send-plain-text-as-file-download"]},{"type":"category","label":"Output","items":["actions/download-file","actions/file-response","actions/json-entity-list","actions/json-entity","actions/json-object","actions/raw-response"]},{"type":"category","label":"Parsing","items":["actions/create-json-object","actions/parse-json-into-tokens","actions/parse-xml-into-json-tokens","actions/regex-multiple-results","actions/regex-replace","actions/regex","actions/sanitize-html"]},{"type":"category","label":"Payments","items":["actions/cancel-express-checkout-subscription","actions/get-transaction-details","actions/paypal-express-checkout","actions/paypal-parse-ipn-request"]},{"type":"category","label":"Portal Management","items":["actions/add-existing-module","actions/add-module","actions/create-page","actions/create-portal","actions/delete-module-hard","actions/delete-module-soft","actions/delete-page-hard","actions/delete-page-soft","actions/delete-portal","actions/export-module-content","actions/import-module-content","actions/load-html-module","actions/load-module","actions/load-page","actions/load-portal","actions/update-html-module","actions/update-module","actions/update-page","actions/update-portal"]},{"type":"category","label":"Redirect","items":["actions/redirect-to-portal-page","actions/redirect-to-url","actions/send-file-for-download"]},{"type":"category","label":"Role","items":["actions/create-role","actions/delete-role","actions/update-role"]},{"type":"category","label":"Salesforce","items":["actions/add-to-campaign-obsolete","actions/add-to-campaign","actions/create-an-salesforce-entity-obsolete","actions/create-an-salesforce-entity","actions/run-soql-query-obsolete","actions/run-soql-query"]},{"type":"category","label":"Security","items":["actions/aes-decrypt","actions/aes-encrypt","actions/credential-store-encrypt","actions/generate-rsa-keys","actions/rsa-decrypt","actions/rsa-encrypt","actions/verify-dkim-dns-record","actions/vies-vat-number-validator"]},{"type":"category","label":"Serialization","items":["actions/serialize-to-csv","actions/serialize-to-excel-from-entity-list-xslx","actions/serialize-to-excel-from-sql","actions/serialize-to-excel-from-text-xslx"]},{"type":"category","label":"Shell","items":["actions/run-powershell-script"]},{"type":"category","label":"Slack","items":["actions/send-slack-message"]},{"type":"category","label":"SQS Actions","items":["actions/delete-sqs-message","actions/get-sqs-messages"]},{"type":"category","label":"Stripe","items":["actions/get-stripe-user-account","actions/stripe-add-seller","actions/stripe-checkout","actions/stripe-create-customer","actions/stripe-create-plan","actions/stripe-create-subscription","actions/stripe-direct-payment-unsafe-obsolete","actions/stripe-get-event-details","actions/stripe-payment-through-the-platform-unsafe-obsolete","actions/stripe-payment-with-token-not-sca-compliant"]},{"type":"category","label":"Twilio","items":["actions/send-sms-using-twilio","actions/twilio-parse-webhook-sms","actions/twilio-send-response-to-sms-webhook"]},{"type":"category","label":"UI Actions","items":["actions/advanced-search","actions/browse-data-from-listing","actions/change-tab-and-continue-execution","actions/change-tab-and-stop-execution","actions/close-form-popup-and-continue-execution","actions/close-form-popup-and-stop-execution","actions/close-form-popup","actions/close-tabs-popup-and-continue-execution","actions/close-tabs-popup-and-stop-execution","actions/close-tabs-popup","actions/execute-javascript-code","actions/filter-listing","actions/initialize-form-and-continue-execution","actions/initialize-form-and-stop-execution","actions/load-static-files","actions/open-file-manager","actions/open-form-popup-and-continue-execution","actions/open-form-popup-and-stop-execution","actions/open-tabs-popup-and-continue-execution","actions/open-tabs-popup-and-stop-execution","actions/refresh-listing","actions/reindex-search-boost-content"]},{"type":"category","label":"UiPath","items":["actions/run-robot"]},{"type":"category","label":"User","items":["actions/authorize-user","actions/clear-user-cache","actions/delete-user","actions/grant-user-role","actions/revoke-user-role","actions/unauthorize-user","actions/update-user-profile-obsolete","actions/update-user-profile","actions/user-login","actions/user-registration-obsolete"]},{"type":"category","label":"User Management","items":["actions/create-auto-login-link","actions/send-user-reset-password-email","actions/sync-users","actions/unlock-user","actions/update-username","actions/user-login","actions/user-registration","actions/user-password-validation"]}]},{"type":"category","label":"Modules","items":[{"type":"category","label":"Important Notes","items":["modules/important-notes/dnn-compatibility","modules/important-notes/embed-form-or-grid"]}]},{"type":"category","label":"UI Compontents","items":[{"type":"category","label":"Form","items":["modules/important-notes/secure-input"]}]}]
 };