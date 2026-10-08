const fs = require('fs');
const path = require('path');

const years = ["2021", "2022", "2023", "2024", "2025"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weeks = ["week1", "week2", "week3", "week4"];
const files = ["monday.css", "tues.html", "wed.js", "thur.txt", "fri.py", "sat.md", "sun.bat"];

years.forEach(year => {
    months.forEach(month => {
        weeks.forEach(week => {
            const dirPath = path.join(year, month, week);
            fs.mkdirSync(dirPath, { recursive: true });
            files.forEach(file => {
                fs.writeFileSync(path.join(dirPath, file), '');
            });
        });
    });
});

console.log("Folder structure created successfully!");