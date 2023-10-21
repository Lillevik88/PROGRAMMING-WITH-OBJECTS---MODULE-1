$.ajax ({
    url: 'https://api.github.com/repos/Lillevik88/myfirstrepo',
    processData: false,
    success: function(response) {
        console.log(response)
        const serialized = JSON.stringify(response);
        console.log(serialized);
        const deserialized = JSON.parse(serialized);
        console.log(deserialized);
    }
})