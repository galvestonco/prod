{
	"EnvHealth/Personal Services/*/Permit": {
		"45 Day Notice": {
			"notificationTemplate": "SS_PERMIT_ABOUT_TO_EXPIRE",
			"notificationReport": false,
			"notifyContactTypes": "Accounts Receivable",
			"mailerSetType": "Renewal",
			"mailerSetStatus": "Closed",
			"mailerSetPrefix": "LIC_ABOUT_TO_EXPIRE",
			"updateExpirationStatus": "Pending",
			"updateRecordStatus": false,
			"updateWorkflowTask": false,
			"updateWorkflowStatus": false,
			"nextNotificationDays": 45,
			"nextNotification": "Expiration Notice",
			"invoiceOnNotification": true
		},
		"Expiration Notice": {
			"notificationTemplate": "SS_PERMIT_EXPIRATION_FIRST_NOTICE",
			"notificationReport": false,
			"notifyContactTypes": "Accounts Receivable",
			"mailerSetType": "Renewal",
			"mailerSetStatus": "Closed",
			"mailerSetPrefix": "1st EXPIRATION_NOTICE",
			"updateExpirationStatus": "Pending",
			"updateRecordStatus": "Active",
			"updateWorkflowTask": false,
			"updateWorkflowStatus": false,
			"nextNotificationDays": 30,
			"nextNotification": "2nd Expiration Notice",
			"inspectionType": false,
			"scheduleOutDays": false,
			"cancelAllInspections": false,
			"penalizeOnNtofication": true,
			"assessFees": [
				{
					"feeCode": "LATE FEE",
					"feeSchedule": "EH_PENALTIES",
					"feeQuantity": 1,
					"feeInvoice": "Y",
					"feePeriod": "Final"
				}
			]
		},
		"2nd Expiration Notice": {
			"notificationTemplate": "SS_PERMIT_EXPIRATION_SECOND_NOTICE",
			"notificationReport": false,
			"notifyContactTypes": "Accounts Receivable",
			"mailerSetType": "Renewal",
			"mailerSetStatus": "Closed",
			"mailerSetPrefix": "2nd EXPIRATION_NOTICE",
			"updateExpirationStatus": "Pending",
			"updateRecordStatus": "Active",
			"updateWorkflowTask": false,
			"updateWorkflowStatus": false,
			"nextNotificationDays": false,
			"nextNotification": "",
			"inspectionType": false,
			"scheduleOutDays": false,
			"cancelAllInspections": false,
			"penalizeOnNtofication": true,
			"assessFees": [
				{
					"feeCode": "SEC LATE FEE",
					"feeSchedule": "EH_PENALTIES",
					"feeQuantity": 1,
					"feeInvoice": "Y",
					"feePeriod": "Final"
				}
			]
		}
	}
}