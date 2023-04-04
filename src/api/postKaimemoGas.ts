export type postGasItem = {
  name: string
  type: string
  purchased: boolean
  created_at: string
  updated_at: string
  key?: number
  icon?: string
}

export const postKaimemoGas = (item: postGasItem, mode: string) => {
  // KaimemoアプリのバックエンドAPIを実行
  // TODO: 無理やり突破
  const url = process.env.gasApiEndPoint || ''
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mode: mode,
      key: item.key,
      name: item.name,
      icon: item.icon,
      type: item.type,
      purchased: item.purchased,
    }),
  }).then(
    function (response) {
      console.log({
        status: 'ok',
        mode: mode,
        item: item,
        response: response,
      })
    },
    function (error) {
      console.log(error)
    },
  )
}
