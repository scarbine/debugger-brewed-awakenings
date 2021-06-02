import { getEmployees , getOrders } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    // Find the number of items the employee sold
                    let counter = 0
                    for (const order of orders){
                        if (order.employeeId === parseInt(employeeId)){
                            counter = counter + 1
                        }
                     
                    }
                    window.alert(`The ${employee.name} has sold ${counter} products.`)
                }
            }
        }
    }
)

const employees = getEmployees()

const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

