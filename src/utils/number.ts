export function formatToken (token?: number) {
  if(!token) return "0"
  return Math.round(token).toLocaleString('en-US')
}

export function formatTon(ton?: number) {
  if(!ton) return "0"
  return ton?.toFixed(3).replace(/(0+|\.0+)$/g, "")
}


export const abbreviateNumber = (num: number = 0, options?: { roundTo?: number }) => {
  const { roundTo = 2 } = options || {}

  const additionStr = [
    {
      numLen: 0,
      add: "",
    },
    {
      numLen: 4,
      add: "K",
    },
    {
      numLen: 7,
      add: "M",
    },
    {
      numLen: 10,
      add: "B",
    },
  ]
  const numLen = num.toFixed(0).length
  const additionData = additionStr.reverse().find((value) => value.numLen <= numLen)

  if (!additionData?.add) return String(num.toFixed(roundTo))

  return `${(num / Math.pow(10, additionData.numLen - 1)).toFixed(roundTo).replace(/\.0+$/g, "")}${additionData.add}`
}