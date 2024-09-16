export function generateRandomName() {
    const names = ['John Doe', 'Jane Smith', 'Automation Tester', 'Michael Johnson', 'Emily Davis'];
    return names[Math.floor(Math.random() * names.length)];
}

export function generateRandomCountry() {
    const countries = ['India', 'USA', 'Canada', 'Australia', 'UK'];
    return countries[Math.floor(Math.random() * countries.length)];
}


export function generateRandomCity() {
    const cities = ['Delhi', 'New York', 'Toronto', 'Sydney', 'London'];
    return cities[Math.floor(Math.random() * cities.length)];
}


export function generateRandomCardNumber() {
    return '4444 4444 4444 ' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
}


export function generateRandomMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[Math.floor(Math.random() * months.length)];
}

// Function to generate a random year (e.g., from the current year to 10 years in the future)
export function generateRandomYear() {
    const currentYear = new Date().getFullYear();
    const futureYear = currentYear + 10;
    return Math.floor(Math.random() * (futureYear - currentYear + 1)) + currentYear;
}
