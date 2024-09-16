console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) =>
{
    console.log(`Your name is: ${data.trim()}`);
    process.exit();
});

process.on('exit', () =>
{
    console.log("This important software is now closing");
});

