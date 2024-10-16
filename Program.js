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