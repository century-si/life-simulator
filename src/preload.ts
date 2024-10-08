window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    // 检查 process.versions[dependency] 是否存在
    if (process.versions[dependency]) {
      replaceText(`${dependency}-version`, process.versions[dependency]);
    } else {
      console.warn(`Dependency ${dependency} not found in process versions.`);
    }
  }
})