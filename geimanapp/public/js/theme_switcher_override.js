// In public/js/theme_switcher_override.js
frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    fetch_themes() {
        return new Promise((resolve) => {
            this.themes =;
            resolve(this.themes);
        });
    }
}
