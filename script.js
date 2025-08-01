// CGPA Calculator
function calculateCGPA() {
  const inputs = document.querySelectorAll('.gpa-input');
  let total = 0, count = 0;

  inputs.forEach(input => {
    let val = parseFloat(input.value);
    if (!isNaN(val)) {
      total += val;
      count++;
    }
  });

  const cgpa = count ? (total / count).toFixed(2) : 'Invalid input';
  document.getElementById('result').innerText = `CGPA: ${cgpa}`;
}

// To-Do List
function addTask() {
  const taskValue = document.getElementById('task').value;
  if (taskValue === '') return;

  const li = document.createElement('li');
  li.textContent = taskValue;
  li.onclick = () => li.remove(); // Click to delete
  document.getElementById('task-list').appendChild(li);
  document.getElementById('task').value = '';
}
