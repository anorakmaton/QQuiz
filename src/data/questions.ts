import { Question } from '../types/quiz';

export const adultQuestions: Question[] = [
  {
    id: 1,
    text: '次のうち、家の中で転ばないために一番大切なことはどれでしょうか？​',
    options: ['部屋を明るくする', '速く走る練習をする', '水を撒いて遊ぶ', '部屋を散らかす'],
    correctAnswer: 0,
    explanation: '部屋を明るくすると、どこに物があるかがよく見えるので、つまずいたり転んだりする危険を減らせます。他にも、水をこぼさないように気をつけたり、散らかっているものを片付けたりすると、転ぶのを防ぐことができます。安全な環境を作って、転ばないようにしましょう！',
    explanationImage: ''
  },
  {
    id: 2,
    text: '浴室での事故を防ぐために、最も効果的な対策は？',
    options: ['滑り止めマットを使用する', '急いで入浴する', '床を濡らす', '手すりを外す'],
    correctAnswer: 0,
    explanation: '浴室内での転倒事故を防ぐために、滑り止めマットの使用は非常に効果的です。また、手すりの設置や、浴室内を乾燥させることも重要な予防策です。',
    explanationImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    text: '2024年の出動件数が最も多い日に同時に出動していた松山市の救急車は何両でしょうか？​',
    options: ['4', '7', '11', '15'],
    correctAnswer: 2,
    explanation: '2024年の出動件数が最も多い日に同時に出動していた松山市の救急車は11両でした。',
    explanationImage: 'src/image/1.jpg'
  },
  {
    id: 4,
    text: '松山市で2014年4月の救急コール数が最も多かった地区はどこでしょうか？​',
    options: ['土居田町', '北斎院町', '鷹子町', '堀江町'],
    correctAnswer: 0,
    explanation: '松山市で2014年4月の救急コール数が最も多かった地区は土居田町でした。',
    explanationImage: 'src/image/4.png'
  },
  {
    id: 5,
    text: '怪我をしてしまったとき、救急車を呼ぶか迷ったときにかける番号は？',
    options: ['#7119', '110', '119', '911'],
    correctAnswer: 0,
    explanation: '愛媛県と県内20市町が共同で、令和5年7月1日（土曜日）から救急の電話相談窓口『えひめ救急電話相談#7119』を開始しています。急なけがや病気で『救急車を呼んだ方がいいか』『病院を受診した方がいいか』などの判断に迷ったとき、365日24時間、看護師や医師などの専門家のアドバイスを電話で受けられます。',
    explanationImage: 'src/image/5.jpg'
  }
];

export const childrenQuestions: Question[] = [
  {
    id: 1,
    text: 'おうちの中で転ばないためには、どうしたらいいかな？',
    options: ['部屋を明るくする', '走り回る', '水を撒く', 'おもちゃを散らかす'],
    correctAnswer: 0,
    explanation: '部屋を明るくすると、つまずくものがよく見えるから安全だよ。おもちゃは使ったら片付けて、水をこぼしたらすぐに拭こうね！',
    explanationImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    text: 'おふろで気をつけることは？',
    options: ['すべらないように気をつける', '走る', '飛び跳ねる', '急いで入る'],
    correctAnswer: 0,
    explanation: 'おふろは滑りやすいから、ゆっくり慎重に動くことが大切だよ。滑り止めマットを使うと、もっと安全だね！',
    explanationImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    text: '階段を安全に降りるには？',
    options: ['手すりを使う', '走って降りる', '後ろ向きに降りる', '飛び降りる'],
    correctAnswer: 0,
    explanation: '階段では必ず手すりを使って、一段ずつゆっくり降りることが安全だよ。急いで走ったり、飛び降りたりは危ないからやめようね。',
    explanationImage: 'https://images.unsplash.com/photo-1520453714493-d85cdd7b033c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    text: '遊んだおもちゃはどうする？',
    options: ['片付ける', '散らかしたまま', '隠す', '投げる'],
    correctAnswer: 0,
    explanation: 'おもちゃは使ったら必ず片付けようね。散らかっていると、つまずいて転んでケガをする危険があるよ。',
    explanationImage: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    text: '地震が来たらどうする？',
    options: ['机の下に隠れる', '外に走って出る', '窓の近くに行く', '遊び続ける'],
    correctAnswer: 0,
    explanation: '地震が来たら、すぐに机の下に隠れるのが安全だよ。大きな家具や窓から離れて、落ち着いて行動することが大切だね。',
    explanationImage: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=800&q=80'
  }
];