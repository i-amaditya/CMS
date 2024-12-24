function openBuilding(buildingName, attendanceLink, costingLink, invoiceLink, profitLink) {
    document.body.classList.remove('abc-building-1-bg');

    document.getElementById('building-list-section').style.display = 'none';
    document.getElementById('building-details-section').style.display = 'flex';
    document.getElementById('building-name').textContent = buildingName + ' Details';

    document.getElementById('link-attendance').href = attendanceLink;
    document.getElementById('link-costing').href = costingLink;
    document.getElementById('link-invoice').href = invoiceLink;
    document.getElementById('link-profit').href = profitLink;

    if (buildingName === 'ABC Building 1') {
        document.body.classList.add('abc-building-1-bg');
    }
}

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
