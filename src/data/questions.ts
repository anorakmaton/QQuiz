import { Question } from '../types/quiz';

export const adultQuestions: Question[] = [
  {
    id: 1,
    text: '次のうち、家の中で転ばないために一番大切なことはどれでしょうか？​',
    options: ['部屋を明るくする', '速く走る練習をする', '水を撒いて遊ぶ', '部屋を散らかす'],
    correctAnswer: 0,
    explanation: '部屋を明るくすると、どこに物があるかがよく見えるので、つまずいたり転んだりする危険を減らせます。他にも、水をこぼさないように気をつけたり、散らかっているものを片付けたりすると、転ぶのを防ぐことができます。安全な環境を作って、転ばないようにしましょう！',
    explanationImage: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80'
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
    text: '階段からの転落を防ぐための正しい行動は？',
    options: ['手すりを使う', '走って降りる', '振り返って話す', '荷物を両手に持つ'],
    correctAnswer: 0,
    explanation: '階段では必ず手すりを使い、ゆっくりと安全に上り下りすることが大切です。特に、荷物は片手で持ち、もう片方の手で手すりを使うようにしましょう。',
    explanationImage: 'https://images.unsplash.com/photo-1520453714493-d85cdd7b033c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    text: 'キッチンでの火災を防ぐために最も重要なことは？',
    options: ['調理中はその場を離れない', 'テレビを見ながら調理する', '油を多めに使う', 'ガスコンロを常に最大火力にする'],
    correctAnswer: 0,
    explanation: '調理中はその場を離れないことが火災予防の基本です。特に油を使う調理の際は要注意です。また、周囲に燃えやすいものを置かないことも重要です。',
    explanationImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    text: '地震発生時、家具の転倒から身を守るための事前対策として正しいものは？',
    options: ['家具を固定する', '重い物を上に置く', '家具を窓際に置く', '固定具を外す'],
    correctAnswer: 0,
    explanation: '家具の転倒防止には、L字金具やつっぱり棒などで家具をしっかり固定することが効果的です。特に寝室や子供部屋では必須の対策です。',
    explanationImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
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