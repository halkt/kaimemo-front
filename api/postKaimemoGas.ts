export type postGasItem = {
  name: string
  type: string
  purchased: boolean
  created_at: string
  updated_at: string
}

export const postKaimemoGas = (targerItem: postGasItem, mode: string) => {
  // KaimemoアプリのバックエンドAPIを実行
  fetch(process.env.gasApiEndPoint, {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mode: mode,
      key: targerItem.key,
      name: targerItem.name,
      icon: targerItem.icon,
      type: targerItem.type,
      purchased: targerItem.purchased
    })
  }).then(function(response) {
    console.log({ status: 'ok', mode: mode, item: targerItem, response: response })
  }, function(error) {
    console.log(error)
  });
}
