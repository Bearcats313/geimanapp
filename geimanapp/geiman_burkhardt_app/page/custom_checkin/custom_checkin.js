// Make sure this matches your new Page Name
frappe.pages['custom-checkin'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Custom HRMS Dashboard', // This can be whatever you want
        single_column: true
    });

    const iframe = document.createElement('iframe');
    iframe.src = '/assets/geimanapp/hrms-dashboard/dist/index.html';
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 120px)';
    iframe.style.border = 'none';

    page.body.appendChild(iframe);
}