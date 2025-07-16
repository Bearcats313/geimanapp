import { io } from "socket.io-client";
import { frappe } from "frappe-ui";

// The problematic import is removed.
// This simplified call tells socket.io to connect to the same server
// that served the page, which is correct for a Frappe environment.
const socket = io({
	withCredentials: true,
});

socket.on("connect", () => {
	frappe.socket = socket;
});

export default socket;
