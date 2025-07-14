app_name = "geimanapp"
app_title = "Geiman Burkhardt App"
app_publisher = "BJB"
app_description = "Main app for Geiman Burkhardt Electric"
app_email = "brennebn@gmail.com"
app_license = "mit"

app_include_css = "css/clarity_custom_theme.css"
app_include_js = "js/global_script.js"
app_include_js = "js/theme_switcher_override.js"

override_whitelisted_methods = {
    "frappe.core.doctype.user.user.switch_theme": "geimanapp.overrides.switch_theme"
}

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "geimanapp",
# 		"logo": "/assets/geimanapp/logo.png",
# 		"title": "Geiman Burkhardt App",
# 		"route": "/geimanapp",
# 		"has_permission": "geimanapp.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/geimanapp/css/geimanapp.css"
# app_include_js = "/assets/geimanapp/js/geimanapp.js"

# include js, css files in header of web template
# web_include_css = "/assets/geimanapp/css/geimanapp.css"
# web_include_js = "/assets/geimanapp/js/geimanapp.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "geimanapp/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "geimanapp/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "geimanapp.utils.jinja_methods",
# 	"filters": "geimanapp.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "geimanapp.install.before_install"
# after_install = "geimanapp.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "geimanapp.uninstall.before_uninstall"
# after_uninstall = "geimanapp.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "geimanapp.utils.before_app_install"
# after_app_install = "geimanapp.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "geimanapp.utils.before_app_uninstall"
# after_app_uninstall = "geimanapp.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "geimanapp.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"geimanapp.tasks.all"
# 	],
# 	"daily": [
# 		"geimanapp.tasks.daily"
# 	],
# 	"hourly": [
# 		"geimanapp.tasks.hourly"
# 	],
# 	"weekly": [
# 		"geimanapp.tasks.weekly"
# 	],
# 	"monthly": [
# 		"geimanapp.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "geimanapp.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "geimanapp.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "geimanapp.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["geimanapp.utils.before_request"]
# after_request = ["geimanapp.utils.after_request"]

# Job Events
# ----------
# before_job = ["geimanapp.utils.before_job"]
# after_job = ["geimanapp.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"geimanapp.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }
