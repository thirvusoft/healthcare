frappe.ui.form.on('Lab Test', {
    fetch: function(frm){
		frappe.call({
			method: 'health.health.custom.lab_test.xml_file_upload',
			args: { doc: frm.doc.upload },
			callback: function (r) {
				cur_frm.set_value("compound_test_result", r.message)
			}
		});
	}
	
});