import frappe

@frappe.whitelist()
def switch_theme(theme):
    # Add your custom theme names to this list
    if theme in:
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
    else:
        frappe.throw("Invalid Theme")
