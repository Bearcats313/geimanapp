<script setup>
import { ref, onMounted } from "vue";
// The problematic 'import { frappe }' is removed.
import { Button } from "frappe-ui";

const props = defineProps(["employee"]);
const emit = defineEmits(["checkin"]);

const loading = ref(false);

function checkin(log_type) {
  loading.value = true;
  // MODIFICATION: Use window.frappe for API calls
  window.frappe.call({
    method: "hrms.hr.utils.check_in",
    args: {
      employee: props.employee.name,
      log_type: log_type,
      project: selectedProject.value
    },
    callback: (r) => {
      loading.value = false;
      if (!r.exc) {
        emit("checkin");
      }
    },
  });
}

const projects = ref([]);
const selectedProject = ref(null);

onMounted(() => {
  // MODIFICATION: Use window.frappe for API calls
  window.frappe.call({
    method: "frappe.client.get_list",
    args: {
      doctype: "Project",
      fields: ["name"],
      filters: {
        status: "Open"
      },
      limit: 100 // Fetch up to 100 open projects
    },
    callback: (r) => {
      if (r.message) {
        projects.value = r.message;
      }
    }
  });
});
</script>

<template>
	<div class="flex items-center justify-between p-4">
		<div class="flex items-center">
			<img :src="employee.image" class="w-12 h-12 mr-4 rounded-full" />
			<div>
				<p class="text-lg font-semibold text-gray-800">
					{{ employee.employee_name }}
				</p>
				<p class="text-sm text-gray-500">
					{{ employee.designation }}
				</p>
			</div>
		</div>
		<div class="flex flex-col items-end w-48">
			<div class="w-full mb-3">
				<label :for="'project-select-' + employee.name" class="sr-only">Project</label>
				<select :id="'project-select-' + employee.name" v-model="selectedProject" class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
					<option :value="null">Select Project (Optional)</option>
					<option v-for="project in projects" :key="project.name" :value="project.name">
						{{ project.name }}
					</option>
				</select>
			</div>
			<div class="flex space-x-2">
				<Button
					variant="solid"
					theme="gray"
					:loading="loading"
					@click="checkin('IN')"
				>
					Check In
				</Button>
				<Button
					variant="solid"
					theme="gray"
					:loading="loading"
					@click="checkin('OUT')"
				>
					Check Out
				</Button>
			</div>
		</div>
	</div>
</template>
