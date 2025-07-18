import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// MODIFICATION: Import the socket file directly to execute its code.
import "./socket";

import {
	FrappeUI,
	frappeRequest,
	//frappeEmitter,
	//setFrappeRouter,
} from "frappe-ui";
// MODIFICATION: Use the '@' alias for a more robust path.
import "./main.css";

const app = createApp(App);

app.use(router);
app.use(FrappeUI);

app.provide("$frappe", {
	request: frappeRequest,
	//emitter: frappeEmitter,
});

//setFrappeRouter(router);

app.mount("#app");
