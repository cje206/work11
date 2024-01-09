let i = 1;

function send() {
  let writer = document.getElementById('writer');
  let content = document.getElementById('content');
  let tableText = document.getElementsByClassName('tableText')[0];
  let date = new Date();
  let nowTime = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  let index = document.createElement('td');
  let writtenName = document.createElement('td');
  let writtenText = document.createElement('td');
  let writtenTime = document.createElement('td');

  index.textContent = i++;
  writtenName.textContent = writer.value;
  writtenText.textContent = content.value;
  writtenTime.textContent = nowTime;

  let tableLine = document.createElement('tr');

  tableLine.append(index, writtenName, writtenText, writtenTime);
  console.log(tableLine);

  tableText.append(tableLine);
}

function writeFunc() {
  let writer = document.getElementById('writer').value;
  let content = document.getElementById('content').value;
  let tbody = document.getElementsByTagName('tbody')[0];
  console.log(writer, content);

  let tr = document.createElement('tr');
  let tdNum = document.createElement('td');
  tdNum = i++;
  let tdWriter = document.createElement('td');
  tdWriter.innerText = writer;
  let tdContent = document.createElement('td');
  tdContent.innerText = content;
  let tdDate = document.createElement('td');
  let now = new Date();
  tdDate.innerText = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
  console.log(tdDate);

  tr.append(tdNum, tdWriter, tdContent, tdDate);
  tbody.append(tr);
}
