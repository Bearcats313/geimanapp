import frappe

@frappe.whitelist()
def switch_theme(theme):
    """
    Sets the user's desk theme in the database, but only if it's a valid,
    allowed theme name.
    """
    # This list contains all standard themes plus your custom one.
    # Replace 'my_awesome_theme' with the actual name from your CSS file.
    allowed_themes = ['Light', 'Dark', 'Automatic', 'clarity_custom_theme']

    if theme in allowed_themes:
        # 'desk_theme' is the correct field name for modern Frappe versions.
        frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)
    else:
        # This prevents saving invalid theme names to the database.
        frappe.throw("Invalid Theme")
