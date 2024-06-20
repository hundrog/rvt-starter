<script setup>
defineProps(['todos'])
</script>

<template>
	<h2 class="text-xl">Elements</h2>
	<div class="flex flex-col space-y-4 mx-24 mt-12">
		<div v-for="todo in todos" class="bg-gray-50 shadow-lg p-4 rounded-xl w-full max-w-xl h-32">
			{{ todo.name }} -> {{ todo.done }}
		</div>
	</div>
</template>
