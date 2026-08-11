/* ==========================================================================
   ARTICLES MANIFEST
   ==========================================================================
   One entry per article page (articles/{id}.html). Adding a new guide means:
   1) add an entry here, 2) create articles/{id}.html from the template.
   category: 'guide' | 'tech' | 'tips' | 'reviews' — matches Home's guide tabs.
   icon: any key from the Icons object in js/app.js.
   ========================================================================== */
window.ARTICLES_MANIFEST = [
  {
    id: 1, category: 'guide', color: '#FFA53E', icon: 'stealth', date: '2026-06-10',
    titleEn: 'How Rewriting Works: A Practical Guide',
    titleZh: '智能改写工作原理：实用指南',
    excerptEn: 'What "rewriting" actually changes in a sentence, and how to get output that still sounds like you.',
    excerptZh: '“改写”到底改变了句子中的什么，以及如何让输出依然保持你自己的语气。'
  },
  {
    id: 2, category: 'guide', color: '#4A90E2', icon: 'turnitin', date: '2026-06-14',
    titleEn: 'Paper Check: A Turnitin & iThenticate Primer',
    titleZh: '论文查重：Turnitin 与 iThenticate 入门',
    excerptEn: 'How similarity scores are calculated, what counts as a "match", and why 0% isn\'t the real goal.',
    excerptZh: '相似度分数是如何计算的，什么算作“匹配”，以及为什么0%并不是真正的目标。'
  },
  {
    id: 3, category: 'tech', color: '#FF4757', icon: 'usage', date: '2026-06-18',
    titleEn: 'What AI Detectors Actually Look At',
    titleZh: 'AI检测工具究竟在检测什么',
    excerptEn: 'Perplexity, burstiness, token patterns — the signals behind an AI-probability score, in plain language.',
    excerptZh: '困惑度、突发性、词元模式——用通俗语言解释AI概率分数背后的信号。'
  },
  {
    id: 4, category: 'tips', color: '#10B981', icon: 'statusOk', date: '2026-06-21',
    titleEn: '5 Habits That Quietly Raise Your AI Score',
    titleZh: '5个悄悄拉高你AI分数的习惯',
    excerptEn: 'Overusing em dashes, uniform sentence length, and other patterns detectors are trained to flag.',
    excerptZh: '过度使用破折号、句长过于一致，以及其他容易被检测工具标记的写作习惯。'
  },
  {
    id: 5, category: 'guide', color: '#7C3AED', icon: 'shield', date: '2026-06-25',
    titleEn: 'Reducing Plagiarism Without Losing Your Argument',
    titleZh: '在不丢失论点的前提下降低查重率',
    excerptEn: 'The difference between paraphrasing and disguising — and how to cite properly so you never need either.',
    excerptZh: '“改写”与“伪装”的区别，以及如何正确引用，从根本上避免二者。'
  },
  {
    id: 6, category: 'tech', color: '#4A90E2', icon: 'apikeys', date: '2026-06-29',
    titleEn: 'CNKI vs Turnitin vs Weipu: How Databases Differ',
    titleZh: 'CNKI、Turnitin与维普：数据库有何不同',
    excerptEn: 'Why the same paper can get very different similarity scores depending on which database checks it.',
    excerptZh: '为什么同一篇论文在不同数据库检测下会得到差异很大的相似度分数。'
  },
  {
    id: 7, category: 'guide', color: '#7C3AED', icon: 'usage', date: '2026-07-02',
    titleEn: 'Reading an AI Detection Report',
    titleZh: '如何解读AI检测报告',
    excerptEn: 'Section-by-section scores, sentence highlighting, and what a "high-risk paragraph" really means.',
    excerptZh: '分段分数、句子高亮显示，以及“高风险段落”究竟意味着什么。'
  },
  {
    id: 8, category: 'guide', color: '#10B981', icon: 'shield', date: '2026-07-06',
    titleEn: 'Reading a Plagiarism Report',
    titleZh: '如何解读查重报告',
    excerptEn: 'Matched sources, self-similarity, and the exclusions (quotes, bibliography) most reports ignore by default.',
    excerptZh: '匹配来源、自我相似度，以及大多数报告默认排除的部分（引用、参考文献）。'
  },
  {
    id: 9, category: 'tips', color: '#F59E0B', icon: 'statusWarn', date: '2026-07-09',
    titleEn: 'Common Mistakes Before Submitting a Thesis',
    titleZh: '提交论文前常见的错误',
    excerptEn: 'Last-minute formatting slips, citation gaps, and version-control mixups we see most often.',
    excerptZh: '最常见的临时格式失误、引用缺失以及版本混乱问题。'
  },
  {
    id: 10, category: 'reviews', color: '#EF4444', icon: 'user', date: '2026-07-12',
    titleEn: 'Student Review: Cutting Revision Time in Half',
    titleZh: '学生评价：修改时间减少一半',
    excerptEn: 'A final-year student walks through how they used similarity + AI reports together before submission.',
    excerptZh: '一位大四学生分享如何在提交前同时使用查重和AI检测报告。'
  },
  {
    id: 11, category: 'tech', color: '#FF4757', icon: 'stealth', date: '2026-07-15',
    titleEn: 'Perplexity and Burstiness, Explained With Examples',
    titleZh: '困惑度与突发性：举例说明',
    excerptEn: 'Two real sentences, side by side, showing exactly why one reads as "AI" and the other doesn\'t.',
    excerptZh: '两个真实句子对比，直观展示为何一句读起来像“AI”而另一句不像。'
  },
  {
    id: 12, category: 'tips', color: '#10B981', icon: 'statusOk', date: '2026-07-18',
    titleEn: 'Academic Tone Without Sounding Robotic',
    titleZh: '保持学术语气又不显得机械',
    excerptEn: 'Formal doesn\'t have to mean stiff. Small wording choices that keep writing precise and natural.',
    excerptZh: '正式不等于生硬。一些能让文字保持精准又自然的用词技巧。'
  },
  {
    id: 13, category: 'guide', color: '#4A90E2', icon: 'reports', date: '2026-07-21',
    titleEn: 'Building a Rewrite History You Can Trust',
    titleZh: '建立一份可信赖的改写记录',
    excerptEn: 'Why keeping before/after versions matters for advisors, committees, and your own peace of mind.',
    excerptZh: '为什么保留修改前后的版本，对导师、答辩委员会以及你自己都很重要。'
  },
  {
    id: 14, category: 'reviews', color: '#EF4444', icon: 'access', date: '2026-07-25',
    titleEn: 'Model Ranking: How We Compare AI Writing Models',
    titleZh: '模型排行：我们如何比较AI写作模型',
    excerptEn: 'The methodology behind the Model Ranking page — what "detection rate" and "similarity rate" mean here.',
    excerptZh: '模型排行页面背后的方法论——这里的“检出率”与“查重率”具体指什么。'
  },
  {
    id: 15, category: 'tips', color: '#F59E0B', icon: 'download', date: '2026-07-29',
    titleEn: 'Exporting and Sharing Your Reports Properly',
    titleZh: '正确导出与分享你的检测报告',
    excerptEn: 'PDF vs link sharing, what advisors actually need to see, and keeping a clean paper trail.',
    excerptZh: 'PDF导出与链接分享的区别，导师真正需要看到的内容，以及如何保持清晰的记录。'
  }
];
