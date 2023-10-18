const signupUser = (payload) => {
    try {
        fetch('http://127.0.0.1:5000/sign-up', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .catch(err => console.log("an error happened", err))
    } catch {
        console.log("some unknown error")
    }
}

export {
    signupUser
}