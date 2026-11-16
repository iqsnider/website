const BOOK = 'Xu Chen and Masayoshi Tomizuka, <i>Introduction to Modern Controls with Illustrations in MATLAB and Python</i>, 2023'

// Mulberry32 seeded random number generator, returns values in [0, 1)
function mulberry32(a) {
  return () => {
    a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    const r = ((t ^ t >>> 14) >>> 0) / 4294967296

    return r
  }
}

// Split the tex file into problems, tracking the chapter each one belongs to
function parseProblems(tex) {
  const body = tex.split('\\begin{document}')[1].split('\\end{document}')[0]
  const parts = body.split(/\\(section\*|problem)\{([^}]*)\}(?:\{([^}]*)\})?/)
  const problems = []
  let chapter = ''
  for (let i = 1; i < parts.length; i += 4) {
    if (parts[i] === 'section*') {
      chapter = parts[i + 1]
    } else {
      problems.push({ id: parts[i + 1], group: parts[i + 2] || parts[i + 1], chapter: chapter, text: parts[i + 3] })
    }
  }

  return problems
}

// Pick a group uniformly, then a problem within it, so large groups of similar problems count once
function pickProblem(problems, seed) {
  const groups = {}
  problems.forEach(problem => {
    groups[problem.group] = groups[problem.group] || []
    groups[problem.group].push(problem)
  })
  const groupList = Object.values(groups)
  const rand = mulberry32(seed)
  const group = groupList[Math.floor(rand() * groupList.length)]
  const problem = group[Math.floor(rand() * group.length)]

  return problem
}

// Convert the text mode latex to html, math is left for MathJax
function toHtml(text) {
  const html = text.trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\\begin\{enumerate\}/g, '<ol type="a">')
    .replace(/\\end\{enumerate\}/g, '</ol>')
    .replace(/\\begin\{itemize\}/g, '<ul>')
    .replace(/\\end\{itemize\}/g, '</ul>')
    .replace(/\\item/g, '<li>')
    .replace(/\\texttt\{([^}]*)\}/g, '<code>$1</code>')
    .replace(/\\includegraphics\[[^\]]*\]\{([^}]*)\}/g, '<img src="$1">')
    .replace(/\\%/g, '%')
    .replace(/\n\s*\n/g, '<p>')

  return html
}

const today = new Date()
const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
const title = 'Ctrl Prblm ' + today.toLocaleDateString()
document.title = title
document.getElementById('title').innerText = title

fetch('ctrl_problems.tex')
  .then(response => response.text())
  .then(tex => {
    const problem = pickProblem(parseProblems(tex), seed)
    document.getElementById('problem').innerHTML = toHtml(problem.text)
    document.getElementById('source').innerHTML = 'Source: ' + BOOK + '. Chapter ' + problem.chapter + ', Exercise ' + problem.id.split('.')[1] + '.'

    // MathJax typesets the page when it loads, so load it after the problem is in place
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
    document.head.appendChild(script)
  })
