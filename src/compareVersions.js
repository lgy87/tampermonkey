globalThis.rapeflower ??= {}
rapeflower.compareVersions = function (v1, v2) {
  // 将版本号拆分为数字数组
  const parts1 = v1.split(".").map(Number)
  const parts2 = v2.split(".").map(Number)

  // 确定最大长度
  const maxLength = Math.max(parts1.length, parts2.length)

  // 逐项比较
  for (let i = 0; i < maxLength; i++) {
    // 如果某个版本号较短，缺少的部分视为0
    const num1 = i < parts1.length ? parts1[i] : 0
    const num2 = i < parts2.length ? parts2[i] : 0

    if (num1 < num2) return -1
    if (num1 > num2) return 1
  }

  return 0
}
