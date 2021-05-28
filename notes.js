const notes = [
    {
        id: 1,
        subject: "objects in javascript",
        date: "05/26/2021",
        feeling: "hungry",
        timeSpent: 10
    },
    {
        id: 2,
        subject: "CSS",
        date: "05/23/2021",
        feeling: "interested",
        timeSpent: 1000
    }
]

const createNote = (note) => {
        const lastIndex = notes.length - 1
        const currentLastNote = notes[lastIndex]
        const maxId = currentLastNote.id
        const idForNewNote = maxId + 1
    
        note.id = idForNewNote
        notes.push(note)   
}

let today = new Date()
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

const moreNewerNote = {
    subject: "Date display",
    feeling: "hungry",
    timeSpent: 20
}

createNote(moreNewerNote)

const searchTerm = "hungry"

for (const note of notes) {
    if (searchTerm === note.feeling) {
    console.log(`ID ${note.id} 
    Subject is ${note.subject}
    Date learned: ${note.date}
    It made me feel ${note.feeling}
    I spent ${note.timeSpent} minutes on it
    ------------------------------`)
    }
}