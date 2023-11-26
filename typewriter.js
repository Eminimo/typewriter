const sentence = "hello there from lighthouse labs";

for (const [index, char] of sentence.split('').entries()) {
  setTimeout(() => {
    process.stdout.write(char);
    
    // Add a newline character at the end
    if (index === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, index * 50); // 50 milliseconds delay between each character
}

