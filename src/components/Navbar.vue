<template>
  <header>
    <h3>Task Manager</h3>
    <div class="search">
      <input
        type="text"
        placeholder="Search Tasks..."
      />
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1l05muc"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="SearchIcon"
      >
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
    </div>
    <div class="filter">
      <label>All</label>
      <input type="radio" name="task-status" />
      <label>Completed</label>
      <input type="radio" name="task-status" />
      <label>Incomplete</label>
      <input type="radio" name="task-status" />
    </div>
  </header>
</template>

<script setup>
// import { ref } from "vue";

// const query = ref("");

// const emit = defineEmits(["query"]);
// function emitQuery() {
//   emit("query", query.value);
// }

</script>


<style scoped>
header {
  width: 100vw;
  height: 90px;
  background-color: rgb(255, 63, 63);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}

header h3 {
  color: white;
  font-size: 34px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

.search {
  display: flex;
  align-items: center;
}
.search input {
  width: 300px;
  padding: 20px;
  background: transparent;
  border: none;
}

.search input::placeholder {
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
}

.search input:focus {
  outline: none;
}

.search svg {
  color: black;
  width: 40px;
}

.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.filter label {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 25px;
  color: white;
}

.filter input {
  width: 20px;
  height: 20px;
}
</style>