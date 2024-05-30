let orderId = 2
let orders = ['boxing gloves', 'golf', 'bat', 'ball']
let wallet = []

function createOrder(orderId) {
    let p = new Promise(function (resolve, reject) {
        if (NaN == orderId) {
            reject(function (err) {
                console.log(err.message)
            })
        }
        resolve(orderId)
    })
    return p
}

function proceedToPayment(orderId) {
    let p = new Promise(function (resolve, reject) {
        if (orderId == 1) {
            resolve(1)
        }
        else if (orderId == 2) {
            resolve(2)
        }
        else if (orderId == 3) {
            resolve(3)

        }
        else if (orderId == 4) {
            resolve(4)
        }
        else {
            reject(function () {
                return "Sorry invalid order id"
            })
        }
    })
    return p
}

function showOrderSummary() {
    let p = new Promise(function (resolve, reject) {
        if (orderId == 1) {
            resolve(1)
        }
        else if (orderId == 2) {
            resolve(2)
        }
        else if (orderId == 3) {
            resolve(3)

        }
        else if (orderId == 4) {
            resolve(4)
        }
        else {
            reject(function () {
                return "Sorry purchase is invalid"
            })
        }
    })
    return p
}

function updateWallet(orderId) {
    let p = new Promise(function (resolve, reject) {
        if (orderId == 1) {
            resolve(wallet.push('boxing gloves'))
        }
        else if (orderId == 2) {
            resolve(wallet.push('golf'))
        }
        else if (orderId == 3) {
            resolve(wallet.push('bat'))

        }
        else if (orderId == 4) {
            resolve(wallet.push('ball'))
        }
        else {
            reject("cannot be resolved")
        }
    })
    return p
}

createOrder(5)
    .then(res => proceedToPayment(res).then(res => showOrderSummary(res).then(res => updateWallet(res))))
    .catch(err => console.log(err))
console.log(wallet)
