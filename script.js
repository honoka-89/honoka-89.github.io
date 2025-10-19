// HTML要素がすべて読み込まれた後に実行されるようにします
document.addEventListener('DOMContentLoaded', () => {
    // IDが 'js-test-button' のボタン要素を取得します
    const testButton = document.getElementById('js-test-button');

    // ボタンが存在するか確認します
    if (testButton) {
        // ボタンがクリックされたときの処理を設定します (イベントリスナー)
        testButton.addEventListener('click', () => {
            // アラートメッセージを表示します
            alert('JavaScriptが正常に動作しています！');
        });
    }

    // [おまけ] プロジェクトリンクがクリックされた時の処理（なくても動きます）id="project-link"今は不要なため削除済み
    const projectLink = document.getElementById('project-link');
    if (projectLink) {
        projectLink.addEventListener('click', (event) => {
            console.log('プロジェクトリンクがクリックされました');
            // ここに、例えばクリック数を記録するなどのJavaScript処理を追加できます。
        });
    }

    console.log('スクリプトが読み込まれました。');
});