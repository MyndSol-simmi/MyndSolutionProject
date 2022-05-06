// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mssql");
// Get request
app.get('/', function (req, res) {

	// Config your database credential
	const config = {
		user: 'pearluser',
		password: 'Simmi@123',
		server: 'localhost',
		database: 'PAYTM_TEST',
		trustServerCertificate: true,
	};

	// Connect to your database
	mssql.connect(config, function (err) {

		// Create Request object to perform
		// query operation
		var request = new mssql.Request();

		// Query to the database and get the records
		request.query("SELECT FieldID,FieldType, displayName, displayOrder ,IsRequired FROM MMM_MST_FIELDS FF With(nolock) where EID = 180 and IsActive = 1 and DocumentType='Purchase Requisition'  order by displayOrder",
			function (err, records) {

				if (err) console.log(err)
				response = records.recordset[0];
				res.send(records);
				
			});
	});
});

var server = app.listen(5000, function () {
	console.log('Server is listening at port 5000...');
});
