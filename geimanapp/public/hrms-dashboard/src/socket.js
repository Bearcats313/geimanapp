import { io } from "socket.io-client";

// The problematic import is removed.
// The frappe object is expected to be available globally (window.frappe)
// when this app is running inside the Frappe Desk.
const socket = io({
	withCredentials: true,
});

socket.on("connect", () => {
    // Attach the socket to the global frappe object if it exists.
	if (window.frappe) {
	    window.frappe.socket = socket;
    }
});

export default socket;
