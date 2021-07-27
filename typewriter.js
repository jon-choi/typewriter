const sentence = 'hello there from lighthouse labs\n';
let interval = 50;

for (const char of sentence) {
  interval += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);
  
};
