const notes = [
    {
        id: 1,
        subject: "objects in javascript",
        date: "05/26/2021",
        feeling: "hungry",
        timeSpent: " 10 mins"
    },
    {
        id: 2,
        subject: "CSS",
        date: "05/23/2021",
        feeling: "interested",
        timeSpint: "1000 mins"
    }
]

for (const note of notes) {
    console.log(`ID ${note.id} 
    Subject is ${note.subject}
    Date learned: ${note.date}
    It made me feel ${note.feeling}
    I spent ${note.timeSpint} on it
    ------------------------------`)
}