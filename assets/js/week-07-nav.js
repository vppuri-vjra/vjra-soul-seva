(() => {
  const mbpLinks = document.querySelector('.program-group > .program-links');
  if (!mbpLinks || document.querySelector('[data-week="07"]')) return;

  const week7 = `<details class="week-group" data-week="07"><summary>W7 · Goal Setting</summary><div class="week-links"><a href="/programs/pssm/mbp/week-07/goal-setting.html">Overall Goal Setting</a><a href="/programs/pssm/mbp/week-07/five-minute-summary.html">Five-Minute Summary</a><a href="/programs/pssm/mbp/week-07/thematic-summary.html">Thematic Summary</a><details class="week-group"><summary>Demo Scripts</summary><div class="week-links"><a href="/programs/pssm/mbp/week-07/executive-demo.html">Corporate Executives</a><a href="/programs/pssm/mbp/week-07/student-demo.html">Grades 8–9</a><a href="/programs/pssm/mbp/week-07/general-public-demo.html">General Public</a><a href="/programs/pssm/mbp/week-07/five-steps-demo.html">Five Steps · Science-First Demo</a><a href="/programs/pssm/mbp/week-07/five-steps-full-script.html">Five Steps · Full Script</a></div></details></div></details>`;

  mbpLinks.insertAdjacentHTML('afterend', week7);
})();
