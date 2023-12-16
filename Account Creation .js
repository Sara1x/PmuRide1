<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Account Creation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<form id="signupForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="button" onclick="createAccount()">Create Account</button>
</form>

<script>
   function createAccount() {
    // Retrieve user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real-world scenario, you would send this data to a server for processing
    console.log('Username:', username);
    console.log('Password:', password);

    // Here you can add AJAX (e.g., using fetch) to send data to the server for account creation
    // Example using fetch:
    // fetch('/api/createAccount', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server response:', data))
    // .catch(error => console.error('Error:', error));
}
</script>

</body>
</html>
