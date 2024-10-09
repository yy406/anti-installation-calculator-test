// タブを開く関数
function openTab(evt, tabName) {
    // 全てのタブの内容を非表示にする
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 全てのタブボタンから"active"クラスを外す
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 選択したタブを表示し、ボタンを"active"にする
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 初期状態で最初のタブを開く
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});

// JSONデータを処理する関数
function processJson() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const jsonData = JSON.parse(jsonInput);  // JSONとしてパース
        console.log("入力されたJSON:", jsonData);  // JSONデータをコンソールに表示（後で処理を追加）
        alert("データが正常に処理されました");
    } catch (error) {
        alert("JSONの形式が正しくありません。エラー: " + error.message);
    }
}

// JSONデータを処理して表を生成する関数
function processJson() {
    const jsonInput = document.getElementById('jsonInput').value;
    let jsonData;

    try {
        // JSON文字列をオブジェクトに変換
        jsonData = JSON.parse(jsonInput);
    } catch (error) {
        alert("JSONの形式が正しくありません。エラー: " + error.message);
        return;
    }

    // api_slotitem_idが200以下のデータだけをフィルタリング
    const filteredData = jsonData.filter(item => item.api_slotitem_id <= 200);

    // 表の生成
    let table = "<table><tr><th>SlotItem ID</th><th>Level</th></tr>";

    // フィルタリングされたデータから表の行を生成
    filteredData.forEach((item) => {
        table += "<tr>";
        table += `<td>${item.api_slotitem_id}</td>`;
        table += `<td>${item.api_level}</td>`;
        table += "</tr>";
    });

    table += "</table>";

    // 表を表示するdivに挿入
    document.getElementById('outputTable').innerHTML = table;
}
