document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bicycle-form');
    const tableBody = document.querySelector('#bicycle-table tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('bicycle-name').value;
        const type = document.getElementById('bicycle-type').value;
        const price = document.getElementById('bicycle-price').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${type}</td>
            <td>${price}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
        form.reset();
    });

    tableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            const row = event.target.closest('tr');
            row.remove();
        } else if (event.target.classList.contains('edit')) {
            const row = event.target.closest('tr');
            document.getElementById('bicycle-name').value = row.children[0].textContent;
            document.getElementById('bicycle-type').value = row.children[1].textContent;
            document.getElementById('bicycle-price').value = row.children[2].textContent;
            row.remove();
        }
    });
});
