// スタイルシートリンクを取得
var styleSheetLink = document.querySelector('link[rel="stylesheet"]').href;

// URLからクエリパラメータを解析
var queryParams = new URL(styleSheetLink).search;

// クエリパラメータがある場合、日付を抽出して表示
if (queryParams) {
    // クエリの先頭の?を取り除き、年月日の形式に整形
    var lastUpdated = queryParams.replace('?', '');
    // YYYYMMDD の形式を YYYY年MM月DD日 に変更する
    var formattedDate = lastUpdated.slice(0, 4) + '年' + lastUpdated.slice(4, 6) + '月' + lastUpdated.slice(6, 8) + '日';

    // HTMLに日付を挿入
    document.getElementById('update-date').textContent = formattedDate;
}
