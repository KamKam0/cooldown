# Cooldown
Cooldown is a module that allows you to create cooldown for everything you want.

## Installation
```js
npm install @kamkam1_0/cooldown
```

## How to use

### Initiation
```js
    const Cooldowns = require("@kamkam1_0/cooldown")
    let Cooldown = new Cooldowns()
```

### Add/Remove/Get a Cooldown
```js
    let Cooldown = new Cooldowns()
    Cooldown.addCooldown("test")
    Cooldown.deleteCooldown("test")
    Cooldown.getCooldown("test")
```

### Add Cooldowns
```js
    let Cooldown = new Cooldowns()
    Cooldown.deploy(["test", "test2"])
```

## Dealing with Users

### Get a User

Get with ID
Returns all users with this ID.

```js
    Cooldown.getCooldown("test").getUsersByID("ID")
    //If User: returns the users, else returns null
```

Get with Properties
Returns all users with these properties.

```js
    Cooldown.getCooldown("test").getUsersByProperties([{color: "Blue"}, {server: "test"}, {phone: "06060606"}])
    //If User: returns the users, else returns null
```

Get with Property
Returns all users with this property.

```js
    Cooldown.getCooldown("test").getUsersByProperty({color: "Blue"})
    //If User: returns the users, else returns null
```

Get with ID and Property
Returns a unique user with these properties and this ID.

```js
    Cooldown.getCooldown("test").getUser("ID", [{color: "Blue"}, {server: "test"}, {phone: "06060606"}])
    //If User: returns the user, else returns null
```

Get All
Returns all the users in the cooldown.

```js
    Cooldown.getCooldown("test").getAll()
```

## Add a User

You have to specify at least two values: time and ID
ID is string/number.
Time is a number that represents the time of the cooldown in seconds.

Properties are optional.
Properties are an array which includes one/several object(s).
Those objects have the ID of the property as a key.

```js
    Cooldown.getCooldown("test").addUser({id: "ID", time: 60000, properties: [{color: "blue"}, {phone: "06060606"}]})
    //This cooldown will be deleted in 60000 seconds
```

## Remove a User

Remove with ID
Removes all users with this ID.

```js
    Cooldown.getCooldown("test").removeUsersByID("ID")
    //If User: returns the users, else returns null
```

Remove with Properties
Removes all users with these properties.

```js
    Cooldown.getCooldown("test").removeUsersByProperties([{color: "Blue"}, {server: "test"}, {phone: "06060606"}])
    //If User: returns the users, else returns null
```

Remove with Property
Removes all users with this property.

```js
    Cooldown.getCooldown("test").removeUsersByProperty({color: "Blue"})
    //If User: returns the users, else returns null
```

Remove with ID and Property
Removes a unique user with these properties and this ID.

```js
    Cooldown.getCooldown("test").removeUser("ID", [{color: "Blue"}, {server: "test"}, {phone: "06060606"}])
    //If User: returns the user, else returns null
```

## User methods

### getTime

This method returns the time left before the cooldown is deleted

```js
    Cooldown.getCooldown("test").getUser("ID", [{color: "Blue"}, {server: "test"}, {phone: "06060606"}]).getTime()
```