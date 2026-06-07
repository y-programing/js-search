const students = [
  { id: 0001, name: "山田"},
  { id: 0002, name: "佐藤"},
  { id: 0003, name: "鈴木"}
];

const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchInput.addEventListener("keyup", (e) => {
  const studentId = Number(e.target.value);
  findStudent(studentId);
});

function findStudent(studentId) {
  const results = students.find((data) => data.id === studentId);
  console.log(results);

  if (results == undefined) {
    searchResult.textContent = "なし";
    return;
  }

  searchResult.textContent = results.name;
}