function* createIds() {
    let x = 1;
    while (true) {
        yield x++;
    }
}

const gen = createIds();
for (let index = 0; index < 20; index++) {
    console.log(gen.next().value);
}
