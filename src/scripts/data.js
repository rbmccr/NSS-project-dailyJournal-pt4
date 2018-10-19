//fetches JSON data from local database and passes data into function
const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/journalEntries")
          .then(response => response.json())
  }
}

// Different syntax, same function:

// const API = {
//   getJournalEntries: function () {
//       return fetch("http://localhost:3000/entries")
//           .then(response => response.json())
//   }
// }