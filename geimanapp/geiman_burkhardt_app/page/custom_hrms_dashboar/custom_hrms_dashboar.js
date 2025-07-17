frappe.pages['custom-hrms-dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Custom HRMS Dashboard',
		single_column: true
	});

    // Create an iframe to host the Vue app, isolating its styles and scripts.
    const iframe = document.createElement('iframe');
    
    // This path points to the 'index.html' inside the 'dist' folder you built.
    iframe.src = '/assets/geimanapp/hrms-dashboard/dist/index.html';
    
    // Basic styling for the iframe
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 120px)'; // Adjust height as needed
    iframe.style.border = 'none';

    // Add the iframe to the page body
    page.body.appendChild(iframe);
}






