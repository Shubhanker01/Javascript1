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
        resolve(function () {
            return orderId
        })
    })
    return p
}

function proceedToPayment(orderId) {
    let p = new Promise(function (resolve, reject) {
        if (orderId == 1) {
            resolve(function () {
                return 1
            })
        }
        else if (orderId == 2) {
            resolve(function () {
                return 2
            })
        }
        else if (orderId == 3) {
            resolve(function () {
                return 3
            })

        }
        else if (orderId == 4) {
            resolve(function () {
                return 4
            })
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
            resolve(function () {
                return 1
            })
        }
        else if (orderId == 2) {
            resolve(function () {
                return 2
            })
        }
        else if (orderId == 3) {
            resolve(function () {
                return 3
            })

        }
        else if (orderId == 4) {
            resolve(function () {
                return 4
            })
        }
        else {
            reject(function () {
                return "Sorry purchase is invalid"
            })
        }
    })
}

function updateWallet(orderId) {
    let p = new Promise(function (resolve, reject) {
        if (orderId == 1) {
            resolve(function () {
                wallet.push('boxing gloves')
            })
        }
        else if (orderId == 2) {
            resolve(function () {
                wallet.push('golf')
            })
        }
        else if (orderId == 3) {
            resolve(function () {
                wallet.push('bat')
            })

        }
        else if (orderId == 4) {
            resolve(function () {
                wallet.push('ball')
            })
        }
        else {
            reject(function () {
                return "cannot be added to wallet"
            })
        }
    })
    return p
}

let p1 = createOrder(orderId)
    .then(function(){
        return orderId
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (orderId) {
        return showOrderSummary(orderId)
    })
    .then(function (orderId) {
        return updateWallet(orderId)
    })
    .catch(function (err) {
        console.log(err.message)
    })
console.log(wallet)
console.log(p1)