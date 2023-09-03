<template>
  <div class="tasks-container">
    <div class="add-task">
      <div class="task-input">
        <input
          type="text"
          placeholder="Type your task here..."
          v-model="task"
        />
        <br />
        <button @click="addTask">ADD TASK</button>
      </div>
      <div class="tasks">
        <div v-for="task in tasks" :key="task.id" class="task" :class="{ 'done': task.completed }">
          <div>
            <p>{{ task.name }}</p>
            <span>Criado em {{ task.created }}</span>
          </div>
          <div class="actions">
            <button @click="editTask(task)">
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button @click="taskDone(task)">
              <span class="material-symbols-outlined"> check_circle </span>
            </button>
            <button @click="deleteTask(task)">
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="editTaskModal" class="taskModal">
        <div class="modal">
            <input type="text" v-model="editingTask.name"/>
            <button @click="updateTask">Update Task</button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const formatDate = (timestamp) => {
  const data = new Date(timestamp);

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const horas = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
};

const task = ref("");
const tasks = ref([]);
const editTaskModal = ref(false);
const editingTask = ref(null);
let nextTaskId = JSON.parse(localStorage.getItem("nextTaskId")) || 1;

function addTask() {
  const newTask = {
    id: nextTaskId++,
    name: task.value,
    completed: false,
    created: formatDate(Date.now()),
  };
  tasks.value.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks.value));
  localStorage.setItem("nextTaskId", nextTaskId);
  task.value = "";
}

onMounted(() => {
    tasks.value = JSON.parse(localStorage.getItem("tasks"));;
})

function editTask(task) {
  editingTask.value = { ...task };
  editTaskModal.value = true;
}

function updateTask() {
  const index = tasks.value.findIndex((t) => t.id === editingTask.value.id);
  if (index !== -1) {
    tasks.value[index].name = editingTask.value.name;
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
    editingTask.value = null;
    editTaskModal.value = false;
  }
}

function taskDone(task) {
    const index = tasks.value.findIndex((t) => t.id === task.id);
    tasks.value[index].completed = !tasks.value[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

function deleteTask(task) {
    const index = tasks.value.findIndex((t) => t.id === task.id);
    tasks.value.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
}
</script>

<style scoped>
.tasks-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-task {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
}

.add-task input {
  width: 80%;
  padding: 25px;
  background: transparent;
  border: 1px solid rgb(255, 63, 63);
  border-radius: 6px;
}

.task-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-input button {
  padding: 15px 30px;
  background: rgb(255, 63, 63);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 2px;
}

.tasks {
  width: 80%;
  margin-top: 25px;
}

.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 8px;
}

.task p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 30px;
}
.task span {
  color: gray;
}

.actions button {
  background: transparent;
  border: none;
  margin-left: 5px;
}

.actions button span {
  font-size: 30px;
  color: gray;
}

.taskModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  max-width: 500px;
  text-align: center;
  position: relative;
  animation: modalFadeIn ease 0.3s;
}

.modal button {
  padding: 15px 30px;
  background: rgb(255, 63, 63);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 2px;
}

.modal input {
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid gray;
  border-radius: 6px;
}

.done {
    color: gray;
    text-decoration: line-through;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>