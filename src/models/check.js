const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Check schema definition
const CheckSchema = new Schema(
	{
		checkId: { type: String, required: true },
		description: { type: String, default: null },
		metadata: { type: Schema.Types.Mixed, default: null },
		check_number: { type: Number, default: null },
		memo: { type: String, default: null },
		amount: { type: Number, default: null },
		url: { type: String, default: null },
		to: { type: Schema.Types.Mixed, default: null },
		from: { type: Schema.Types.Mixed, default: null },
		bank_account: { type: Schema.Types.Mixed, default: null },
		carrier: { type: String, default: null },
		tracking_number: { type: String, default: null },
		tracking_events: { type: Array, default: null },
		thumbnails: { type: Schema.Types.Mixed, default: null },
		merge_variables: { type: Schema.Types.Mixed, default: null },
		expected_delivery_date:  { type: Date, default: null },
		mail_type: { type: String, default: null },
		date_created:  { type: Date, default: null },
		date_modified: { type: Date, default: null },
		send_date: { type: Date, default: null },
		object: { type: String, default: null },
	},
	{ timestamps: true }
);

// Exports the CheckSchema for use elsewhere.
module.exports = mongoose.model("Check", CheckSchema);