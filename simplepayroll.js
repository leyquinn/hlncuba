let employeeList = [
    { name: "Michelle Dee", hours: 40, rate: 15, deductions: 100 },
    { name: "Kianna Dy", hours: 35, rate: 20, deductions: 120 },
    { name: "Dwight Ramos", hours: 45, rate: 25, deductions: 150 },
    { name: "Jisoo Kim", hours: 30, rate: 18, deductions: 80 },
    { name: "Rosie Park", hours: 38, rate: 22, deductions: 120 }
];

function updateTable() {
    const table = document.querySelector('table');
    table.innerHTML = `
        <tr>
            <th>Employee Name</th>
            <th>Hours Worked</th>
            <th>Hourly Rate</th>
            <th>Total Earnings (₱)</th>
            <th>Deductions (₱)</th>
            <th>Net Income (₱)</th>
            <th>Action</th>
        </tr>
        ${employeeList.map((employee, index) => `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.hours}</td>
                <td>₱${employee.rate}</td>
                <td>₱${employee.hours * employee.rate}</td>
                <td>₱${employee.deductions}</td>
                <td>₱${(employee.hours * employee.rate) - employee.deductions}</td>
                <td><button onclick="deleteEmployee(${index})">Delete</button></td>
            </tr>
        `).join('')}
        <tr>
            <td><input type="text" id="inputName" placeholder="Employee Name"></td>
            <td><input type="number" id="inputHours" placeholder="Hours Worked"></td>
            <td><input type="number" id="inputRate" placeholder="Hourly Rate"></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button onclick="addEmployee()">Add Employee</button></td>
        </tr>
    `;
}

function addEmployee() {
    const inputName = document.getElementById('inputName').value;
    const inputHours = parseFloat(document.getElementById('inputHours').value);
    const inputRate = parseFloat(document.getElementById('inputRate').value);

    if (inputName && !isNaN(inputHours) && inputHours > 0 && !isNaN(inputRate) && inputRate > 0) {
        const newEmployee = {
            name: inputName,
            hours: inputHours,
            rate: input
