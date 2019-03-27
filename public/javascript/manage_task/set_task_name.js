const setTaskName = () => {
    const taskName = `${document.querySelector('#group').value}${document.querySelector('#subGroup').value}_${document.querySelector('#keywords').value}_${document.querySelector('#frequency').value}`
    document.querySelector('#taskName').value = taskName;
}

document.querySelector('#group').addEventListener('change', () => setTaskName());
document.querySelector('#subGroup').addEventListener('change', () => setTaskName());
document.querySelector('#frequency').addEventListener('change', () => setTaskName());
document.querySelector('#keywords').addEventListener('input', () => setTaskName());