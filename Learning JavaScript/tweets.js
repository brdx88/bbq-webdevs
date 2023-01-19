var tweet = prompt("Compose your tweet: ");

par_length = tweet.length;
par_left = 140-par_length;

alert(tweet.slice(0,140));

"You have written " + par_length +", you have " + par_left + " characters remaining.";
