const core = require('@actions/core');

try {
  const number = parseInt(core.getInput('number', { required: true }));
  if (isNaN(number)) {
    throw new Error('Invalid input: Not a number');
  }

  // 対話的な要素: ユーザーからの入力を受け取る
  console.log(`You entered the number: ${number}`);

  // 何らかの計算を行い、メッセージを生成
  const message = `The square of ${number} is ${number * number}`;

  // メッセージをアウトプットとして設定
  core.setOutput('message', message);
} catch (error) {
  core.setFailed(error.message);
}
