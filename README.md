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
    Cooldown.AddCooldown("test")
    Cooldown.DeleteCooldown("test")
    Cooldown.GetCooldown("test")
```

### Add Cooldowns
```js
    let Cooldown = new Cooldowns()
    Cooldown.Deploy(["test", "test2"])
```

## Dealing with Users

### Get a User

Get with ID
Returns all users with this ID.

```js
    Cooldown.GetCooldown("test").GetUsersByID("ID")
    //If User: returns the users, else returns null
```

Get with Properties
Returns all users with these properties.

```js
    Cooldown.GetCooldown("test").GetUsersByProperties([{Color: "Blue", Server: "test", phone: "06060606"}])
    //If User: returns the users, else returns null
```

Get with Property
Returns all users with this property.

```js
    Cooldown.GetCooldown("test").GetUsersByProperty({Color: "Blue"})
    //If User: returns the users, else returns null
```

Get with ID and Property
Returns a unique user with these properties and this ID.

```js
    Cooldown.GetCooldown("test").GetUser("ID", [{Color: "Blue", Server: "test", phone: "06060606"}])
    //If User: returns the user, else returns null
```

Get All
Returns all the users in the cooldown.

```js
    Cooldown.GetCooldown("test").GetAll()
```

## Add a User

You have to specify at least two values: time and ID
ID is string/number.
Time is a number that represents the time of the cooldown.

Properties are optional.
Properties are an array which includes one/several object(s).
Those objects have the ID of the property as a key.

```js
    Cooldown.GetCooldown("test").AddUser({id: "ID", time: 60000, properties: [{Color: "blue", phone: "06060606"}]})
    //This cooldown will be deleted in 60000 seconds
```

## Remove a User

Remove with ID
Removes all users with this ID.

```js
    Cooldown.GetCooldown("test").RemoveUsersByID("ID")
    //If User: returns the users, else returns null
```

Remove with Properties
Removes all users with these properties.

```js
    Cooldown.GetCooldown("test").RemoveUsersByProperties([{Color: "Blue", Server: "test", phone: "06060606"}])
    //If User: returns the users, else returns null
```

Remove with Property
Removes all users with this property.

```js
    Cooldown.GetCooldown("test").RemoveUsersByProperty({Color: "Blue"})
    //If User: returns the users, else returns null
```

Remove with ID and Property
Removes a unique user with these properties and this ID.

```js
    Cooldown.GetCooldown("test").RemoveUser("ID", [{Color: "Blue", Server: "test", phone: "06060606"}])
    //If User: returns the user, else returns null
```

## User methods

### GetTime

This method returns the time left before the cooldown is deleted

```js
    Cooldown.GetCooldown("test").GetUser("ID", [{Color: "Blue", Server: "test", phone: "06060606"}]).GetTime()
```