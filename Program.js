// Description:
//      Write a method that takes in an Object,
//      an action as a String, "edit" or "delete",
//          a property,
//          a newValue.
// The Task is to perform the action.
// If the action is "edit":
    // update the property value in the obj to the newValue.
// If the action is "delete":
    // remove the property from the obj and return the object.
function performAction(obj, action, property, newValue)
{
    if (!obj)
    {
        return obj;
    }

    if (action === "delete")
    {
        delete obj[property];
    }
    else if (action === "edit" && obj[property])
    {
        obj[property] = newValue;
    }
    return obj;
}

let myObj = {
    name: "Brandon",
    job: "Developer",
    age: 18
};

console.log(performAction(myObj, "edit", "age", 19));
console.log(performAction(myObj, "delete", "age", 19));