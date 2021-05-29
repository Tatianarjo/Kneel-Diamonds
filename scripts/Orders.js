import { getOrders, getSizes, getStyles, getMetals } from "./database.js"



const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles() 
    const sizes = getSizes()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find( //see look you're defining before you use it The c
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find( //see look you're defining before you use it The c
        (size) => {
            return size.id === order.sizeId 
        }
    ) 
    const foundStyle = styles.find( //see look you're defining before you use it The c
        (style) => {
            return style.id === order.styleId
        }
    )  
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>  
        Order #${order.id} cost ${costString}
    </li>`
    //this returns the sentence that tells the price and order number
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


 


